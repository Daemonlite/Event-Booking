import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [profile, setProfile] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'u7qxbla7'); 

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dexc98myq/image/upload', formData);
      const imageUrl = res.data.secure_url;
      setProfile(imageUrl);
    } catch (err) {
      console.log(err);
    }
  }

 const navigate = useNavigate()
  const handleSumbit = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:7000/api/users/register/", {
      fullName,
      username,
      email,
      password,
      profile
    })
    .then((res) => {
      console.log(res.data);
      toast.success("registration successful");
      if (res.data) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/login");
      }
      
      setFullName("");
      setUsername("")
      setpassword("");
      setEmail("");
    })
    .catch((err)=>toast.error(err.response.data))


  }
  return (
    <div className="position">
      <form onSubmit={handleSumbit} className="form-group">
        <div className="inputs">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full Name..."
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Username..."
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            type="email"
            className="form-control"
            placeholder="enter your email..."
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="profile" className="lab">Add profile photo</label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            placeholder="upload profile picture .."
            onChange={handleFileChange}
          />
          <input
            type="password"
            className="form-control"
            placeholder="create your password.."
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-secondary btn-lg button">
         Register
        </button>
        <hr className="hr" />
        <p className="asking">
          Already have an account ? <a href="/login"> Login</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
