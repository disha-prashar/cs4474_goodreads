import React, { useState } from 'react';
import './Carousel.css'; // Ensure this CSS is styled to match the layout in the image

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - filledStars - halfStar;

  return (
    <div className="star-rating">
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

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
          return (
              <div key={index} className={`item ${position === 0 ? 'active' : ''}`}>
                <img src={item.src} alt={item.title}/>
                <h3>{item.title}</h3>
                <p className="author">{item.author}</p>
                <StarRating rating={item.rating}/>
                <div className="star-rating" style={{'--rating': (item.rating / 5) * 100 + '%'}}></div>
              </div>
          );
        })}
      </div>
      <button className="arrow next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
