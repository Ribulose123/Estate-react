import { useState } from "react";
import { testimony } from "../Constants/Data.json";
import { FaQuoteLeft } from "react-icons/fa";

const Testimony = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <section className="testiominy">
      <h2>Testimonial</h2>

      <div className="containter-test">
        <div
          className="slider-row"
          style={{
            transform: `translateX(-${currentImg * 100}%)`,
          }}
        >
          {testimony.map((item, index) => (
            <div key={index} className="slide-col">
              <div className="user-image">
                <img src={item.image} alt="people" />
              </div>
              <div className="user-content">
                <FaQuoteLeft className="quote" />
                <p>{item.description}</p>
                <h3>{item.client}</h3>
                <h4>{item.job}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="indicator">
          {testimony.map((_, index) => (
            <button
              key={index}
              className={index === currentImg ? "in-btn active-btn" : "in-btn"}
              onClick={() => setCurrentImg(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
