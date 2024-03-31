// TrendingThisWeek.js
import React from 'react';
import './TrendingThisWeek.css'; // Make sure to create this CSS file

// Placeholder for book data, you can replace this with actual data fetching logic
const books = [
  {
    id: 1,
    title: "Tell it to the Bees",
    author: "Fiona Shaw",
    imageUrl: "path-to-book-cover-1.jpg",
  },
  // Add more book objects
];

const TrendingThisWeek = () => {
  return (
    <div className="trendingSection">
      <h2 className="trendingTitle">Trending This Week</h2>
      <div className="trendingBooksContainer">
        {books.map(book => (
          <div className="book" key={book.id}>
            <img src={book.imageUrl} alt={`Cover of ${book.title}`} className="bookCover" />
            <h3 className="bookTitle">{book.title}</h3>
            <p className="bookAuthor">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingThisWeek;