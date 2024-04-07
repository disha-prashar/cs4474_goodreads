import React from 'react';
import './FantasyBooks.css';

function FantasyBooks() {
  // Array to hold image filenames
  const images = Array.from({ length: 9 }, (_, index) => `./fantasybooks/fantasy${index + 1}.jpg`);

  return (
    <div className="image-grid">
      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className="row">
          {[0, 1, 2].map((colIndex) => (
            <img
              key={rowIndex * 3 + colIndex}
              src={images[rowIndex * 3 + colIndex]}
              alt={`Image ${rowIndex * 3 + colIndex + 1}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default FantasyBooks;
