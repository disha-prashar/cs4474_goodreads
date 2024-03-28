import React from 'react';
import './Home.css';
import ReadingChallengeSection from '../../Components/HomepageComponents/ReadingChallenge/ReadingChallenge';

function Home() {
  return (
    <div className='mainPage'>
        <ReadingChallengeSection />
    </div>
  );
}

export default Home;