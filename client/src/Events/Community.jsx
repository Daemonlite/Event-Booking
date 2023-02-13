import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Community = () => {
  const [events, setEvents] = useState([]);
  const [user, setuser] = useState("");

  

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  useState(() => {
    const User = JSON.parse(localStorage.getItem("userInfo"));
    setuser(User);
  }, []);

  const deleteEvent = id => {
    axios
      .delete(`http://localhost:7000/api/events/${id}`)
      .then(() => {
        toast.success("Booking deleted successfully");
        setEvents(prevBookings =>
          prevBookings.filter(booking => booking._id !== id)
        );
      })
      .catch(err => {
        console.log(err.response.data);
        toast.error("Something went wrong");
      });
  }

  const filteredEvents = events.filter(event=> event.category === 'Community events')
  return (
    <div>
      {filteredEvents.map((res) => (
        <div key={res._id}>
  
          <div className="card mb-3 let" style={{ maxWidth: "640px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={res.image}
                  className="img-fluid rounded-start home-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{res.eventName}</h5>
                  <p className="card-text">{res.description}</p>
                  <div className="prices">
                    <p className="card-text">${res.ticketPrice}</p>
                    <p className="card-text">
                      <small className="text-muted">{res.date}</small>
                    </p>
                  </div>
                  <div className="add">
                    {user._id === res.user && (
                     <p onClick={() => deleteEvent(res._id)} className="btn btn-primary">Delete</p>
                    )}
                    <p
                      onClick={() => {
                        axios
                          .post("http://localhost:7000/api/booking/", {
                            eventName: res.eventName,
                            date: res.date,
                            location: res.location,
                            image: res.image,
                            price: res.ticketPrice,
                            user: user._id,
                          })
                          .then(() =>
                            toast.success("Event booked successfully")
                          )
                          .catch((err) => toast.error(err.response.data));
                      }}
                      className="btn btn-primary btn-sm ali"
                    >
                      Book event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
            {filteredEvents.length === 0 && <p>No events in this section,<a href="/events/create">add Event</a></p>}
    </div>
  )
}

export default Community