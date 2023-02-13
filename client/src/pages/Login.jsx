import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7000/api/users/login/", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("login successful");
        if (res.data) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          navigate("/home");
        }
        setPassword("");
        setEmail("");
      })
      .catch((err) => toast.error(err.response.data));
  };
  return (
    <div className="position">
      <form onSubmit={handleSubmit} className="form-group login">
        <div className="inputs">
          <input
            type="email"
            name=""
            id=""
            className="form-control"
            placeholder="enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="create your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-secondary btn-lg button">
          Log In
        </button>
        <hr className="hr" />
        <p className="asking">
          Don't have an account ? <a href="/register"> SignUp</a>{" "}
        </p>

        <p className="ask">
          forgot password ? <a href="/reset">Reset password</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
