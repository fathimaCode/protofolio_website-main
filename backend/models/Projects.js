//user.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
let projectSchema = new Schema({
    email:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    fileName:{
        type:String
    }
})
module.exports = mongoose.model('Projects',projectSchema)