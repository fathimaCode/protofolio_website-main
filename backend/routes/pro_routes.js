// routes/commonRoutes.js
const express = require("express");
const pro_routes = express.Router();
const userHubSchema = require("../models/UserHub");

pro_routes.route("/create").post(async (req, res, next) => {
        await userHubSchema.create(req.body)
            .then((result) => {
                res.json({
                    data: result,
                    message: "Item added successfully",
                    status: 200,
                });
            })
            .catch((err) => {
                return next(err);
            });
    });

    pro_routes.route("/getAll").get(async (req, res, next) => {
        await userHubSchema.find()
            .then((result) => {
                res.json({
                    data: result,
                    message: "All items retrieved successfully",
                    status: 200,
                });
            })
            .catch((err) => {
                return next(err);
            });
    });
    pro_routes.route("/getByuserId").post(async (req, res, next) => {
        const { userid } = req.body;
    
        await userHubSchema.find({ userid })
            .then((result) => {
                console.log(userid)
                if (result) {
                    res.json({
                        data: result,
                        message: "User details retrieved successfully",
                        status: 200,
                    });
                } else {
                    res.status(404).json({
                        message: "User not found",
                        status: 404,
                    });
                }
            })
            .catch((err) => {
                return next(err);
            });
    });
    pro_routes.route("/get/:id").get(async (req, res, next) => {
        await userHubSchema.findById(req.params.id)
            .then((result) => {
                res.json({
                    data: result,
                    message: "Item details retrieved successfully",
                    status: 200,
                });
            })
            .catch((err) => {
                return next(err);
            });
    });

    pro_routes.route("/update/:id").put(async (req, res, next) => {
        await userHubSchema.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            .then((result) => {
                console.log(result);
                res.json({
                    data: result,
                    message: "Item updated successfully",
                    status: 200,
                });
            })
            .catch((err) => {
                return next(err);
            });
    });

    pro_routes.route("/delete/:id").delete(async (req, res, next) => {
        await userHubSchema.findByIdAndDelete(req.params.id)
            .then(() => {
                res.json({
                    message: "Item deleted successfully",
                    status: 200,
                });
            })
            .catch((err) => {
                return next(err);
            });
    });

  


module.exports = pro_routes;
