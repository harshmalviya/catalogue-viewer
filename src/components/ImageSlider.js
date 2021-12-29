import React, { useRef, useState } from "react";
import SliderData from "./SliderData";
import "../styles/ImageSlider.css";
function ImageSlider() {
  const buttonRef = useRef();
  const [intervalId, setIntervalId] = useState(null);
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleSlideShow = (e) => {
    if (e.target.checked) {
      let intervalId = setInterval(() => {
        buttonRef.current.click();
      }, 3000);
      setIntervalId(intervalId);
    } else {
      clearInterval(intervalId);
    }
  };

  return (
    <React.Fragment>
      <div className="slider">
        {SliderData.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                index === current ? "slider__image active" : "slider__image"
              }`}
            >
              <img src={item.image} alt="" className="slider__image-img" />
            </div>
          );
        })}
        <button className="btn btn--prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="btn btn--next" onClick={nextSlide} ref={buttonRef}>
          &gt;
        </button>
      </div>
      <div className="dots">
        {SliderData.map((item, index) => {
          return (
            <span
              key={index}
              className={`dot ${index === current ? "dot--active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          );
        })}
      </div>
      <div className="slideshow__button">
        <label htmlFor="slideshow">Slideshow</label>
        <input type="checkbox" id="slideshow" onChange={handleSlideShow} />
      </div>
    </React.Fragment>
  );
}

export default ImageSlider;
