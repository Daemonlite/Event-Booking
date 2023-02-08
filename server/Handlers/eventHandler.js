const Event = require('../models/eventModel')

const getEvents = async (req,res) => {
    let event;
    try {
      event = await Event.find()
    } catch (error) {
      console.log(error)
    }
    if(!event){
      res.status(404).json({message:'no user found'})
    }
    
    return res.status(200).json(event)
  
}

const createEvent = async (req,res) => {
    const {eventName,date,location,category,ticketPrice,tickets,numberOfTickets,description} = req.body
    
   if(!eventName || !date || !location || !ticketPrice|| !numberOfTickets || !description){
    return res.json({message:"please add all fields"})
   }

    const create = await Event.create({
        eventName,
        date,
        location,
        category,
        description,
        ticketPrice,
        numberOfTickets,
        tickets
    }) 
    
    if(create){
        return res.status(201).json(create)
    }else{
        return res.status(400).json({message:"an error ocurred"})
    }
}

const updateEvent = async (req,res) => {
    const eventId = req.params.id;
    const event= req.body;
  
    const updatedEvent  = await Event.findByIdAndUpdate(eventId, event, { new: true });
  
    if (!updatedEvent) {
      return res.status(404).json({ message: " Event not found" });
    }
  
    res.status(200).json(updatedEvent);
  
}

const deleteEvent = async (req,res) => {
  const eventId = req.params.id;
  
  const event = await Event.findByIdAndDelete( eventId);

  if (!event) {
    return res.status(404).json({ message: "Event not  found" });
  }

  res.status(200).json({ message: "Event deleted successfully" });
}

module.exports ={
  getEvents,
  deleteEvent,
  createEvent,
  updateEvent,
} 