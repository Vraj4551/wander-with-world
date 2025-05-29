import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { FaWikipediaW } from "react-icons/fa6";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // This will run on initial load AND whenever localStorage changes
  useEffect(() => {
    const checkUserStatus = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    // Check on mount
    checkUserStatus();

    // Set up event listener for storage changes (in case other tabs/components change localStorage)
    window.addEventListener("storage", checkUserStatus);

    // Clean up event listener
    return () => {
      window.removeEventListener("storage", checkUserStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signup");
  };

  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <Link to="/">
          <FaWikipediaW className="icon" />
          <FaWikipediaW className="icon" />
          <FaWikipediaW className="icon" />
        </Link>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">
            <Link to="/destinations">Destinations</Link>
          </li>
          <li className="navList">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="navList">
            <Link to="/reviews">Testimonial</Link>
          </li>
          <li className="navList">
            <Link to="/portfolio">FAQ</Link>
          </li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      {/* Show user info if logged in */}
      {user ? (
        <div className="userMenu">
          <button
            className="userBtn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {user.name ? `${user.name} (${user.email})` : user.email}
          </button>
          {showDropdown && (
            <div className="dropdownMenu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/signup">
          <button className="signUpBtn btn">Log In</button>
        </Link>
      )}

      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
