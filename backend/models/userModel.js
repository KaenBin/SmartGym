const mongoose = require('mongoose');

const user = {
    username: '',
    email: '',
    password: '',
    avatar: '',
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatar: Buffer
})

module.exports = mongoose.model('User', userSchema)