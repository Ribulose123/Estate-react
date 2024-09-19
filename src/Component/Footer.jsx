import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <ul>
            <li>
              <a href="#Properties">Propreties</a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#FAQs">FAQs</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>

      <div className="footer-last">
        <p>@2024Gatewayhomes All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
