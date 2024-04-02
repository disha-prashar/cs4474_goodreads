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

const reading_books = [
    ["The Hunger Games: Mockingjay", "Suzanne Collins", 3.95, "HG3","It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute." ]
]
const want_books = [
    ["The Ballad of Songbirds and Snakes","Suzanne Collins", 3.95, "HG4","It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute."],
]

const read_books = [
    ["The Hunger Games: Catching Fire" ,"Suzanne Collins", 3.95, "HG2","It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute."],
    ["The Hunger Games" ,"Suzanne Collins", 3.95, "HG1","It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute."]
]

let temp = "";

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
                            <Container fluid style = {{paddingTop: 10}}>
                                <Row >
                                    <Col xs = {10}>
                                        <h2>Reading</h2>
                                    </Col>
                                    <Col  className = 'deck-head'>
                                        <Link to='./ReadingView' className='link-style'>View All</Link>
                                    </Col>
                                </Row>
                            </Container>
                            <div class="scrolling-wrapper">
                                <div class="card"><img src = {HG3} alt = "Hunger Games 3"/></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <h2>Want To Read</h2>
                            <div class="scrolling-wrapper">
                                <div class="card"><img src = {HG4} alt = "Hunger Games BOSAS"/></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                                <div class="card"><h2>Card</h2></div>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <h2>Read</h2>
                            <div class="scrolling-wrapper">
                                <div class="card"><img src = {HG2} alt = "Hunger Games 1"/></div>
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