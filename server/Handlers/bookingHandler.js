const Booking = require("../models/bookingModel");
const User = require("../models/userModel");
const getBookings = async (req, res) => {
  let book;
  try {
    book = await Booking.find();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    res.status(404).json({ message: "no user found" });
  }

  return res.status(200).json(book);
};

const createBooking = async (req, res) => {
  const { eventName, date, location, user,image } = req.body;

  if (!eventName || !user || !date || !location) {
    res.status(400).json({ message: "Enter required fields" });
  }

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const books = new Booking({
    eventName,
    date,
    location,
    image,
    user,
  });

  try {
    await books.save();
    existingUser.bookings.unshift(books);
    await existingUser.save();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
  return res.status(201).json(books);
};

const deleteBooking = async (req, res, next) => {
  const id = req.params.id;

  let book;
  try {
    book = await Booking.findOne({ _id: id });
    if (!book) {
      return res
        .status(404)
        .json({ message: "The specified Booking was not found." });
    }
    await Booking.deleteOne({ _id: id });
    await User.updateOne(
      { _id: book.user },
      { $pull: { bookings: { _id: book._id } } }
    );
  } catch (err) {
    return res.status(500).json({
      message:
        "Unable to delete the  booking. An internal server error has occurred.",
    });
  }
  return res
    .status(200)
    .json({ message: "Successfully deleted the  booking." });
};

module.exports = {
  getBookings,
  createBooking,
  deleteBooking,
};
