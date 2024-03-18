// Sidebar.js
import React from 'react';
import './MessagingSidebar.css'; // Import CSS for styling if needed
import dms from './dms.png';
import updates from './book.png';
import groupChat from './conversation.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className='icon'>
      <ul>
        <li href='#'><AccountCircleOutlinedIcon style={{color: "#663A21", height: "48px", width: "48px"}}/></li>
        <li><img src={dms} alt='DMs' height={'auto'} width={40}/> </li>
        <li><img src={updates} alt='Author Updates' height={'auto'} width={40}/> </li>
        <li><img src={groupChat} alt='Group Chats' height={'auto'} width={40}/> </li>
      </ul>
      </div>
    </div>
  );
}

export default Sidebar;