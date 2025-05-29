import React from "react";
import "./Explore.scss";

import image41 from "../../Assets/image41.jpg";
import image42 from "../../Assets/image42.jpg";
import image43 from "../../Assets/image43.jpg";
import image44 from "../../Assets/image44.jpg";

const Explore = () => {
  return (
    <div className="explore-container">
      {/* Search/Filter Section */}
      <section className="search-filter">
        <div className="search-bar">
          <input type="text" placeholder="Search Indian destinations..." />
          <button>Search</button>
        </div>
        <div className="filter-options">
          <select>
            <option value="">Select Region</option>
            <option value="north">North India</option>
            <option value="south">South India</option>
            <option value="east">East India</option>
            <option value="west">West India</option>
          </select>
        </div>
      </section>

      {/* Destination Cards Grid */}
      <section className="destination-grid">
        <h2>Explore India</h2>
        <div className="grid">
          <div className="destination-card">
            <img src={image41} alt="Taj Mahal" /> {/* Use image41 here */}
            <h3>Taj Mahal</h3>
            <p>The Symbol of Love, Agra</p>
            <button>Learn More</button>
          </div>
          <div className="destination-card">
            <img src={image43} alt="Goa Beach" /> {/* Use image43 here */}
            <h3>Goa Beaches</h3>
            <p>Sun, Sand, and Sea</p>
            <button>Learn More</button>
          </div>
          <div className="destination-card">
            <img src={image42} alt="Kerala Backwaters" />{" "}
            {/* Use image42 here */}
            <h3>Kerala Backwaters</h3>
            <p>Serene Houseboat Cruises</p>
            <button>Learn More</button>
          </div>
          <div className="destination-card">
            <img src={image44} alt="Himalayas" /> {/* Use image44 here */}
            <h3>Himalayas</h3>
            <p>Adventure in the Mountains</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="pagination">
        <button>Previous</button>
        <span>1</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Explore;
