const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:false,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('Event',eventSchema)