import { useState,useEffect } from 'react';
import Sports from '../Events/Sports';
import Corporate from '../Events/Corporate';
import Entertainment from '../Events/Entertainment';
import Politics from '../Events/Politics';
import Arts from '../Events/Arts'
import Community from '../Events/Community';
import Outdoor from '../Events/Outdoor';
import Religious from '../Events/Religious';
import Educational from '../Events/Educational';
import Social from '../Events/Social';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activeItem, setActiveItem] = useState('Corporate events');
  const navigate = useNavigate();
  // const [user, setuser] = useState("");



  const handleClick = item => {
    setActiveItem(item);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) navigate("/login");
  },[navigate],0);

  return (
    <div className="position">
      <ul className="map">
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Corporate events')}>Corporate events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Social events')}>Social events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Arts and cultural events')}>Arts & cultural events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Sports events')}>Sports events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Educational events')}>Educational events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Religious events')}>Religious events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Political events')}>Political events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Community events')}>Community events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Entertainment events')}>Entertainment events</li>
        <li className="map-item btn btn-outline-secondary btn-lg" onClick={() => handleClick('Outdoor events')}>Outdoor events</li>
      </ul>
      <hr className="line hr"/>
      
      {activeItem === 'Corporate events' && <Corporate />}
      {activeItem === 'Sports events' && <Sports />}
      {activeItem === 'Political events' && <Politics />}
      {activeItem === 'Entertainment events' && <Entertainment />}
      {activeItem === 'Social events' && <Social/>}
      {activeItem === 'Arts and cultural events' && <Arts/>}
      {activeItem === 'Educational events' && <Educational/>}
      {activeItem === 'Religious events' && <Religious/>}
      {activeItem ===  'Outdoor events' && <Outdoor/>}
      {activeItem === 'Community events' && <Community/>}
    </div>
  );
};

export default Home;

