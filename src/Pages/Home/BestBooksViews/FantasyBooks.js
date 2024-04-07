import React from 'react';
import './FantasyBooks.css';
import fantasy1 from './fantasybooks/fantasy1.jpg';
import fantasy2 from './fantasybooks/fantasy2.jpg';
import fantasy3 from './fantasybooks/fantasy3.jpg';
import fantasy4 from './fantasybooks/fantasy4.jpg';
import fantasy5 from './fantasybooks/fantasy5.jpg';
import fantasy6 from './fantasybooks/fantasy6.jpg';
import fantasy7 from './fantasybooks/fantasy7.jpg';
import fantasy8 from './fantasybooks/fantasy8.jpg';
import fantasy9 from './fantasybooks/fantasy9.jpg';


function FantasyBooks() {
  return (
    <div className="fantasy-books">
      <div className="title-container">
        <h1 className='heading'>Fantasy Books</h1>
        <p className='para'>The best fantasy books of 2023</p>
      </div>
      <div className="fantasy-grid">
        <div className="row">
          <img src={fantasy1} alt="fantasy 1" />
          <img src={fantasy2} alt="fantasy 2" />
          <img src={fantasy3} alt="fantasy 3" />
        </div>
        <div className="row">
          <img src={fantasy4} alt="fantasy 4" />
          <img src={fantasy5} alt="fantasy 5" />
          <img src={fantasy6} alt="fantasy 6" />
        </div>
        <div className="row">
          <img src={fantasy7} alt="fantasy 7" />
          <img src={fantasy8} alt="fantasy 8" />
          <img src={fantasy9} alt="fantasy 9" />
        </div>
      </div>
    </div>
  );
}

export default FantasyBooks;
