import React from 'react';
import './MyBooks.css';
import MyBooksSidebar from '../../Components/MyBooksSidebar/MyBooksSidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HG1 from './BookImages/hunger_games_1.jpg';
import HG2 from './BookImages/hunger_games_2.jpg';
import HG3 from './BookImages/hunger_games_3.jpg';
import HG4 from './BookImages/hunger_games_4.jpg';
import { Link, useResolvedPath, resolvedPath, useMatch } from 'react-router-dom';
import FetchData from './FetchData';
import book_data from './bookData';
import { Rating } from "@mui/material";
import { OverlayTrigger, Popover} from 'react-bootstrap';



const hungerGames2Popover = (
    <Popover id="popover-hunger-games" className="book-details-popover">
      <Popover.Body>
        <div className="popover-content">
          <h3 className="popover-title">Catching Fire</h3>
          <p className="popover-author">Suzanne Collins</p>
          <div className="popover-rating">
            <span className="stars">★ 3.95</span>
          </div>
          <p className="popover-summary">
            In the ruins of a place once known as North America lies the nation of Panem...
          </p>
          <div className="popover-actions">
            <button className="btn-more-info">More Information</button>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

let temp = "";

function MyBooks() {
    const data = book_data;
    
    return (
        <div> 
            <div style={{paddingTop:50, paddingLeft:50, paddingRight:50}}>
                <h1>My Books</h1>
                <hr></hr>
            </div>
            <Container fluid>
                <Row>
                    <Col xs = {3} style={{ paddingLeft: '50px' }}>
                        <div>
                            <MyBooksSidebar />
                        </div>
                    </Col>
                    <Col xs = {9}>
                        <div className='bookshelf'>
                            <Container fluid style = {{paddingTop: 10}}>
                                <Row >
                                    <Col xs = {10}>
                                        <h2>Reading</h2>
                                    </Col>
                                    <Col  className = 'deck-head'>
                                        <Link to='/ReadingView' className='link-style'>View All</Link>
                                    </Col>
                                </Row>
                            </Container>
                            <div class="scrolling-wrapper">
                                {data.reading_books.map((b) => {
                                    return (
                                        <div className="card">
                                            <img className = "card" src={b.image} alt ="book"/> 
                                            <Rating className ="stars" value={b.rating} precision={0.05} size = "small"readOnly/>
                                        </div>
                                        
                                    );
                                })}
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <Container fluid style = {{paddingTop: 10}}>
                                <Row >
                                    <Col xs = {10}>
                                        <h2>Want To Read</h2>
                                    </Col>
                                    <Col  className = 'deck-head'>
                                        <Link to='./ReadingView' className='link-style'>View All</Link>
                                    </Col>
                                </Row>
                            </Container>
                            <div class="scrolling-wrapper">
                                {data.want_to_read.map((b) => {
                                    return (
                                        <div className="card">
                                            <img className = "card" src={b.image} alt ="book"/> 
                                            <Rating className ="stars" value={b.rating} precision={0.05} size = "small"readOnly/>
                                        </div>
                                        
                                    );
                                })}
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <Container fluid style = {{paddingTop: 10}}>
                                <Row >
                                    <Col xs = {10}>
                                        <h2>Read</h2>
                                    </Col>
                                    <Col  className = 'deck-head'>
                                        <Link to='/ReadingView' className='link-style'>View All</Link>
                                    </Col>
                                </Row>
                            </Container>
                            <div class="scrolling-wrapper">
                                <OverlayTrigger trigger="hover" placement="top" overlay={hungerGames2Popover}> 
                                    <div class="card"><img src = {HG2} alt = "Hunger Games 1"/></div>
                                </OverlayTrigger>
                                <div class="card"><img src = {HG1} alt = "Hunger Games 2"/></div>

                                <div class="card"><h2>Card</h2></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            </div>
    );
  }
  
  export default MyBooks;
