const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    ticketAmount:{
        type:Number,
        required:true,
    },
    user:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Booking',bookingSchema)
