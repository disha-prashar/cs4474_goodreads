// TrendingThisWeek.js

import React from 'react';
import './TrendingThisWeek.css';
import trendingThisWeekBanner from './trendingThisWeekBanner.png';

const TrendingThisWeek = () => {
  return (
    <div className="trendingSection">
      <h2 className="trendingTitle">Trending This Week</h2>
      <div className="trendingBooksContainer">
        <img src={trendingThisWeekBanner} alt='Trending books' />
      </div>
    </div>
  );
};

export default TrendingThisWeek;
