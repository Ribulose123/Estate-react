import { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { properties } from "../Constants/Data.json";

const ImageSlider = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0); // State to track previous scroll position
  const [firstImgWidth, setFirstImgWidth] = useState(0); // State for the width of the first image
  const [currentUnit, setCurrentUnit] = useState(1); // Current unit being shown

  // Set first image width dynamically once the component is mounted
  useEffect(() => {
    if (carouselRef.current) {
      const firstImg = carouselRef.current.querySelectorAll(".corusel")[0];
      if (firstImg) setFirstImgWidth(firstImg.clientWidth + 5); // Include margin
    }
  }, [carouselRef]);

  // Update the current unit displayed in the "show unit" section
  const updateShowUnit = () => {
    if (carouselRef.current) {
      const totalUnits =
        carouselRef.current.querySelectorAll(".corusel").length;
      const current =
        Math.round(carouselRef.current.scrollLeft / firstImgWidth) + 1;
      setCurrentUnit(current > totalUnits ? totalUnits : current);
    }
  };

  // Function to handle arrow button clicks (Next & Previous)
  const handleArrowClick = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft +=
        direction === "prev" ? -firstImgWidth : firstImgWidth;
      updateShowUnit();
    }
  };

  // Mouse event handlers
  const dragStart = (e) => {
    setIsDragging(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    updateShowUnit();
  };

  const dragStop = () => {
    setIsDragging(false);
  };

  return (
    <div className="image-wrapper">
      <div className="show-unit">
        <p>{`${currentUnit}/${properties.length} Units`}</p>
      </div>

      <div
        className="image-slider"
        ref={carouselRef}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
        onTouchStart={dragStart}
        onTouchMove={dragging}
        onTouchEnd={dragStop}
        onScroll={updateShowUnit}
      >
        {properties.map((item, index) => (
          <div key={index} className="corusel">
            <img src={item.image} alt="properties" />
            <h4>{item.apartment}</h4>
            <h3>{item.address}</h3>
            <p>{item.pin}</p>
            <div className="see-more">
              <p>{item.more}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-nt">
        <FaArrowAltCircleLeft
          className="left btn-icon"
          onClick={() => handleArrowClick("prev")}
        />
        <FaArrowAltCircleRight
          className="right btn-icon"
          onClick={() => handleArrowClick("next")}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
