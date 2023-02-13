const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    ticketNumber:{
        type:Number,
        required:false,
    },
    image:{
        type:String,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    
  
},{
    timestamps:true
})

module.exports = mongoose.model('Booking',bookingSchema)
