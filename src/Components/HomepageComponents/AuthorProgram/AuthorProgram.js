// Sidebar.js
import React from 'react';
import './AuthorProgram.css'; // Import CSS for styling if needed
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';

function AuthorProgramSection() {
    return (
        <div className="section">
            <div className="separator"></div>
            <div className="authorProgramSection">
                <p class="programTitle">Are you an author or a publisher?</p>
                <p class="p2">Gain access to a massive audience of book lovers.</p>
                <p class="p2">Goodreads is a great place to promote your books.</p>
                <div>
                    <Button className="authorProgramButton">
                        Author program
                    </Button>
                    <Button className="advertiseButton">
                        Advertise
                    </Button>
                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
}

export default AuthorProgramSection;