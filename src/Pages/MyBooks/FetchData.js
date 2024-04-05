import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './MyBooks.css';
import { Rating, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { OverlayTrigger, Popover} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FetchData({data, s}){
    
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

   

    return(
        <Container fluid>
        
            {data.map((book) => (
                    <OverlayTrigger
                        key={book.title}
                        trigger="hover"
                        placement="left"
                        overlay={generatePopover(book)}>
                        <div className="bookR">
                            <img className="cardi" src={book.image} alt="book cover" />
                            <Rating className="stars" value={book.rating} precision={0.05} size="small" readOnly />
                        </div>
                    </OverlayTrigger>
                ))}
        
            <button className="bookR"  style={{verticalAlign:"top", height: 260, borderStyle:"none"}}>
                <AddIcon className="add"/>
                <h3 style={{marginTop: 20}}>Add Books</h3>
            </button>
       
        
        
            
        </Container> 
    )
}

export default FetchData;
