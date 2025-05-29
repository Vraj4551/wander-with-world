// components/Travel/Travel.jsx
import React, { useState, useEffect } from "react";
import "./Travel.css";
import Destinations from "../Destinations/Destinations"; // Import your Destinations component
import Video1 from "../../Assets/Video1.mp4";


const Travel = () => {
  const [showDestinations, setShowDestinations] = useState(false); // State to control visibility

  const handleExploreClick = () => {
    setShowDestinations(true); // Show Destinations when "Explore" is clicked
  };

  return (
    <section className="travel section container">
      <div className="travel-content">
        <div className="travel-text">
          {" "}
          {/* Text content area */}
          <h2>Discover Your Next Adventure</h2>
          <p>
            Embark on unforgettable journeys with Wander with World. Explore
            breathtaking destinations, experience unique cultures, and create
            memories that will last a lifetime.
          </p>
          <button className="btn" onClick={handleExploreClick}>
            Explore Destinations
          </button>{" "}
          {/* Button to trigger Destinations */}
        </div>

        <div className="travel-image">
          {" "}
          {/* Image or video area */}
          {/* You can add an image or video here */}
          <video src={Video1} autoPlay muted loop></video>
          {/* Replace with your image */}
          {/* OR */}
          {/* <video src="your-travel-video.mp4" autoPlay muted loop></video> */}
        </div>
      </div>
      {/* Conditionally render Destinations */}
      {showDestinations && <Destinations />}{" "}
      {/* Only show Destinations if showDestinations is true */}
    </section>
  );
};

export default Travel;
