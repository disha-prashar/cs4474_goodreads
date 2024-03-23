import React from 'react';
import './MyBooks.css';
import MyBooksSidebar from '../../Components/MyBooksSidebar/MyBooksSidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyBooks() {
    return (
    <div  style={{padding:50}}>
        <div>
            <h1>My Books</h1>
            <hr></hr>
        </div>
        <MyBooksSidebar />

    </div>
      
    );
  }
  
  export default MyBooks;