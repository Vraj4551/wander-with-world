import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Portifolio.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

// Corrected import paths
import icon1 from '../../Assets/protection.png'; // Corrected path and variable name
import icon2 from '../../Assets/destination.png'; // Corrected path
import icon3 from '../../Assets/online-chat.png'; // Corrected path
import image30 from '../../Assets/image30.jpg';

const Portifolio = () => {

        useEffect(()=>{
            Aos.init({duration: 2000})
            },[]);
    return (
        <div className="portfolio section container">
            <div className="secContainer grid">
                <div className="leftContent"> 
                    <div className="secHeading">
                        <h3 data-aos="fade-up">Why Should You Choose Us</h3>
                        <p data-aos="fade-up">
                            We have extensive knowledge and experience
                            in the travel industry.
                        </p>
                    </div>
                    <div className="grid">
                        <div className="singlePortfolio flex"> {/* Corrected class name typo */}
                            <div className="iconDiv">
                                <img src={icon1} alt="Icon image" />
                            </div>
                            <div className="infor" data-aos="fade-up">
                                <h4 data-aos="fade-up">Safety and support</h4>
                                <p data-aos="fade-up">
                                    Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex"> {/* Corrected class name typo */}
                            <div className="iconDiv">
                                <img src={icon2} alt="Icon image" />
                            </div>
                            <div className="infor" data-aos="fade-up">
                                <h4 data-aos="fade-up">Diverse Range of Destination</h4>
                                <p data-aos="fade-up">
                                Whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex"> {/* Corrected class name typo */}
                            <div className="iconDiv">
                                <img src={icon3} alt="Icon image" />
                            </div>
                            <div className="infor" data-aos="fade-up">
                                <h4 data-aos="fade-up">24/7 Customer Support</h4>
                                <p data-aos="fade-up">
                                Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the trip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right Content" data-aos="fade-down">
                    <img src={image30} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Portifolio;