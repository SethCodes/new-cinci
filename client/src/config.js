import dotenv from 'dotenv'
dotenv.config()
const BACKEND_URL = process.env.NODE_ENV === 'development'? "http://localhost:5000":"http://exercisemerntracker.herokuapp.com"

export default BACKEND_URL;
