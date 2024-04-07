// TrendingThisWeek.js

import React from 'react';
import './TrendingThisWeek.css';
import Carousel from './Carousel'; // Import the Carousel component

import book1 from './images/book1.png';
import book2 from './images/book2.png';
import book3 from './images/book3.png';
import book4 from './images/book4.png';
import book5 from './images/book5.png';



// You'll want to replace these with the actual book data
const trendingBooks = [
  { src: book1, title: 'Tell It to the Bees', author: 'Fiona Shaw', rating: 4.1 },
  { src: book2, title: 'The Extraordinary Life of Sam Hell', author: 'Robert Dugoni', rating: 4.7 },
    { src: book3, title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', rating: 4.2 },
    { src: book4, title: 'Everyone on this Train is a Suspect', author: 'Benjamin Stevenson', rating: 4.6 },
    { src: book5, title: 'The Things We Cannot Say', author: 'Kelly Rimmer', rating: 3.3 },
];

const TrendingThisWeek = () => {
  return (
    <div className="trendingSection">
      <h2 className="trendingTitle">Trending This Week</h2>
        <div className="trendingBooksContainer">
            <Carousel items={trendingBooks}/>
        </div>
    </div>
  );
};

export default TrendingThisWeek;
