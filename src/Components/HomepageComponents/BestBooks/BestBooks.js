// Sidebar.js
import React from 'react';
import './BestBooks.css'; // Import CSS for styling if needed
import Carousel from './Carousel';
import art from './images/art.jpg';
import fantasy from './images/fantasy.jpg';
import horror from './images/horror.jpg';
import choice_awards_logo from './images/choice_awards_logo.png';

function BestBooksSection() {

    const items = [
        { src: art, alt: 'Art' },
        { src: fantasy, alt: 'Fantasy' },
        { src: horror, alt: 'Horror' },
    ];

    return (
        <div className="bestBooksSection">
            <div className="announcement-container">
                <div className='section1'>
                    <div className='image-container'>
                        <img src={choice_awards_logo} alt={'Choice Awards 2023'} className="choice-logo" />
                    </div>
                    <p className='para1'>Announcing the Best Books of 2023</p>                    
                </div>
                <p className='para2'>Announcing the winners of the 15th Annual Goodreads Choice Awards, the only major book awards decided by readers.</p>
            </div>
            <div className='carousel-container'>
                <Carousel items={items} />
            </div>
        </div>
    );
}

export default BestBooksSection;