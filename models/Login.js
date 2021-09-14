const mongoose = require('mongoose')
const Schema = mongoose.Schema 



const loginSchema = new Schema({
    userName: {
        type: String,
        require: [true, 'please enter Username'],
        unique: true,
        lowercase: true,
    },
    password:{
     type: String,
    require: [true, 'Please enter password'],
    minLength: [6, 'Minium length is 6 characters']
}
}, {timeStamps: true})

const Login = mongoose.model('Login', loginSchema)
module.exports= Login;