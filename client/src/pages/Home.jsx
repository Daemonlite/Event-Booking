import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="position">

      {events.map((res) => (
        <div className="id" key={res._id}>
          <img src={res.image} alt='event-images' className="event-img"/>
          <div className="name">{res.eventName}</div>
          <div className="date">{res.date}</div>
          <div className="descr">{res.description}</div>
          <div className="category">{res.category}</div>
          <div className="price">{res.ticketPrice}</div>
          <div className="btn btn-primary btn-sm">Book Event</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
