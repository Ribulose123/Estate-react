import { useState } from "react";
import { location } from "../Constants/Data.json"; // Assuming this contains location data
import { FaPhone, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  const [locationIndex, setLocationIndex] = useState(0);

  // Handle the location toggle based on the index
  const handleToggle = (index) => {
    setLocationIndex(index);
  };

  return (
    <section className="address" id="Contact">
      <div className="address-info">
        <div className="address-title">
          <h2>Get in touch</h2>

          {/* Location buttons */}
          <div className="location-indicator">
            {location.map((item, index) => (
              <button
                key={index}
                className={index === locationIndex ? "toggle-active" : ""}
                onClick={() => handleToggle(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="address-content">
          <img src="/public/assets/balcony.avif" alt="" />

          <div id="location-details" className="location-details">
            <div
              key={location[locationIndex].name}
              className="container-address"
            >
              <div className="phone-content">
                <div className="phone-info">
                  <h3>{location[locationIndex].phone}</h3>
                  <p>{location[locationIndex].number}</p>
                </div>
                <div className="details-content">
                  <h3>{location[locationIndex].addressInfo}</h3>
                  <p>{location[locationIndex].details}</p>
                </div>
              </div>

              <div className="acquisition">
                <div className="acquisition-con">
                  <h3>{location[locationIndex].acquisition}</h3>
                  <h4>{location[locationIndex].info}</h4>
                  <div className="you-num">
                    <FaPhone />
                    <p>{location[locationIndex].info1}</p>
                  </div>
                  <div className="you-num">
                    <FaMailBulk />
                    <p>{location[locationIndex].email}</p>
                  </div>
                </div>

                <div className="leasing-info">
                  <h3>{location[locationIndex].leasingInfo}</h3>
                  <h4>{location[locationIndex].leasingContact}</h4>
                  <div className="you-num">
                    <FaPhone />
                    <p>{location[locationIndex].info1}</p>
                  </div>
                  <div className="you-num">
                    <FaMailBulk />
                    <p>{location[locationIndex].email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
