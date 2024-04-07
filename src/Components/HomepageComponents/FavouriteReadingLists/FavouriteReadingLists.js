import React from 'react';
import './FavouriteReadingLists.css';
import readingList1 from "../FavouriteReadingLists/readingList1.png";
import readingList2 from "../FavouriteReadingLists/readingList2.png";
import readingList3 from "../FavouriteReadingLists/readingList3.png";

function FavouriteReadingLists() {
  return (
    <div className="favouriteReadingListsSection">
      <h2 className="favouriteReadingListsTitle">Our Favorite Reading Lists</h2>
      <div className="readingListsContainer">
        <div className="readingListCard">
          <img src={readingList1} alt="Recommendation for Crime and Mystery lovers" className="readingListImage"/>
        </div>
        <div className="readingListCard">
          <img src={readingList2} alt="Best books for your book club" className="readingListImage"/>
        </div>
        <div className="readingListCard">
          <img src={readingList3} alt="Best books of the 20th century" className="readingListImage"/>
        </div>
        <div className="readingListDetails">
          <p>On Goodreads you’ll find countless reading lists that inspire and motivate you. Discover your next favorite book with our extensive collection of reading lists.</p>
          <button className="moreButton">More</button>
        </div>
      </div>
    </div>
  );
}


export default FavouriteReadingLists;
