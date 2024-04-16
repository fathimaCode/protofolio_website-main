//app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Userhub = require("./models/UserHub");

const createRoutes = require("./routes/userRoutes");
const proRoutesInfo = require('./routes/pro_routes')
const project_routes = require('./routes/project_routes')
const path = require("path");
const multer = require("multer");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Multer configuration for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "protofolio_files_images")); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Routes
const userRoutes = createRoutes(User);
app.use("/user-endpoint", userRoutes);
app.use("/project_routes", project_routes);
app.use("/proroutes", proRoutesInfo);
app.use('/protofolio_files_images', express.static('protofolio_files_images'));
// MongoDB Connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@binu.7dvbwfy.mongodb.net/${process.env.MONGO_DB}`
).then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// Route to handle image upload
app.post("/upload", upload.single("image"), (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({ message: "File uploaded successfully", filename: req.file.originalname });
});
