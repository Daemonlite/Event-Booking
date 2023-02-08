const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },

    number:{
        type:Number,
        required:true
    },
    ticketList:{
        type:Array
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Ticket',ticketSchema)