import React, { useState } from 'react';
import './ReadingChallenge.css'; // Import CSS for styling if needed
import ReadingChallengeLogo from './ReadingChallengeLogo.png';
import ReadingChallengeBanner from './ReadingChallengeBanner.png';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function ReadingChallengeSection() {
    const [activeTab, setActiveTab] = useState('signup');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="readingChallengeSection">
            <div className='joinChallenge'>
                <p className="p1">Join the challenge</p>
                <p className="p2">Whether you aim to read a stack of classics or explore the latest bestsellers - The Reading Challenge empowers you to set a personalized goal and join a community of fellow bookworms.</p>
                <div>
                    <Link to={{ pathname: "/SignUpLogin", state: { activeTab: 'signup' } }}>
                        <Button className="signUpButton" onClick={() => handleTabChange('signup')}>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to={{ pathname: "/SignUpLogin", state: { activeTab: 'login' } }}>
                        <Button className="loginButton" onClick={() => handleTabChange('login')}>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="challengeImage">
                <img src={ReadingChallengeBanner} alt='DMs' height={'auto'} width={'auto'} />
            </div>
        </div>
    );
}

export default ReadingChallengeSection;
