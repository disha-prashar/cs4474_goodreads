import React from 'react';
import './Messages.css';
import Sidebar from '../../Components/MessagingSidebar/MessagingSidebar';
import ChatHeader from "../../Components/Chat/Header";
import ChatFooter from "../../Components/Chat/Footer";
// export {default as ChatHeader} from "../../Components/Chat/Header";
// export {default as ChatFooter} from "../../Components/Chat/Footer";

function Messages() {
  return (
    <div className='mainPage'>
        <Sidebar />
        <ChatHeader />
        <ChatFooter />
    </div>

  );
}

export default Messages;