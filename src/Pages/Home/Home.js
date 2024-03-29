import React from 'react';
import './Home.css';
import ReadingChallengeSection from '../../Components/HomepageComponents/ReadingChallenge/ReadingChallenge';
import TrendingThisWeek from '../../Components/HomepageComponents/TrendingThisWeek/TrendingThisWeek';
import FavouriteReadingLists from '../../Components/HomepageComponents/FavouriteReadingLists/FavouriteReadingLists';

function Home() {
  return (
    <div className='mainPage'>
        <ReadingChallengeSection />
        <TrendingThisWeek />
        <FavouriteReadingLists />
    </div>
  );
}

export default Home;