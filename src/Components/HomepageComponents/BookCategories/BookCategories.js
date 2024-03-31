// Sidebar.js
import React, { useState } from 'react';
import styled from "styled-components";
import art1 from './images/art/art1.jpg';
import art2 from './images/art/art2.jpg';
import art3 from './images/art/art3.jpg';
import art4 from './images/art/art4.jpg';
import art5 from './images/art/art5.jpg';
import art6 from './images/art/art6.jpg';
import biography1 from './images/biography/biography1.jpg';
import biography2 from './images/biography/biography2.jpg';
import biography3 from './images/biography/biography3.jpg';
import biography4 from './images/biography/biography4.jpg';
import biography5 from './images/biography/biography5.jpg';
import biography6 from './images/biography/biography6.jpg';
import comics1 from './images/comics/comics1.jpg';
import comics2 from './images/comics/comics2.jpg';
import comics3 from './images/comics/comics3.jpg';
import comics4 from './images/comics/comics4.jpg';
import comics5 from './images/comics/comics5.jpg';
import comics6 from './images/comics/comics6.jpg';
import fantasy1 from './images/fantasy/fantasy1.jpg';
import fantasy2 from './images/fantasy/fantasy2.jpg';
import fantasy3 from './images/fantasy/fantasy3.jpg';
import fantasy4 from './images/fantasy/fantasy4.jpg';
import fantasy5 from './images/fantasy/fantasy5.jpg';
import fantasy6 from './images/fantasy/fantasy6.jpg';
import fiction1 from './images/fiction/fiction1.jpg';
import fiction2 from './images/fiction/fiction2.jpg';
import fiction3 from './images/fiction/fiction3.jpg';
import fiction4 from './images/fiction/fiction4.jpg';
import fiction5 from './images/fiction/fiction5.jpg';
import fiction6 from './images/fiction/fiction6.jpg';
import romance1 from './images/romance/romance1.jpg';
import romance2 from './images/romance/romance2.jpg';
import romance3 from './images/romance/romance3.jpg';
import romance4 from './images/romance/romance4.jpg';
import romance5 from './images/romance/romance5.jpg';
import romance6 from './images/romance/romance6.jpg';
import horror1 from './images/horror/horror1.jpg';
import horror2 from './images/horror/horror2.jpg';
import horror3 from './images/horror/horror3.jpg';
import horror4 from './images/horror/horror4.jpg';
import horror5 from './images/horror/horror5.jpg';
import horror6 from './images/horror/horror6.jpg';
import './BookCategories.css'; // Import CSS for styling if needed
// import ReadingChallengeLogo from './ReadingChallengeLogo.png';
// import ReadingChallengeBanner from './ReadingChallengeBanner.png';

const Tab = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: #663A21;
  color: #FFF9F0;
  border: 0;
  outline: 0;
  ${({ active }) =>
        active &&
        `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-right: 200px;
`;
const BooksDisplay = styled.div`
  display: flex;
  margin-right: 210px;
  justify-content: space-between; /* Evenly distribute children */
  flex-wrap: wrap; /* Wrap children to next line */
`;
const BookImage = styled.div`
  width: calc(16.666% - 20px); /* 6 images distributed evenly */
  margin-bottom: 10px; /* Add some space between rows */
  background-color: white; /* Set background color to white */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
`;

const types = ["ART", "BIOGRAPHY", "COMICS", "FANTASY", "FICTION", "ROMANCE", "HORROR", "more..."];
const artBooks = [art1, art2, art3, art4, art5, art6];
const biographyBooks = [biography1, biography2, biography3, biography4, biography5, biography6];
const comicsBooks = [comics1, comics2, comics3, comics4, comics5, comics6];
const fantasyBooks = [fantasy1, fantasy2, fantasy3, fantasy4, fantasy5, fantasy6];
const fictionBooks = [fiction1, fiction2, fiction3, fiction4, fiction5, fiction6];
const romanceBooks = [romance1, romance2, romance3, romance4, romance5, romance6];
const horrorBooks = [horror1, horror2, horror3, horror4, horror5, horror6];

// const books = [artBooks];

function BookCategoriesTabs() {
    const [active, setActive] = useState(types[0]);

    // Function to render images based on the active tab
    const renderImages = () => {
        let books;
        switch (active) {
            case "ART":
                books = artBooks;
                break;
            case "BIOGRAPHY":
                books = biographyBooks;
                break;
            case "COMICS":
                books = comicsBooks;
                break;
            case "FANTASY":
                books = fantasyBooks;
                break;
            case "FICTION":
                books = fictionBooks;
                break;
            case "ROMANCE":
                books = romanceBooks;
                break;
            case "HORROR":
                books = horrorBooks;
                break;
            default:
                return null;
        }

        return books.map((book, index) => (
            <BookImage key={index}>
                <img src={book} alt={`Book ${index}`} />
            </BookImage>
        ));
    };

    return (
        <div className="bookCategoriesSection">
            <p class="p1">Book Categories</p>
            <ButtonGroup className="categories">
                {types.map((type) => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                        className="tabs"
                    >
                        {type}
                    </Tab>
                ))}
            </ButtonGroup>
            <p />
            <div className="booksDisplay">
                <BooksDisplay>
                    {renderImages()}
                </BooksDisplay>
                {/* Your payment selection: {active} */}
            </div>
        </div>
    );
}

export default BookCategoriesTabs;