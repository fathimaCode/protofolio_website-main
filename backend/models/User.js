//user.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
let userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    contact:{
        type:String
    }
})
module.exports = mongoose.model('User',userSchema)