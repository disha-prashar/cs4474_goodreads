import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../../Pages/MyBooks/MyBooks.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MyBooksSidebar.css';

function MyBooksSidebar() {
    // State to manage if Bookshelves is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <Nav className="flex-column">
            <NavDropdown title = "Bookshelves" id = "dropdown-button" onToggle={() => setIsExpanded(!isExpanded)}>
                <NavDropdown.Item eventKey="1.1">Reading</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.2">Want to Read</NavDropdown.Item>
                <NavDropdown.Item eventKey="1.3">Read</NavDropdown.Item>
            </NavDropdown>
            <div className={isExpanded ? 'dropdown-expanded' : ''}>
            <NavDropdown title = "Reading Activity" className='menuitems'>Reading Activity</NavDropdown>
            <NavDropdown title = "Add Books" className='menuitems'>Add Books</NavDropdown>
            </div>
        </Nav>
    );
  }
  
  export default MyBooksSidebar;
