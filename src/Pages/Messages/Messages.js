import React from 'react';
import './Messages.css';
import Sidebar from '../../Components/MessagingSidebar/MessagingSidebar';
import DMs from '../../Components/Chat/DMs';
import Conversation from '../../Components/Chat/Conversation';

function Messages() {
  const [sidebarState, setSidebarState] = React.useState('dms');
  return (
    <div className='mainPage'>
      <div style={{ display: 'flex' }}>
        <Sidebar />
          {/* <div style={{height:'fit-content'}}>
            <DMs/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', flex: '1'}}>
            <Conversation messagingView={sidebarState}></Conversation>
          </div> */}
      </div>
    </div>
  );
}

export default Messages;