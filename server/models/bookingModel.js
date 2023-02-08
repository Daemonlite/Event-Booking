const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    event:{
        type:String,
        required:true,
    },
    ticketNumber:{
        type:Number,
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
