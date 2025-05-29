import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import Video1 from '../../Assets/Video1.mp4';
import image16 from '../../Assets/image16.jpeg';
import image17 from '../../Assets/image17.jpeg';
import image18 from '../../Assets/image18.jpeg';
import image20 from '../../Assets/image20.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

import { AiOutlineSwapRight } from 'react-icons/ai';

const Home = () => {

    useEffect(() => {
        // Initialize AOS animations
        Aos.init({ duration: 2000 });
    
        // Scroll to the top of the page on component mount
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);    
    return (
      <div className="Home">
        <div className="videoBg">
          <video src={Video1} autoPlay loop muted></video>
        </div>

        <div className="SectionText">
          <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
          <p>
            Discover the world's most adventurous nature, life is so short for a
            trip.
          </p>
          {/* Apply the "primary-btn" class here 
                <button className="btn flex primary-btn">
                    GET STARTED <AiOutlineSwapRight className='icon' />
                </button>*/}
        </div>

        <div className="popularPlaces">
          <div className="content">
            <h3>Popular Places</h3>
            <div className="images flex" data-aos="fade-up">
              {/* Images will go here */}
              <img src={image16} alt="Destination Image" data-aos="fade-up" />
              <img src={image17} alt="Destination Image" data-aos="fade-up" />
              <img src={image18} alt="Destination Image" data-aos="fade-up" />
              <img src={image20} alt="Destination Image" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;