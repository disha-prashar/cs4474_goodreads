// Sidebar.js
import React, { useEffect, useState } from 'react';
import './MessagingSidebar.css'; 
import dms from './dms.png';
import updates from './book.png';
import groupChat from './conversation.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DMs from '../../Components/Chat/DMs';
import Conversation from '../../Components/Chat/Conversation';

function Sidebar() {
  const [selectedIcon, setSelectedIcon] = useState('direct messaging');

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <>
      <div className="sidebar">
          <div className='icon'>
            <ul>
              <li href='#'><AccountCircleOutlinedIcon style={{color: "#663A21", height: "48px", width: "48px"}}/></li>
              <li className='iconButton' style={selectedIcon === 'direct messaging' ? {backgroundColor: '#663A2136'} : {}} onClick={() => handleIconClick('direct messaging')}><img src={dms} alt='DMs'/></li>
              <li className='iconButton' style={selectedIcon === 'book clubs' ? {backgroundColor: '#663A2136'} : {}} onClick={() => handleIconClick('book clubs')}><img src={groupChat} alt='Book Clubs'/> </li>
              <li className='iconButton' style={selectedIcon === 'author updates' ? {backgroundColor: '#663A2136'} : {}} onClick={() => handleIconClick('author updates')}><img src={updates} alt='Author Updates'/> </li>
            </ul>
          </div>
        </div>
        <DMs messagingView={selectedIcon}/>
        {/* <div style={{display: 'flex', flexDirection: 'column', flex: '1'}}>
          <Conversation messagingView={selectedIcon}/>
        </div> */}
    </>
  );
}

export default Sidebar;