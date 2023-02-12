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
          <div className="event-img">{res.image}</div>
          <div className="name">{res.eventName}</div>
          <div className="date">{res.date}</div>
          <div className="descr">{res.description}</div>
          <div className="category">{res.category}</div>
          <div className="price">{res.ticketPrice}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
