// FavouriteReadingLists.js
import React from 'react';
import './FavouriteReadingLists.css';

const readingLists = [
  {
    id: 1,
    title: "Recommendation for Crime and Mystery lovers",
    description: "Dive into the suspense...",
    imageUrl: "path-to-crime-mystery-image.jpg",
  },
  // Add more reading list objects
];

const FavouriteReadingLists = () => {
  return (
    <div className="favouriteReadingListsSection">
      <h2 className="favouriteReadingListsTitle">Our favourite reading lists</h2>
      <div className="readingListsContainer">
        {readingLists.map(list => (
          <div className="readingListCard" key={list.id}>
            <img src={list.imageUrl} alt={list.title} className="readingListImage" />
            <div className="readingListDetails">
              <h3 className="readingListTitle">{list.title}</h3>
              <p className="readingListDescription">{list.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="moreButton">More</button>
    </div>
  );
};

export default FavouriteReadingLists;