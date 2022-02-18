const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:27017/event_project';

mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});

//get default connection

const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));