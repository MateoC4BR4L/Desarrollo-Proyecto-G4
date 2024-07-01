import React, { useState, useEffect } from 'react';
import './index.css';
import BGDark from '../../assets/BgDark.jpg';
import BGDark2 from '../../assets/BgDark2.jpg';
import BGDark3 from '../../assets/BgDark3.jpg';
import BGDark4 from '../../assets/BgDark4.jpg';
import BGDark5 from '../../assets/BgDark5.jpg';
import BGDark6 from '../../assets/BgDark6.jpg';
import BGLight from '../../assets/BgLight.jpg';
import BGLight2 from '../../assets/BgLight2.jpg';
import BGLight3 from '../../assets/BgLight3.jpg';
import BGLight4 from '../../assets/BgLight4.jpg';
import BGLight5 from '../../assets/BgLight5.jpg';
import BGLight6 from '../../assets/BgLight6.jpg';

let images = [
  BGDark,
  BGDark2,
  BGDark3,
  BGDark4,
  BGDark5,
  BGDark6
];

function BackgroundCarousel ({ children, darkMode }) {
  if (!darkMode) {
    images = [
      BGLight,
      BGLight2,
      BGLight3,
      BGLight4,
      BGLight5,
      BGLight6
    ]
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="background-carousel"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="carousel-content">
        {children}
      </div>
      <button className="carousel-button left" onClick={goToPreviousImage}>‹</button>
      <button className="carousel-button right" onClick={goToNextImage}>›</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundCarousel;
