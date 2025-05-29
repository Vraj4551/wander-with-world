// components/Conditions/Conditions.jsx
import React from "react";
import "./Conditions.css";

const Conditions = () => {
  return (
    <section className="conditions section container">
      <div className="secTit1e">
        <h2>Terms and Conditions</h2>
        <p>
          Please read these terms and conditions carefully before using our
          website.
        </p>
      </div>

      <div className="conditions-content">
        {/*  General Structure - Adapt to your specific needs */}

        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using our website, you agree to be bound by these
          terms and conditions. If you do not agree with these terms, please do
          not use our website.
        </p>

        <h3>2. Use of Website</h3>
        <p>
          You may use our website for lawful purposes only and in accordance
          with these terms and conditions. You agree not to use our website:
          <ul>
            <li>
              In any way that violates any applicable federal, state, local, or
              international law or regulation.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any "spam," "chain letters," or
              "junk mail."
            </li>
            {/* Add more points as needed */}
          </ul>
        </p>

        <h3>3. Travel Bookings</h3>
        <p>
          {/* Details about booking process, cancellations, refunds, etc. */}
          All travel bookings made through our website are subject to the terms
          and conditions of the respective travel providers (airlines, hotels,
          etc.). We act as an intermediary and are not responsible for the
          services provided by these third parties.
        </p>
        {/* ... more sections as needed ... */}

        <h3>4. Intellectual Property</h3>
        <p>
          The content of this website, including text, graphics, logos, images,
          and software, is the property of Wander with World and is protected by
          copyright and other intellectual property laws.
        </p>

        <h3>5. Disclaimer</h3>
        <p>
          We strive to provide accurate and up-to-date information on our
          website. However, we make no warranties, express or implied, about the
          completeness, accuracy, reliability, suitability or availability with
          respect to the website or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk.
        </p>

        <h3>6. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms and conditions at any time.
          Your continued use of the website following the posting of revised
          terms means that you accept the changes.
        </p>

        <h3>7. Contact Us</h3>
        <p>
          If you have any questions about these terms and conditions, please
          contact us at [your contact information].
        </p>
      </div>
    </section>
  );
};

export default Conditions;
