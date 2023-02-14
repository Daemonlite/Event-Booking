import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setuser(user);
    if (!user) navigate("/login");
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <div className="position">
      <div className="profile-img">
        <img src={user.profile} alt="userProfile" className="profile" />
      </div>
      <div className="name">
        {user.fullName}
        <div className="username">@{user.username}</div>
      </div>
      <div className="logout btn btn-primary" onClick={logout}>
        Logout
      </div>
      <div>
       
      </div>
      <hr />
    </div>
  );
};

export default ProfilePage;
