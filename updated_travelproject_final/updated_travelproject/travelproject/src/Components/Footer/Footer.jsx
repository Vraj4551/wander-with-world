import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

// Imported Icons
import { FaWikipediaW } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // Function to handle navigation and scroll to top
    /*const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified route
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    };*/

    return (
      <div className="footer">
        <div className="secContainer container grid">
          <div className="logoDiv">
            <div className="footerLogo" data-aos="fade-up">
              <FaWikipediaW className="icon" />
              <FaWikipediaW className="icon" />
              <FaWikipediaW className="icon" />
            </div>
            <div className="socials flex" data-aos="fade-up">
              <a
                href="https://www.facebook.com/youraccount"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook className="icon" />
              </a>
              <a
                href="https://twitter.com/youraccount"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter className="icon" />
              </a>
              <a
                href="https://www.instagram.com/wander_withworld?utm_source=qr&igsh=MWZqcG5kdmt5MXFycA== "
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="icon" />
              </a>
            </div>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Information</span>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/travel">Travel</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Helpful Links</span>
            <li>
              <Link to="/destinations">Destination</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/conditions">Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Contact Details</span>
            <span className="phone">+91 9737647891</span>
            <span className="email">aryanjayesh4121@gmail.com</span>
          </div>
        </div>
      </div>
    );
};

export default Footer;