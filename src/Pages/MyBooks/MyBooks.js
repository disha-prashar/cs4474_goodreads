import React from 'react';
import './MyBooks.css';
import MyBooksSidebar from '../../Components/MyBooksSidebar/MyBooksSidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HG from './hunger_games.jpg';

function MyBooks() {
    return (
        <div> 
            <div style={{paddingTop:50, paddingLeft:50, paddingRight:50}}>
                <h1>My Books</h1>
                <hr></hr>
            </div>
            <Container fluid>
                <Row>
                    <Col xs = {3}>
                        <div>
                            <MyBooksSidebar />
                        </div>
                    </Col>
                    <Col xs = {9}>
                        <div className='bookshelf'>
                            <h2>Reading</h2>
                            <div class="scrolling-wrapper">
                                <div class="card"><img src = {HG} alt = "Hunger Games"/></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <h2>Want To Read</h2>
                            <div class="scrolling-wrapper">
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <h2>Read</h2>
                            <div class="scrolling-wrapper">
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
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