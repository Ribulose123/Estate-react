import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = () => {
    setOpenIndex(!openIndex);

    console.log("you toggled");
  };

  return (
    <section id="FAQs">
      <div className="faq-content">
        <div className="faq-info">
          <h2>FAQ's</h2>
          <p>We are ready to answer your question</p>
        </div>

        <div className="item-faq">
          <div className="faq-container">
            <div className="faq-question">
              <h4>How do i serach for properties on your wbsite?</h4>
              <FaChevronDown className="cheveron" onClick={handleToggle} />
            </div>
            <div className={`faq-answer === ${openIndex ? "show" : ""}`}>
              <p>
                To search for properties, simply go to the home page nd use the
                search button. Specify if you want to rent or buy. Choose your
                desired location. property type and prices
              </p>
            </div>
          </div>

          <div className="faq-container">
            <div className="faq-question">
              <h4>How do i serach for properties on your wbsite?</h4>
              <FaChevronDown className="cheveron" onClick={handleToggle} />
            </div>
            <div className={`faq-answer === ${openIndex ? "show" : ""}`}>
              <p>
                To search for properties, simply go to the home page nd use the
                search button. Specify if you want to rent or buy. Choose your
                desired location. property type and prices
              </p>
            </div>
          </div>
          <div className="faq-container">
            <div className="faq-question">
              <h4>What is the difference between buying aand renting?</h4>
              <FaChevronDown className="cheveron" onClick={handleToggle} />
            </div>
            <div className={`faq-answer === ${openIndex ? "show" : ""}`}>
              <p>
                Buying a property offers long-term stability, equity building
                and control over modifications, but involves higher upfront
                costs and less flexibility. Renting provides greater mobility
                and lower intial cost, but lacks ownershio benifits and
                long-term investment potentials
              </p>
            </div>
          </div>
          <div className="faq-container">
            <div className="faq-question">
              <h4>How can i shedule a property viewing?</h4>
              <FaChevronDown className="cheveron" onClick={handleToggle} />
            </div>
            <div className={`faq-answer === ${openIndex ? "show" : ""}`}>
              <p>
                Contact Gateway real estate agent through our phone line or
                email ddress, expressing your interest in the property and
                requesting a convenient time for a viewing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAqs;
