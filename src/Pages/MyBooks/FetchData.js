import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './MyBooks.css';
import { Box, Rating} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Button, Card, Form } from "react-bootstrap";

function FetchData({data, s}){
    const [popupVisible, setPopupVisible] = useState(false);
    
    function showPopup(){
        setPopupVisible(true)
    }

    function closePopup(){
        setPopupVisible(false)
    }
   
    

    return(
        <Container fluid>
        
            {data.map((b) => {
                return (
                    <div className="bookR" key={b.title}>
                        <img className = "cardi" src={b.image} alt ="book"/> 
                        <Rating className ="stars" value={b.rating} precision={0.5} size = "small" style={{marginLeft:35}}readOnly/>
                    </div>
                    
                );
            })}
        
            <Button onClick = {showPopup} className="bookR"  style={{verticalAlign:"top", height: 260, borderStyle:"none", marginTop: 40, backgroundColor: "#FFF9F0", color: "#663A21"}}>
                <startIcon><AddIcon className="add"/></startIcon><br/>
                <h3 style={{marginTop: 20}}>Add Books</h3>
            </Button>
       
            {popupVisible && (
                <Card className="text-center" style = {{width: '40rem', height: "20rem", borderStyle: "solid", padding: 20, borderWidth: 5, borderColor: "#663A21", position:"fixed", top:"50%", left:"40%", alignItems:"center", backgroundColor: "#FFF9F0"}}>
                    <Card.Header className = "popupheader" style={{width: "100%", fontSize:10}}><h3>Add Book</h3></Card.Header>
                    <Form>
                        <Form.Group >
                            <Form.Label>    </Form.Label>
                            <Form.Control style={{padding: 5, margin:10, width: "500px"}} type="email" placeholder="Search by author, title or genre" />
                        </Form.Group>
                    </Form>
                    <br/>
                    <Button className="closepopup" onClick = {closePopup} > Close Window</Button>
                </Card>
            )}
            
            
        </Container> 
    )
}

export default FetchData;