import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Destinations.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill, BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import image21 from "../../Assets/image21.jpg";
import image22 from "../../Assets/image22.jpg";
import image23 from "../../Assets/image23.jpg";
import image24 from "../../Assets/image24.jpg";
import image25 from "../../Assets/image25.jpg";
import image26 from "../../Assets/image26.jpg";
import image27 from "../../Assets/image27.jpg";
import image28 from "../../Assets/image28.jpg";
import image29 from "../../Assets/image29.jpeg";

const destinationsData = [
  {
    id: 1,
    img: image21,
    name: "Goa",
    location: "India",
    rating: 4.7,
    price: 800,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Beach", "Recommended"],
  },
  {
    id: 2,
    img: image22,
    name: "Manali",
    location: "India",
    rating: 4.5,
    price: 500,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Mountain", "Nature"],
  },
  {
    id: 3,
    img: image23,
    name: "Shimla",
    location: "India",
    rating: 4.2,
    price: 600,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Mountain", "Recommended"],
  },
  {
    id: 4,
    img: image24,
    name: "Taj Mahal",
    location: "India",
    rating: 4.9,
    price: 1200,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Park", "Recommended"],
  },
  {
    id: 5,
    img: image25,
    name: "Jaipur",
    location: "India",
    rating: 4.4,
    price: 700,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Park", "Nature"],
  },
  {
    id: 6,
    img: image26,
    name: "Kerala",
    location: "India",
    rating: 4.3,
    price: 900,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Beach", "Nature"],
  },
  {
    id: 7,
    img: image27,
    name: "Mumbai",
    location: "India",
    rating: 4.6,
    price: 1000,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Beach", "Recommended"],
  },
  {
    id: 8,
    img: image28,
    name: "Hyderabad",
    location: "India",
    rating: 4.1,
    price: 400,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Park", "Nature"],
  },
  {
    id: 9,
    img: image29,
    name: "Statue of Unity",
    location: "India",
    rating: 4.8,
    price: 1500,
    availableDates: ["2025-03-08", "2025-12-31"],
    categories: ["Mountain", "Recommended"],
  },
];

const Destinations = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Recommended",
    "Beach",
    "Park",
    "Nature",
    "Mountain",
  ];
  const [destinationName, setDestinationName] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "destinationName") setDestinationName(value);
    if (name === "budget") setBudget(value);
    if (name === "date") setDate(value);
  };

  const handleCategoryClick = (category) => setActiveCategory(category);

  const handleBooking = (destination) => {
    navigate(`/booking/${destination.id}`, { state: { destination } });
  };

  const filteredDestinations = destinationsData.filter(
    (destination) =>
      (!destinationName ||
        destination.name
          .toLowerCase()
          .includes(destinationName.toLowerCase())) &&
      (!budget || destination.price <= parseInt(budget)) &&
      (!date ||
        destination.availableDates.some(
          (availableDate) => new Date(availableDate) >= new Date(date)
        )) &&
      (activeCategory === "All" ||
        destination.categories.includes(activeCategory))
  );
  

  return (
    <div className="destination section container">
      <h2>Destinations</h2>
      <div className="secContainer">
        <div className="secTitle" data-aos="fade-up">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input
              type="text"
              placeholder="Destination Name"
              value={destinationName}
              onChange={handleChange}
              name="destinationName"
            />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input
              type="number"
              placeholder="Budget"
              value={budget}
              onChange={handleChange}
              name="budget"
            />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input
              type="date"
              value={date}
              onChange={handleChange}
              name="date"
            />
          </div>
          <button
            className="btn flex"
            data-aos="fade-up"
            onClick={filteredDestinations}
          >
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            {categories.map((category) => (
              <li
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="destinationContainer grid">
          {filteredDestinations.map((destination) => (
            <div
              className="singleDestination"
              key={destination.id}
              data-aos="fade-up"
            >
              <div
                className="imgDiv"
                data-aos="fade-up"
                onClick={() => handleBooking(destination)}
                style={{ cursor: "pointer" }}
              >
                <img src={destination.img} alt={destination.name} />
                <div className="destinationInfo absolute">
                  <span className="name">{destination.name}</span>
                  <span className="rating">{destination.rating}</span>
                </div>
              </div>
              <div className="descInfo flex">
                <p className="flex">
                  <TiLocation className="icon" />
                  {destination.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
