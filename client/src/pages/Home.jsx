import { useState, useEffect } from "react";
import axios from "axios";
import {toast} from  'react-toastify'
const Home = () => {
  const [events, setEvents] = useState([]);
const  [user,setuser]= useState("")

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
    
  },[]);

useState(()=>{
  const User = JSON.parse(localStorage.getItem("userInfo"))
  setuser(User)
},[])



  return (
    <div className="position">
      {events.map((res) => (
        <div className="id" key={res._id}>
          <img src={res.image} alt="event-images" className="event-img" />
          <div className="name">{res.eventName}</div>
          <div className="date">{res.date}</div>
          <div className="descr">{res.description}</div>
          <div className="category">{res.category}</div>
          <div className="price">${res.ticketPrice}</div>
          <div onClick={()=>{
             axios.post('http://localhost:7000/api/booking/',{
              eventName:res.eventName,
              date:res.date,
              location:res.location,
              image:res.image,
              user:user._id,
            })
            .then(()=>toast.success('Event booked successfully'))
            .catch((err)=> toast.error(err.response.data))
          }} className="btn btn-primary btn-sm">Book Event</div>
          {user._id === res.user && <p onClick={()=>axios.delete(`http://localhost:7000/api/events/${res._id}`)} className='btn btn-primary'>delete</p>}
        </div>
      ))}
    </div>
  );
};

export default Home;
