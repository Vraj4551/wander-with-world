import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Subscribe.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Import Image
import image36 from '../../Assets/image36.jpg'

const Subscribe = () => {

        useEffect(()=>{
            Aos.init({duration: 2000})
            },[]);
    return (
        <div className="subscribe section container" >
            <div className="secContainer grid" >
                <img src={image36} alt="Div Image" data-aos="fade-up"/>

                <div className="textDiv">
                    <h4 data-aos="fade-up"> Best Way To Start Your Journey! </h4>
                    <p data-aos="fade-up">
                        We offer personalized itineraries tailored to individual preferences and interests.
                    </p>
                    <button className="btn" data-aos="fade-up">Start Here</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;