import { useLocation } from "react-router-dom";
import PriceRange from "./PriceRange";

const Header = () => {
  /* const pathway = useLocation() */
  return (
    <header>
      <div className="nav-bar">
        <img src="/public/assets/logo.jpg" alt="logo" width={60} height={60} />

        <nav className="nav-link">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#Properties">Propreties</a>
            </li>
            <li>
              <a href="#FAQs">FAQs</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="" className="Sign">
          Sign up
        </a>
      </div>

      <div className="header-content">
        <div className="power">
          <p>Step into the space that have the</p>
          <p>power to tel stories</p>
        </div>
        <div className="content-info">
          <h2>gatewaye to elite real estate</h2>
        </div>
      </div>

      <div className="input-choice">
        <div className="buy-choices">
          <div className="buy-option">
            <select name="" id="" className="buy">
              <option value="types">Buy</option>
              <option value="types">Rent</option>
              <option value="types">Sell</option>
            </select>
          </div>
          <div className="location">
            <select name="location" id="location">
              <option value="tyoe">Abuja</option>
              <option value="tyoe">Lagos</option>
              <option value="tyoe">Benin</option>
            </select>
          </div>
          <div className="appartment">
            <select name="appartment" id="appartment">
              <option value="appartment1">Duplex</option>
              <option value="appartment1">Boungalow</option>
              <option value="appartment1">B1</option>
            </select>
          </div>
        </div>
        <PriceRange />
      </div>
    </header>
  );
};

export default Header;
