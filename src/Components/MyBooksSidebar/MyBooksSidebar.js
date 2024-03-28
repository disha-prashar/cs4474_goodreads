import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../Pages/MyBooks/MyBooks.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyBooksSidebar() {
    return (
        <Nav className="flex-column">
            <NavDropdown title = "Bookshelves">
                <NavDropdown.Item eventKey="1.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.3">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title = "Reading Activity" className='menuitems'>Reading Activity</NavDropdown>
            <NavDropdown title = "Add Books" className='menuitems'>Add Books</NavDropdown>
        </Nav>
    );
  }
  
  export default MyBooksSidebar;