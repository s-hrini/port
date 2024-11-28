// src/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://vdemo.softhopper.studio/wp-content/uploads/2019/12/portfolio-v-8-630x630.jpg',
  'https://vdemo.softhopper.studio/wp-content/uploads/2019/12/portfolio-v-7-630x630.jpg',
  'https://vdemo.softhopper.studio/wp-content/uploads/2019/12/portfolio-v-4-1-630x630.jpg',
  'https://vdemo.softhopper.studio/wp-content/uploads/2019/12/portfolio-v-2-630x630.jpg',
  'https://vdemo.softhopper.studio/wp-content/uploads/2019/12/portfolio-v-10-630x630.jpg'
  // Add more image paths as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img className='slimg' src={image} alt={`Slide ${index + 1}`} />
          <div className='Text-overlay'>Web Design</div>
        </div>
      ))}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            key={index}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
