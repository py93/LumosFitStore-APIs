const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: "This is mandatory"
  },
  password:{
    type: String,
    required: "Password cannot be blank"
  }
})
const User = mongoose.model("User", UserSchema)
module.exports = {User}