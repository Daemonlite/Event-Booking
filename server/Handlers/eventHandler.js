const Event = require("../models/eventModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getEvents = async (req, res) => {
  let event;
  try {
    event = await Event.find();
  } catch (error) {
    console.log(error);
  }
  if (!event) {
    res.status(404).json({ message: "no user found" });
  }

  return res.status(200).json(event);
};

const createEvent = async (req, res) => {
  const {
    eventName,
    date,
    location,
    category,
    ticketPrice,
    tickets,
    numberOfTickets,
    description,
    user,
    image,
  } = req.body;

  if (!eventName || !date || !location || !ticketPrice) {
    return res.status(400).json({ message: "add all fields" });
  }

  let profileImageUrl;
  try {
    const result = await cloudinary.uploader.upload(image);
    profileImageUrl = result.secure_url;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed to upload profile image" });
  }
  const create = await Event.create({
    eventName,
    date,
    location,
    category,
    description,
    ticketPrice,
    tickets,
    user,
    image,
  });

  if (create) {
    return res.status(201).json(create);
  } else {
    return res.status(400).json({ message: "an error ocurred" });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const event = req.body;

  const updatedEvent = await Event.findByIdAndUpdate(eventId, event, {
    new: true,
  });

  if (!updatedEvent) {
    return res.status(404).json({ message: " Event not found" });
  }

  res.status(200).json(updatedEvent);
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  const event = await Event.findByIdAndDelete(eventId);

  if (!event) {
    return res.status(404).json({ message: "Event not  found" });
  }

  res.status(200).json({ message: "Event deleted successfully" });
};

module.exports = {
  getEvents,
  deleteEvent,
  createEvent,
  updateEvent,
};
