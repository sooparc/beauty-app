import React from "react";
import "./Collection.css";
import Image1 from "../assets/foundation.jpg";
import Image2 from "../assets/sunscreen.jpg";
import Image3 from "../assets/mascara.jpg";

const Collection = () => {
  const images = [Image1, Image2, Image3];

  return (
    <section>
        <div className="collection-container">
            <div className="collection-image-container">
                {images.map((image, index) => (
                    <img src={image} alt={`Collection ${index}`} className="collection-image"/>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Collection;
