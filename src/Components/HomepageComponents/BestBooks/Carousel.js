import React, { useState } from 'react';
import './Carousel.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="arrow prev" onClick={handlePrev}>&lt;</button>
      <div className="items-container">
        {items.map((item, index) => {
          let position = (index - currentIndex + totalItems) % totalItems;
          if (position < 0) position += totalItems;
          return (
            <div key={index} className={`item ${position === 1 ? 'active' : ''}`}>
              <img src={item.src} alt={item.alt} />
              {/* <a href="" className="link">{item.alt}</a> */}
              <Link to={`/${item.alt}Books`} className="link">{item.alt}</Link>
            </div>
          );
        })}
      </div>
      <button className="arrow next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
