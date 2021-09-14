const mongoose = require('mongoose')
const Schema = mongoose.schema 
const {isEmail } = require('validator')




const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Please enter email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Minium length is 6 characters']
    }
}, {timestamps: true})

const User = mongoose.model('user', usherSchema);


module.exports = User;
