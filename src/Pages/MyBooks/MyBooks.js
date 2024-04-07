import React, { useState } from "react";
import './MyBooks.css';
import MyBooksSidebar from '../../Components/MyBooksSidebar/MyBooksSidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useResolvedPath, resolvedPath, useMatch } from 'react-router-dom';
import FetchData from './FetchData';
import book_data from './bookData';
import { Rating } from "@mui/material";
import { OverlayTrigger, Popover} from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import { Button, Card, Form } from "react-bootstrap";



function MyBooks() {
    
    const [popupVisible, setPopupVisible] = useState(false);
    
    function showPopup(){
        setPopupVisible(true)
    }
    function closePopup(){
        setPopupVisible(false)
    }

    const generatePopover = (book) => (
        <Popover id={`popover-${book.title.replace(/\s/g, '-').toLowerCase()}`}>
            <Popover.Body>
                <div className="popover-content">
                    <h3 className="popover-title">{book.title}</h3>
                    <p className="popover-author">{book.author}</p>
                    <Rating value={book.rating} precision={0.1} readOnly size="small" />
                    <p className="popover-summary">{book.description}</p>
                    <div className="popover-actions">
                    <button className="btn-more-info">
                        <Link to="/ReadingView" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            More Information
                        </Link>
                        </button>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
    
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
                            <Container fluid style = {{paddingTop: 0}}>
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
                                {book_data.reading_books.map((book) => (
                                    <OverlayTrigger
                                        key={book.title}
                                        trigger={['hover', 'focus']}
                                        placement="top"
                                        delay={{ show: 100, hide: 400 }} 
                                        overlay={generatePopover(book)}
                                    >
                                        <div className="card">
                                            <img src={book.image} alt="book cover" style={{width: 166, height: 243}}/>
                                            <Rating className="stars" value={book.rating} precision={0.05} size="small" readOnly />
                                        </div>
                                     </OverlayTrigger>   
                                     ))}
                                <button className="card"  onClick = {showPopup} style={{verticalAlign:"top", height: 235, marginBottom: 30}}>
                                    <AddIcon className="add"/>
                                    <h2 style={{marginTop: 20}}>Add Books</h2>
                                </button>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <Container fluid style = {{paddingTop: 10}}>
                                <Row >
                                    <Col xs = {10}>
                                        <h2>Want To Read</h2>
                                    </Col>
                                    <Col  className = 'deck-head'>
                                        <Link to='/WantToReadView' className='link-style'>View All</Link>
                                    </Col>
                                </Row>
                            </Container>
                            <div class="scrolling-wrapper">
                                {book_data.want_to_read.map((book) => (
                                    <OverlayTrigger
                                        key={book.title}
                                        trigger={['hover', 'focus']}
                                        placement="top"
                                        delay={{ show: 100, hide: 400 }} 
                                        overlay={generatePopover(book)}
                                    >
                                        <div className="card">
                                            <img src={book.image} alt="book cover" style={{width: 166, height: 243}}/>
                                            <Rating className="stars" value={book.rating} precision={0.05} size="small" readOnly />
                                        </div>
                                    </OverlayTrigger>
                                     ))}
                                <button className="card"  onClick = {showPopup} style={{verticalAlign:"top", height: 235, marginBottom: 30}}>
                                    <AddIcon className="add"/>
                                    <h2 style={{marginTop: 20}}>Add Books</h2>
                                </button>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <Container fluid style = {{paddingTop: 10}}>
                                <Row >
                                    <Col xs = {10}>
                                        <h2>Read</h2>
                                    </Col>
                                    <Col  className = 'deck-head'>
                                        <Link to='/ReadView' className='link-style'>View All</Link>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="scrolling-wrapper">
                                {book_data.read_books.map((book) => ( // Assuming `read_books` is the array name
                                    <OverlayTrigger
                                        key={book.title}
                                        trigger={['hover', 'focus']}
                                        placement="top"
                                        delay={{ show: 100, hide: 400 }}
                                        overlay={generatePopover(book)}
                                    >
                                        <div className="card">
                                            <img src={book.image} alt="book cover" />
                                            <Rating className="stars" value={book.rating} precision={0.05} size="small" readOnly />
                                        </div>
                                    </OverlayTrigger>
                                ))}
                                <button className="card"  onClick = {showPopup} style={{verticalAlign:"top", height: 235, marginBottom: 30}}>
                                    <AddIcon className="add"/>
                                    <h2 style={{marginTop: 20}}>Add Books</h2>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            
            {popupVisible && (
                <Card className="text-center" style = {{width: '40rem', height: "25rem", borderStyle: "solid", padding: 20, borderWidth: 2, borderColor: "#663A21", position:"fixed", top:"30%", left:"30%", alignItems:"center", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 10px 5px #AD9080"}}>
                <Card.Header className = "popupheader" style={{width: "100%", fontSize:10}}><h1>Add Book</h1></Card.Header>
                <Form>
                    <Form.Group >
                        <Form.Label>    </Form.Label>
                        <Form.Control style={{padding: 5, margin:10, width: "500px", borderStyle: "solid", borderWidth:"1px", borderColor: "#663A21"}} type="email" placeholder="Search by author, title or genre" />
                    </Form.Group>
                </Form>
                <br/>
                <Button className="addbook">Add to Bookshelf</Button>
                <br/>
                <br/>
                <br/>
                <Button className="closepopup" onClick = {closePopup} > Close Window</Button>
            </Card>
            )}
            </Container>

            </div>
    );
  }
  
  export default MyBooks;
