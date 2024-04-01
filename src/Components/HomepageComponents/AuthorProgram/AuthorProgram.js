// Sidebar.js
import React from 'react';
import './AuthorProgram.css'; // Import CSS for styling if needed
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';

function AuthorProgramSection() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Messages`; 
        navigate(path);
    }

    return (
        <div className="section">
            <div className="separator"></div>
            <div className="authorProgramSection">
                <p class="p1">Are you an author or a publisher?</p>
                <p class="p2">Gain access to a massive audience of book lovers.</p>
                <p class="p2">Goodreads is a great place to promote your books.</p>
                <div>
                    <Button className="authorProgramButton" onClick={routeChange}>
                        Author program
                    </Button>
                    <Button className="advertiseButton" onClick={routeChange}>
                        Advertise
                    </Button>
                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
}

export default AuthorProgramSection;