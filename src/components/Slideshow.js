import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import Image1 from "../assets/main_banner_1.jpg";
import Image2 from "../assets/main_banner_2.jpg";
import Image3 from "../assets/main_banner_3.jpg";

const images = [Image1, Image2, Image3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide-wrapper" key={index}>
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;