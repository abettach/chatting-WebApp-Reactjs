const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_KEY);

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
})

const User = new mongoose.model('User', userSchema);

module.exports = User;