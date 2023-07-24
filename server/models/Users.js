const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String},
    password: {type: String, required: true},
    email: {type: String, required: true },
    saves: [{type: String}],
    inquiries: [{type: Object}],
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel