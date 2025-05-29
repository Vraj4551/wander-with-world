import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Reviews.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// IMported icons
import {AiFillStar} from 'react-icons/ai'

// Imported Images
import image31 from "../../Assets/image31.jpg";
import image32 from "../../Assets/image32.jpg";
import image33 from "../../Assets/image33.jpg";
import image34 from "../../Assets/image34.jpg";
import image35 from "../../Assets/image35.jpg";

const Reviews = () => {

        useEffect(()=>{
            Aos.init({duration: 2000})
            },[]);
    return (
        <div className=" review section container">
            <div className="secContainer grid" >
                <div className="textDiv">
                    <span className="redText" data-aos="fade-up">From OUR CLIENTS</span>
                    <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
                    <p data-aos="fade-up"> By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.
                    </p>

                    <span className="stars flex" data-aos="fade-up">
                        <AiFillStar className=" icon" />
                        <AiFillStar className=" icon" />
                        <AiFillStar className=" icon" />
                        <AiFillStar className=" icon" />
                        <AiFillStar className=" icon" />
                    </span>

                    <div className="clientsImages flex" >
                        <img src={image31} alt="Client Image" data-aos="fade-up"/>
                        <img src={image32} alt="Client Image" data-aos="fade-up"/>
                        <img src={image34} alt="Client Image" data-aos="fade-up"/>
                        <img src={image35} alt="Client Image" data-aos="fade-up"/>
                    </div>
                </div>
                <div className="imgDiv">
                    <img src={image33} alt="Div image" data-aos="fade-down"/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;