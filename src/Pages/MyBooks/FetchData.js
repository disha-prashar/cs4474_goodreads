import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './MyBooks.css';
import { Box, Rating} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Button, Card, Form } from "react-bootstrap";
import { OverlayTrigger, Popover} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FetchData({data, s}){
    const [popupVisible, setPopupVisible] = useState(false);
    
    function showPopup(){
        setPopupVisible(true)
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

    function closePopup(){
        setPopupVisible(false)
    }
   

    return(
        <Container fluid>
        
           
            {data.map((book) => (
                    <OverlayTrigger
                        key={book.title}
                        trigger="hover"
                        placement="left"
                        overlay={generatePopover(book)}>
                        <div className="bookR" style={{width: 166, margin:40}}>
                            <img className="cardi" src={book.image} alt="book cover" style={{width: 166, height: 243}} />
                            <Rating className="stars" value={book.rating} precision={0.05} size="small" style={{marginLeft: 35}} readOnly />
                        </div>
                    </OverlayTrigger>
                ))}
        
            <Button onClick = {showPopup} className="bookR-b"  style={{verticalAlign:"top", height: 240, borderStyle:"none", margin: 40, marginTop: 48, backgroundColor: "#FFF9F0", color: "#663A21"}}>
                <startIcon><AddIcon className="add"/></startIcon><br/>
                <h3 style={{marginTop: 20}}>Add Books</h3>
            </Button>
       
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
    )
}

export default FetchData;
