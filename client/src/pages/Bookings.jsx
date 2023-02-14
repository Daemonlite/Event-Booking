import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

const Bookings = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("");
  const [booking, setBooking] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/booking")
      .then(res => setBooking(res.data))
      .catch(err => console.log(err.response.data));
  }, [booking]);

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
  const filteredBooking = booking.filter(book => book.user  === user._id)

  return (
    
    <div className="position books">
      {filteredBooking.map(res => (
        <div key={res._id}>
 
 <div className="card" style={{width:"20rem"}}>

  <div className="card-body">
    <h5 className="card-title">{res.eventName}</h5>
    <p className="card-text">{res.location}</p>
    <div className="card-text">${res.price}</div>
    <p className="card-text">{res.date}</p>
 <div className="adds">
 <p onClick={() => deleteBooking(res._id)} className="btn btn-primary">Delete</p>
    <a href="/checkout" className="btn btn-primary check">checkout</a>
 </div>
  </div>
</div>
        </div>
      ))}


    </div>
  );
};

export default Bookings;
