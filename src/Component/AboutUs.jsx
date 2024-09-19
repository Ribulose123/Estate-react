import { FaCheckSquare } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

const AboutUs = () => {
  return (
    <section id="About">
      <div className="about">
        <div className="image">
          <img src="/public/assets/laptop.jpg" alt="" />
          <div className="black-circle"></div>
          <div className="black-circle down"></div>
          <div className="black-circle smaller"></div>
        </div>
        <div className="about-content">
          <h3>who we are</h3>
          <p className="gate-content">
            Gate Home has grown to become one of the leading real agencies in
            Nigeria. Our team comprises expreiemced angent, skilled negotiators
            and marketing expert who are passionated about real estate and
            dedicated to providing top-notch service. We are equipped in
            providing our clients
          </p>

          <div className="offers">
            <FaCheckSquare className="icons-icon" />
            <p>Property Consultation</p>
          </div>
          <div className="offers">
            <FaCheckSquare className="icons-icon" />
            <p>Design and Reconstruction</p>
          </div>
          <div className="offers">
            <FaCheckSquare className="icons-icon" />
            <p>Legal Support</p>
          </div>
          <p className="project">
            Our project <span> 100 +</span>
          </p>
        </div>
      </div>

      <div className="propterty-info" id="Properties">
        <h4>Property type</h4>
        <div className="explore">
          <p>
            Explore our various available Propreties scatttered across the
            country{" "}
          </p>
          <div className="sample">
            <img
              src="/public/assets/photo-1542308721550-1055693ff852.jpeg"
              alt=""
              width="50px"
              height="50px"
            />
            <p>residential</p>
          </div>
          <div className="sample">
            <img
              src="/public/assets/photo-1560026301-88340cf16be7.jpeg"
              alt=""
              width="50px"
              height="50px"
            />
          </div>
          <div className="sample">
            <img
              src="/public/assets/photo-1589129140837-67287c22521b.jpeg"
              alt=""
              width="50px"
              height="50px"
            />
          </div>
          <div className="sample">
            <img
              src="/public/assets/photo-1564013799919-ab600027ffc6.jpeg"
              alt=""
              width="50px"
              height="50px"
            />
          </div>
        </div>

        <ImageSlider />
      </div>
    </section>
  );
};

export default AboutUs;
