const mongoose = require('mongoose')

const user = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("User", user);
