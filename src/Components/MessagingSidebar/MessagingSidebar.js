// Sidebar.js
import React, { useEffect, useState } from 'react';
import './MessagingSidebar.css'; // Import CSS for styling if needed
import dms from './dms.png';
import updates from './book.png';
import groupChat from './conversation.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Sidebar() {
  const [selectedIcon, setSelectedIcon] = React.useState('dms');

  // Function to handle icon selection
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="sidebar">
        <div className='icon'>
      <ul>
        <li href='#'><AccountCircleOutlinedIcon style={{color: "#663A21", height: "48px", width: "48px"}}/></li>
        <li className='iconButton' style={selectedIcon === 'dms' ? {backgroundColor: '#663A2136'} : {}} onClick={() => handleIconClick('dms')}><img src={dms} alt='DMs'/></li>
        <li className='iconButton' style={selectedIcon === 'bookClubs' ? {backgroundColor: '#663A2136'} : {}} onClick={() => handleIconClick('bookClubs')}><img src={groupChat} alt='Book Clubs'/> </li>
        <li className='iconButton' style={selectedIcon === 'authorUpdates' ? {backgroundColor: '#663A2136'} : {}} onClick={() => handleIconClick('authorUpdates')}><img src={updates} alt='Author Updates'/> </li>
      </ul>
      </div>
    </div>
  );
}

export default Sidebar;