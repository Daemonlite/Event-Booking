const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    image:{
     type:String,
     require:false
    },
    location:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    ticketPrice:{
        type:Number,
        require:true,
    },
    numberOfTickets:{
        type:Number,
        require:true
    },
    tickets:{
        type:Array,
    },
    user:{
        type:String,
        require:true,  
    }

},{
    timestamps:true,
})

module.exports = mongoose.model('Event',eventSchema)