import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge, selectClasses } from
  '@mui/material'
import React, {useState, useEffect} from 'react';
import { ChatList, AuthorUpdatesList, MembersList } from '../Data';
import ChatElement from './ChatElement';
import Footer from './Footer';
import Header from './Header';
import Message from './Message';

const DMs = ({messagingView}) => {
  
  const [clickedChat, setClickedChat] = useState(null);

  useEffect(() => {
    if (clickedChat === null) {
      if (messagingView === 'author updates') {
        setClickedChat(AuthorUpdatesList[0]?.name);
      }
      else {
        setClickedChat(MembersList[0]?.name);
      }
    }
    else if (messagingView === 'author updates') {
      setClickedChat(AuthorUpdatesList?.find(author => author.name === clickedChat)?.name);
      {console.log("clicked is", clickedChat)}
    }
    else if (messagingView === 'DMs') {
      setClickedChat(MembersList?.find(member => member.name === clickedChat)?.name);
      {console.log("clicked is", clickedChat)}
    }
    
  }, [clickedChat, messagingView]);

  const handleChatElementClick = (chat) => {
    setClickedChat(chat);
    {console.log("set is ", chat)}
  };
  return (   
    <> 
    <Box sx={{
      position: "relative", 
      width: 320, 
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
            {
              messagingView === 'author updates' ?
              (AuthorUpdatesList.map((el)=> {
                return <ChatElement key={el.id} {...el} onClick={() => handleChatElementClick(el?.name)}/>
              })) :
              (MembersList.filter((el)=> !el.pinned).map((el)=>{
                return <ChatElement key={el.id} {...el} onClick={() => handleChatElementClick(el?.name)}/>
              }))
            }
          </Stack>
        </Stack>
      </Stack>
    </Box>
    <div style={{display: 'flex', flexDirection: 'column', flex: '1'}}>
    <Stack height={'87%'} maxHeight={'100vh'} width={'auto'}>
        <Header messagingView={messagingView} clickedChat={clickedChat}/>
        <Box className='scrollbar' width={"100%"} sx={{overflowY:'scroll'}}>
            <Message menu={true} messagingView={messagingView} clickedChat={clickedChat}/>
        </Box>
        {/* {messagingView !== 'author updates' &&
          (<Footer />)
        } */}
    </Stack>
  </div>
  </>
  )
}

export default DMs;
