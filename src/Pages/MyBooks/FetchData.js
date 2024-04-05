import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './MyBooks.css';
import { Rating, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function FetchData({data, s}){
    
    

   
    

    return(
        <Container fluid>
        
            {data.map((b) => {
                return (
                    <div className="bookR" key={b.title}>
                        <img className = "cardi" src={b.image} alt ="book"/> 
                        <Rating className ="stars" value={b.rating} precision={0.05} size = "small"readOnly/>
                    </div>
                    
                );
            })}
        
            <button className="bookR"  style={{verticalAlign:"top", height: 260, borderStyle:"none"}}>
                <AddIcon className="add"/>
                <h3 style={{marginTop: 20}}>Add Books</h3>
            </button>
       
        
        
            
        </Container> 
    )
}

export default FetchData;