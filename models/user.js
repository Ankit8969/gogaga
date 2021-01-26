const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    location: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    }
})



const User = new mongoose.model('User', postSchema)

module.exports = User