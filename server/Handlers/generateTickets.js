const Event = require('../models/eventModel')
const Ticket = require('../models/ticket')


const getTickets = async (req,res) => {
  let ticket;
  try {
    ticket = await Ticket.find()
  } catch (error) {
    console.log(error)
  }
  if(!ticket){
    res.status(404).json({message:'no user found'})
  }
  
  return res.status(200).json(ticket)
}


const generateTicket = async (req,res) => {
  const {event,number,ticketList} = req.body

  let existingEvent;
  try {
    existingEvent = await Event.findById(event)
  } catch (error) {
    console.log(error)
  }
  if(!existingEvent){
    return res.status(400).json({message:"User not found"})
  }

  const randomString = (length, chars) => {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };
  
  const ticket = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return randomString(12, chars);
  };
  
  const tickets = [];
  for (let i = 0; i < number; i++) {
    tickets.push(ticket());
  }
  
  console.log(tickets);

  const tick = new Ticket({
    event,
    number,
    ticketList:tickets,
  });

  try {
    await tick.save();
      existingEvent.tickets.unshift(tick)
    await existingEvent.save();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
  return res.status(201).json(tick);
}

const deleteTicket = async (req, res, next) => {
  const id = req.params.id;

  let tick;
  try {
    tick = await Ticket.findOne({ _id: id });
    if (!tick) {
      return res.status(404).json({ message: "The specified Ticket was not found." });
    }
    await Ticket.deleteOne({ _id: id });
    await Event.updateOne({ _id: tick.event }, { $pull: { tickets: { _id: tick._id } } });
  } catch (err) {
    return res.status(500).json({ message: "Unable to delete the  Ticket. An internal server error has occurred." });
  }
  return res.status(200).json({ message: "Successfully deleted the  Ticket." });
};
module.exports = {
  getTickets,
  generateTicket,
  deleteTicket,
}


  