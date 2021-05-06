const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({userId: String, password: String})

const User = mongoose.model("User", UserSchema)
module.exports = {User}