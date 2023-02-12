import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const  navigate = useNavigate()
   const [eventName,setEventName] = useState("")
   const  [date,setDate] = useState("")
   const [description,setDescription] = useState("")
   const [image,setImage] = useState("")
   const [location,setLocation] = useState("")
   const [category,setCategory] = useState("")
   const [ticketPrice,setTicketPrice] = useState("")


   const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'u7qxbla7'); 

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dexc98myq/image/upload', formData);
      const imageUrl = res.data.secure_url;
      setImage(imageUrl);
    } catch (err) {
      console.log(err);
    }
  }
  const user = JSON.parse(localStorage.getItem("userInfo"))
    const handleSumbit= (e) => {
     e.preventDefault()
     axios.post('http://localhost:7000/api/events',{
        eventName,
        date,
        description,
        image,
        location,
        category,
        ticketPrice,
        user:user._id
     })
     .then((res) => {
        console.log(res.data);
        toast.success("succesfully created");
        if (res.data) {
          navigate("/home");
        }
    })
    .catch((err)=>{
        toast.error(err.response.data)
    })
    } 
  return (
    <div className="position">
<form onSubmit={handleSumbit} className="form-group event">
        <div className="inputs">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the events name..."
            value={eventName}
            onChange={(e)=>setEventName(e.target.value)}
          />
          <input
            type="date"
            className="form-control other"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />
          <textarea
            type="email"
            className="form-control"
            placeholder="describe the event..."
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
          <input
            className="form-control other"
            type="file"
            id="formFile"
            onChange={handleFileChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter event's location..."
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
            <input
            type="number"
            className="form-control"
            placeholder="enter the ticket price"
            value={ticketPrice}
            onChange={(e)=>setTicketPrice(e.target.value)}
          />

      <select className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option value="" defaultValue='' className="form-control">Choose Event Category</option>
        <option value="Corporate events" className="form-control">Corporate events</option>
        <option value="Social events" className="form-control">Social events</option>
        <option value="Arts and cultural events" className="form-control">Arts and cultural events</option>
        <option value="Sports events" className="form-control">Sports events</option>
        <option value="Educational events" className="form-control">Educational events</option>
        <option value="Religious events" className="form-control">Religious events</option>
        <option value="Political events" className="form-control">Political events</option>
        <option value="Community events" className="form-control">Community events</option>
        <option value="Entertainment events" className="form-control">Entertainment events</option>
        <option value="Outdoor events" className="form-control">Outdoor events</option>
      </select>
        </div>


        <button type="submit" className="btn btn-secondary btn-lg">
        Create Event
        </button>

      </form>
    </div>
  )
}

export default CreateEvent