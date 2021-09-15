import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = ({ handleLoginClick, handleContactClick }) => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [active, setactive] = useState(false);

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
  
  //change temp from float to int
  let shortTemp = String(temp);

  if(shortTemp.length > 2){
    shortTemp = shortTemp.substring(0,2);
    setTemp(shortTemp);
  }

  useEffect(() => {
    const getWeather = async () => {
      const url = process.env.REACT_APP_WEATHER_API;
      const res = await axios.get(url);
    
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.temp);
  };
  getWeather();
}, []);

  const handleClick = () => {
    handleLoginClick();
  };

  const handleClickB = () => {
    handleContactClick();
  };

  const toggleClass = () => {
    const currentState = active;
    setactive(!active);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* weather */}
        <div id="navbar-weather">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-weather">
            <li><img src={weatherIcon} alt=""/></li>
            <li>{`${temp}F in Cincinnati`}</li>
          </ul>
        </div>

        {/* logo / title */}
        <a className="navbar-brand" href="/">
            Cincinnati Attractions
        </a>

        {/* nav toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName="nav-link--active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link--active" aria-current="page" to="/event">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link--active" aria-current="page" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a
              href="#"
                className="nav-link login"
                aria-current="page"
                onClick={handleClick}
              >
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a
              href="#"
                className="nav-link contact"
                aria-current="page"
                onClick={handleClickB}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
