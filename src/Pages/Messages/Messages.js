import React from 'react';
import './Messages.css';
import Sidebar from '../../Components/MessagingSidebar/MessagingSidebar';
import { Hidden } from '@mui/material';

function Messages() {
  return (
    <div className='mainPage'>
      <div style={{ display: 'flex'}}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Messages;