import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from
  '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import {useTheme } from '@mui/material/styles';
import React from 'react';
import { faker } from '@faker-js/faker';
import { ChatList } from '../Data';
import ChatElement from './ChatElement';

const DMs = ({messagingView}) => {
  return (    
    <Box sx={{
      position: "relative", 
      width: 320, 
      borderRight: "1px solid #663A21", 
      borderLeft: "1px solid #663A21",
    }}>
      <Stack p={2.5} spacing={1} sx={{height:"100vh"}}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
            <Typography style={{fontFamily: 'DM Sans', color: '#663A21'}} variant='h5'>
                {messagingView}
            </Typography>
        </Stack>

        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={1.5}>
            </Stack>
        </Stack>

        <Stack className='scrollbar' spacing={2} direction='column' sx={{flexGrow:1, overflow:'scroll', height:'87%'}}>
            <Stack spacing={1}>
            {ChatList.filter((el)=> !el.pinned).map((el)=>{
              return <ChatElement {...el}/>
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default DMs;
