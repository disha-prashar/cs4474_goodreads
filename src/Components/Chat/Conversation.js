import {  Box, Stack} from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";
import Footer from './Footer';
import Header from './Header';
import Message from './Message';

const Conversation = () => {
    const theme = useTheme();
  return (
    <Stack height={'87%'} maxHeight={'100vh'} width={'auto'}>
        <Header/>
        <Box className='scrollbar' width={"100%"} sx={{overflowY:'scroll'}}>
            <Message menu={true}/>
        </Box>
       <Footer/>
    </Stack>
  )
}

export default Conversation
