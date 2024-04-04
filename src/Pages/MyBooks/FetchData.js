import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './MyBooks.css';
import { Rating } from "@mui/material";

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
        </Container> 
    )
}

export default FetchData;