import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Bookings = () => {
  const [user, setUser] = useState("");
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/booking")
      .then(res => setBooking(res.data))
      .catch(err => console.log(err.response.data));
  }, []);

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem("userInfo"));
    setUser(User);
  }, []);

 

  const deleteBooking = id => {
    axios
      .delete(`http://localhost:7000/api/booking/${id}`)
      .then(() => {
        toast.success("Booking deleted successfully");
        setBooking(prevBookings =>
          prevBookings.filter(booking => booking._id !== id)
        );
      })
      .catch(err => {
        console.log(err.response.data);
        toast.error("Something went wrong");
      });
  };
  const filteredBooking = booking.filter(book => book.user === user);
  return (
    
    <div className="position">
      {booking.map(res => (
        <div key={res._id}>
          <div className="image">
            <img src={res.image} alt="" />
          </div>
          <div className="name">{res.eventName}</div>
          <div className="location">{res.location}</div>
          <div className="date">{res.date}</div>
          <p onClick={() => deleteBooking(res._id)} className="btn btn-primary">
            delete
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
