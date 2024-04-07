import { Box, Stack} from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Message from './Message';

const Conversation = ({messagingView}, {clickedChat}) => {
  return (
    <>
    <Stack height={'87%'} maxHeight={'100vh'} width={'auto'}>
        <Header messagingView={messagingView} clickedChat={clickedChat}/>
        <Box className='scrollbar' width={"100%"} sx={{overflowY:'scroll'}}>
            <Message menu={true} messagingView={messagingView}/>
        </Box>
        {messagingView === 'author updates' ?
          (<></>) : (<Footer/>)
        }
    </Stack>
  </>
  )
}

export default Conversation
