// Sidebar.js
import React from 'react';
import './ReadingChallenge.css'; // Import CSS for styling if needed
import ReadingChallengeLogo from './ReadingChallengeLogo.png';
import ReadingChallengeBanner from './ReadingChallengeBanner.png';
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';
function ReadingChallengeSection() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Messages`; 
        navigate(path);
    }

    return (
        <div className="readingChallengeSection">
            <div className='joinChallenge'>
                <p class="p1">Join the challenge</p>
                <p class="p2">Whether you aim to read a stack of classics or explore the latest bestsellers - The Reading Challenge empowers you to set a personalized goal and join a community of fellow bookworms.</p>
                <div>
                    <Button className="signUpButton" onClick={routeChange}>
                        Sign Up
                    </Button>
                    <Button className="loginButton" onClick={routeChange}>
                        Login
                    </Button>
                </div>
            </div>
            <div className="challengeImage">
                <img src={ReadingChallengeBanner} alt='DMs' height={'auto'} width={'auto'} />
            </div>
        </div>
    );
}

export default ReadingChallengeSection;