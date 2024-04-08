import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge, selectClasses } from
  '@mui/material'
import React, {useState, useEffect} from 'react';
import { ChatList, AuthorUpdatesList, MembersList, BookClubsList } from '../Data';
import ChatElement from './ChatElement';
import Footer from './Footer';
import Header from './Header';
import Message from './Message';
import { click } from '@testing-library/user-event/dist/click';
import GroupChatElement from './GroupChatElement';

const DMs = ({messagingView}) => {
  
  const [clickedChat, setClickedChat] = 
    useState(messagingView === 'author updates' ? 
      (AuthorUpdatesList[0]?.name) : (MembersList[0]?.name)
    );

  useEffect(() => {
    if (clickedChat == null) {
      if (messagingView === 'author updates') {
        setClickedChat(AuthorUpdatesList[0]?.name);
      }
      else if (messagingView === 'book clubs') {
        setClickedChat("bookworms");
      }
      else {
        setClickedChat(MembersList[0]?.name);
      }
    }
    else {
      if ( messagingView === 'author updates') {
        setClickedChat(AuthorUpdatesList.find(author => author.name === clickedChat)?.name);
      }
      else if (messagingView === 'book clubs') {
        setClickedChat("bookworms");
      }
      else if (messagingView === 'direct messaging') {
        setClickedChat(MembersList.find(author => author.name === clickedChat)?.name);
      }
    }
  }, [clickedChat, messagingView]);

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';
  
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChatElementClick = (chat) => {
    setClickedChat(chat);
  };
  return (   
    <div style={{display: "flex"}}>
    <Box sx={{
      position: "relative", 
      width: 400, 
      borderRight: "1px solid #663A21", 
      borderLeft: "1px solid #663A21",
    }}>
      <Stack p={2} spacing={1} sx={{height:"100vh"}}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
            <Typography style={{fontFamily: 'DM Sans', color: '#663A21', paddingBottom:'20px'}} variant='h5'>
                {messagingView}
            </Typography>
        </Stack>
        <Stack className='scrollbar' spacing={2} direction='column' sx={{flexGrow:1, overflow:'scroll', height:'87%'}}>
            <Stack spacing={1}>
            {messagingView === 'author updates' ?
              (AuthorUpdatesList.map((el)=> {
                return <ChatElement key={el.id} {...el} onClick={() => handleChatElementClick(el?.name)} selected={el?.name === clickedChat}/>
              })) :
              messagingView === 'book clubs' ? 
                (<GroupChatElement onClick={() => handleChatElementClick("bookworms")} selected={"bookworms" === clickedChat}/>) :
              (MembersList.filter((el)=> !el.pinned).map((el)=>{
                return <ChatElement key={el.id} {...el} onClick={() => handleChatElementClick(el?.name)}selected={el.name === clickedChat}/>
              }))
            }
          </Stack> 
        </Stack>
      </Stack>
    </Box>
    <Box sx={{
        position: "relative",
        width: `calc(100vw - 400px)`,
      }}>
    
    <Stack height={'87%'} maxHeight={'100vh'} width={'auto'}>
        <Header messagingView={messagingView} clickedChat={clickedChat}/>
          <Box className='scrollbar' width={"100%"} sx={{overflowY:'scroll'}}>
            <Message menu={true} messagingView={messagingView} clickedChat={clickedChat}/>
        </Box>
        {messagingView !== 'author updates' &&
          (<Footer />)
        }
    </Stack>
    </Box>
    </div>
  )
}

export default DMs;
