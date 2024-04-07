import React from 'react';
import './ArtBooks.css';

function ArtBooks() {
  return (
    <div className="art-grid">
      <div className="row">
        <img src="./artbooks/art1.jpg" alt="art 1" />
        <img src="./artbooks/art2.jpg" alt="art 2" />
        <img src="./artbooks/art3.jpg" alt="art 3" />
      </div>
      <div className="row">
        <img src="./artbooks/art4.jpg" alt="art 4" />
        <img src="./artbooks/art5.jpg" alt="art 5" />
        <img src="./artbooks/art6.jpg" alt="art 6" />
      </div>
      <div className="row">
        <img src="./artbooks/art7.jpg" alt="art 7" />
        <img src="./artbooks/art8.jpg" alt="art 8" />
        <img src="./artbooks/art9.jpg" alt="art 9" />
      </div>
    </div>
  );
}

export default ArtBooks;
