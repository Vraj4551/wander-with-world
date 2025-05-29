import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Import Components
import Destinations from "./Components/Destinations/Destinations";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Navbar from "./Components/Navbar/Navbar";
import Portifolio from "./Components/Portifolio/Portifolio"; // About Us
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews"; // Testimonial
import Subscribe from "./Components/Subscribe/Subscribe"; // Gallery
import SignUp from "./Components/SignUp/SignUp";
import Blog from "./Components/Blog/Blog";
import Explore from "./Components/Explore/Explore";
import Privacy from "./Components/Privacy/Privacy";
import Support from "./Components/Support/Support";
import Travel from "./Components/Travel/Travel";
import Conditions from "./Components/Conditions/Conditions";
import Booking from "./Components/Booking/Booking"; // New Booking Component
import Register from "./Components/Register/Register";

function App() {
  const location = useLocation();

  // Define pages where components should be hidden
  const excludedRoutes = [
    "/destinations",
    "/about-us",
    "/reviews",
    "/portfolio",
    "/signup",
    "/blog",
    "/explore",
    "/privacy",
    "/support",
    "/travel",
    "/conditions",
    "/booking",
    "/register",
  ];
  const isExcludedPage = excludedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  // Dynamically add body class based on the current route
  useEffect(() => {
    document.body.className = ""; // Reset body classes
    const routeClasses = {
      "/destinations": "destinations-page",
      "/about-us": "about-us-page",
      "/reviews": "testimonial-page",
      "/portfolio": "gallery-page",
      "/signup": "signup-page",
      "/blog": "blog-page",
      "/explore": "explore-page",
      "/privacy": "privacy-page",
      "/support": "support-page",
      "/travel": "travel-page",
      "/conditions": "conditions-page",
      "/register": "register-page",
    };
    const bodyClass = routeClasses[location.pathname];
    if (bodyClass) {
      document.body.classList.add(bodyClass);
    }
  }, [location]);

  return (
    <div className="App">
      {/* Show Navbar except on Sign Up and Booking pages */}
      {location.pathname !== "/signup" &&
        !location.pathname.startsWith("/booking") && <Navbar />}

      <main className="main-content">
        <Routes>
          {/* Define application routes */}
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about-us" element={<Portifolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/portfolio" element={<Subscribe />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/middle" element={<Middle />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/booking/:id" element={<Booking />} />{" "}
          <Route path="/register" element={<Register />} />
          {/* New Booking Page Route */}
        </Routes>

        {!isExcludedPage && (
          <>
            <Middle />
            <Destinations />
            <Portifolio />
            <Reviews />
            <Questions />
            <Subscribe />
          </>
        )}
      </main>

      {/* Footer is shown only on non-excluded pages */}
      {!isExcludedPage && <Footer />}
    </div>
  );
}

export default App;
