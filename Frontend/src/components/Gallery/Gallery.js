import "../Gallery/Gallery.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Gallery = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="thumbnails">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox">
          <button className="icon-button close-button" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
          <button className="icon-button prev-button" onClick={handlePrevious}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <img src={selectedImage} alt="Selected" className="large-image" />
          <button className="icon-button next-button" onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
          </button>
          <div className="thumbnail-row">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
