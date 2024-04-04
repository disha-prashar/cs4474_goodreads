import MyBooksSidebar from '../../Components/MyBooksSidebar/MyBooksSidebar'
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HG3 from './BookImages/hunger_games_3.jpg';
import './MyBooks.css';
import reading_books from './bookData'
import FetchData from './FetchData';


function ReadingView(){
   
    return (
        <div>
            <div style={{paddingTop:50, paddingLeft:50, paddingRight:50}}>
                <h1>My Books/Reading</h1>
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
                        
                        <FetchData data = {reading_books}/>
                        
                       
                    </Col>
                </Row>

            </Container>
        </div>
       
        

    )
}
export default ReadingView;