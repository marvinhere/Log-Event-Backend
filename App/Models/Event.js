require('../../Database/mongo');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    event_id:{
        type: String,
        required: true,
        minlength: 1
      },
    target:String, //product, user
    user_id:{
        type:Number,
        required:false
    }
});

const Event = mongoose.model('event',EventSchema);

module.exports = Event;