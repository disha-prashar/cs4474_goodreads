import MyBooksSidebar from '../../Components/MyBooksSidebar/MyBooksSidebar'
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HG3 from './BookImages/hunger_games_3.jpg';
import './MyBooks.css';
import book_data from './bookData'
import FetchData from './FetchData';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';


function ReadingView(){
    const [sorts, setSort] = useState(1)
    const [books, setBooks] = useState(book_data.reading_books)
    const sortedItems = books
    
    const handleSelect=(e)=>{
        setSort(e);
        setSort(e);
        console.log(sorts);
        switch(sorts){
            case "1":
            sortedItems.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1)
            break
            case "2":
            sortedItems.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
            case "3":
            sortedItems.sort((a,b) => a.author.toLowerCase() < b.author.toLowerCase() ? 1 : -1)
            break
            case "4":
            sortedItems.sort((a,b) => a.author.toLowerCase() > b.author.toLowerCase() ? 1 : -1)
            default:
            console.log("not an option")
            }
            
        setBooks(sortedItems)
        setBooks(sortedItems)
        
    }


    
    return (
        <div>
            <div style={{paddingTop:50, paddingLeft:50, paddingRight:50}}>
                <Container fluid>
                    <Row>
                        <Col>
                        <Link to='/MyBooks' style = {{textDecoration:"none"}}><h1>My Books/Reading</h1></Link>
                        </Col>
                        <Col xs ={1}>
                            <DropdownButton title = "Sort" onSelect={handleSelect}>
                                <Dropdown.Item eventKey="1">Title: A - Z</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Title: Z - A</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Author: A - Z</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Author: Z - A</Dropdown.Item>
                                <Dropdown.Item eventKey="5">Top Rated</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
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
                        <FetchData data = {books} s = {sorts}/>
                        
                    </Col>
                </Row>

            </Container>
        </div>
       
        

    )
}
export default ReadingView;