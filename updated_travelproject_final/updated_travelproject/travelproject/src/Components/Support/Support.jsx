// components/Support/Support.jsx
import React, { useState } from "react";
import "./Support.css";

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const supportCategories = [
    {
      name: "Account",
      questions: [
        {
          title: "How do I reset my password?",
          answer:
            'You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.',
        },
        {
          title: "How do I update my profile information?",
          answer:
            "Go to your profile settings page to update your name, email, and other details.",
        },
        // ... more questions for Account
      ],
    },
    {
      name: "Bookings",
      questions: [
        {
          title: "How do I make a booking?",
          answer:
            "You can make a booking by searching for your desired destination and dates, then following the booking process.",
        },
        {
          title: "How do I cancel my booking?",
          answer:
            "You can cancel your booking by going to your bookings page and selecting the booking you wish to cancel.",
        },
        // ... more questions for Bookings
      ],
    },
    {
      name: "Travel",
      questions: [
        {
          title: "What travel insurance do you offer?",
          answer:
            "We offer a range of travel insurance options to suit your needs. Please visit our travel insurance page for more details.",
        },
        {
          title: "What are the visa requirements for my destination?",
          answer:
            "Visa requirements vary depending on your nationality and destination.  Please check with your local embassy or consulate for the most up-to-date information.",
        },
        // ... more questions for Travel
      ],
    },
    {
      name: "Safety",
      questions: [
        {
          title: "What safety measures are in place for tours?",
          answer:
            "We prioritize your safety.  Our tours are conducted by experienced guides, and we adhere to strict safety protocols.  We also provide safety briefings before each tour.",
        },
        {
          title: "What if there is a medical emergency during my trip?",
          answer:
            "In case of a medical emergency, our team is available 24/7 to provide assistance. We have emergency procedures in place and will coordinate with local medical services as needed.",
        },
        // ... more questions for Travel
      ],
    },
    // ... more categories
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle category
  };

  return (
    <section className="support section container">
      <div className="secTit1e">
        <h2>Support</h2>
        <p>How can we help you?</p>
      </div>

      <div className="support-categories">
        {supportCategories.map((category) => (
          <div key={category.name} className="support-category">
            <h3 onClick={() => handleCategoryClick(category.name)}>
              {category.name}
              {/* Add a plus/minus icon here (optional) */}
              <span>{selectedCategory === category.name ? "-" : "+"}</span>
            </h3>
            {selectedCategory === category.name && ( // Show questions if category is selected
              <ul className="support-questions">
                {category.questions.map((question) => (
                  <li key={question.title}>
                    <h4>{question.title}</h4>
                    <p>{question.answer}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="support-contact">
        <h3>Contact Us</h3>
        <p>
          If you can't find the answer you're looking for, please contact us:
        </p>
        <ul>
          <li>Email: support@wanderwithworld.com</li>
          <li>Phone: +91 9737647891</li>
          {/* Add more contact info as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Support;
