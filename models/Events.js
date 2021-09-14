const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EventSchema = new Schema({
    title: {
           type: String,
           required: true
       },
       snippet: {
           type: String,
           required: true
       },
       content: {
            type: String,
            required: true
        }
   
   }, {timestamps: true} );


   
   const Event = mongoose.model('Event', EventSchema);
   module.exports = Event;