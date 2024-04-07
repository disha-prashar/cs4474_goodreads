import React from 'react';
import './ArtBooks.css';
import art1 from './artbooks/art1.jpg';
import art2 from './artbooks/art2.jpg';
import art3 from './artbooks/art3.jpg';
import art4 from './artbooks/art4.jpg';
import art5 from './artbooks/art5.jpg';
import art6 from './artbooks/art6.jpg';
import art7 from './artbooks/art7.jpg';
import art8 from './artbooks/art8.jpg';
import art9 from './artbooks/art9.jpg';


function ArtBooks() {
  return (
    <div className="art-books">
      <div className="title-container">
        <h1 className='heading'>Art Books</h1>
        <p className='para'>The best art books of 2023</p>
      </div>
      <div className="art-grid">
        <div className="row">
          <img src={art1} alt="art 1" />
          <img src={art2} alt="art 2" />
          <img src={art3} alt="art 3" />
        </div>
        <div className="row">
          <img src={art4} alt="art 4" />
          <img src={art5} alt="art 5" />
          <img src={art6} alt="art 6" />
        </div>
        <div className="row">
          <img src={art7} alt="art 7" />
          <img src={art8} alt="art 8" />
          <img src={art9} alt="art 9" />
        </div>
      </div>
    </div>
  );
}

export default ArtBooks;
