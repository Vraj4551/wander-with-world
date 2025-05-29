import React from 'react';
import './Questions.css';
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

const Accordion = ({ title, desc, active, setActive }) => {
    return (
        <div className="accordionContainer">
            <span className={(active === title ? 'activeTitle' : '')+" title" + " flex"}>
                {title}
                <span onClick={() => setActive(title)} > 
                    {active === title ? (
                        <BsArrowDownCircle className="icon" />  
                    ) : (
                        <BsArrowUpCircle className='icon' />
                    )}
                </span>
            </span>
            <p className={`${active === title ? "show" : ""} description`}>
                {desc}
            </p>
        </div>
    );
};

export default Accordion;