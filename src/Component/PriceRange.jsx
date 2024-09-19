import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRange = () => {
  const [ranges, setRanges] = useState([100000, 10000000]);

  console.log("values", ranges);

  return (
    <div className="line-container">
      <div className="line">
        <Slider
          range
          value={ranges}
          max={10000000}
          min={100000}
          onChange={setRanges}
          className="slider-side"
        />

        <h3 className="range-price">
          ₦{ranges[0]} - ₦{ranges[1]}
        </h3>
      </div>
    </div>
  );
};

export default PriceRange;
