import React from 'react';
import './HorrorBooks.css';
import horror1 from './horrorbooks/horror1.jpg';
import horror2 from './horrorbooks/horror2.jpg';
import horror3 from './horrorbooks/horror3.jpg';
import horror4 from './horrorbooks/horror4.jpg';
import horror5 from './horrorbooks/horror5.jpg';
import horror6 from './horrorbooks/horror6.jpg';
import horror7 from './horrorbooks/horror7.jpg';
import horror8 from './horrorbooks/horror8.jpg';
import horror9 from './horrorbooks/horror9.jpg';


function HorrorBooks() {
  return (
    <div className="horror-books">
      <div className="title-container">
        <h1 className='heading'>Horror Books</h1>
        <p className='para'>The best horror books of 2023</p>
      </div>
        <div className="horror-grid">
        <div className="row">
          <img src={horror1} alt="horror 1" />
          <img src={horror2} alt="horror 2" />
          <img src={horror3} alt="horror 3" />
        </div>
        <div className="row">
          <img src={horror4} alt="horror 4" />
          <img src={horror5} alt="horror 5" />
          <img src={horror6} alt="horror 6" />
        </div>
        <div className="row">
          <img src={horror7} alt="horror 7" />
          <img src={horror8} alt="horror 8" />
          <img src={horror9} alt="horror 9" />
        </div>
      </div>
    </div>
    );
}

export default HorrorBooks;
