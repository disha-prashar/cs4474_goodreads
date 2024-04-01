import React from 'react';
import './Home.css';
import ReadingChallengeSection from '../../Components/HomepageComponents/ReadingChallenge/ReadingChallenge';
import TrendingThisWeek from '../../Components/HomepageComponents/TrendingThisWeek/TrendingThisWeek';
import BookCategoriesTabs from '../../Components/HomepageComponents/BookCategories/BookCategories';
import FavouriteReadingLists from '../../Components/HomepageComponents/FavouriteReadingLists/FavouriteReadingLists';
import AuthorProgramSection from '../../Components/HomepageComponents/AuthorProgram/AuthorProgram';

function Home() {
  return (
    <div className='mainPage'>
        <ReadingChallengeSection />
        <TrendingThisWeek />
        <BookCategoriesTabs />
        <FavouriteReadingLists />
        <AuthorProgramSection />
    </div>
  );
}

export default Home;