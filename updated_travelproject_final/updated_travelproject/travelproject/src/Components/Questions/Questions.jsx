import React, { useState, useEffect } from 'react';
import './Questions.css';
import Accordion from './Accordion';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Questions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [active, setActive] = useState(null); 

  const faqData = [
    { title: "How do I choose the right travel destination?", desc: "Consider your interests, budget, and desired experiences. Research destinations that align with your preferences and offer attractions or activities you find appealing." },
    { title: "What are some tips for packing light?", desc: "Roll your clothes, use packing cubes, and bring versatile items. Create a packing list and stick to it. Consider the climate and activities you'll be doing to avoid overpacking." },
    { title: "Is travel insurance necessary?", desc: "Yes, travel insurance is highly recommended to protect against unexpected events such as medical emergencies, trip cancellations, lost luggage, and other unforeseen circumstances. It provides peace of mind while traveling." },
    { title: "How do I book flights and accommodation?", desc: "You can book flights and accommodation through various online travel agencies, airline websites, hotel websites, or travel agents. Compare prices and read reviews before making a booking." },
    { title: "What documents do I need for international travel?", desc: "For international travel, you'll typically need a valid passport. Depending on your destination, you may also need a visa, travel insurance, and other documents. Check the specific requirements for your destination well in advance." },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.querySelector('.formContent input[type="email"]').value;
    const question = document.querySelector('.formContent textarea').value;

    try {
      const response = await fetch('/api/send-question', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, question }), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Your question has been submitted successfully!');
      // Clear the form after successful submission
      document.querySelector('.formContent input[type="email"]').value = '';
      document.querySelector('.formContent textarea').value = '';

    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      alert('There was an error submitting your question. Please try again.');
    }
  };

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className="secContainer" data-aos="fade-up">
        <div className="accordion" data-aos="fade-up">
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              desc={faq.desc}
              active={active}
              setActive={setActive}
              data-aos="fade-up"
            />
          ))}
        </div>
        <div className="form"> {/* Form section */}
          <div className="secHeading">
            <h4 data-aos="fade-up">Do you have any specific question?</h4>
            <p className="description" data-aos="fade-up">
              Please fill the form below and our dedicated team will get in touch
              with you as soon as possible.
            </p>
          </div>
          <div className="formContent" data-aos="fade-up">
            <input type="email" placeholder="Enter email address" data-aos="fade-up" />
            <textarea placeholder="Enter your question here" style={{ resize: 'none' }} data-aos="fade-up"></textarea>
            <button className="btn" data-aos="fade-up" onClick={handleSubmit}>
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;