import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from
  '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import {useTheme } from '@mui/material/styles';
import React from 'react';
import { faker } from '@faker-js/faker';
import { ChatList } from '../Data';
import ChatElement from './ChatElement';

const DMs = () => {
  const theme = useTheme();
  return (    
    <Box sx={{
      position: "relative", width: 320, 
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
    }}>
      <Stack p={3} spacing={2} sx={{height:"100vh"}}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
            <Typography style={{fontFamily: 'DM Sans', color: '#663A21'}} variant='h5'>
                direct messaging
            </Typography>
            <IconButton>
                <CircleDashed />
            </IconButton>
        </Stack>

        <Stack sx={{ width: "100%" }}>
          {/* <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
          </Search> */}
        </Stack>

        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={1.5}>
            <ArchiveBox size={24} color='#663A21' />
                <Button style={{ color: '#663A21' }}>
                    Archive
                </Button >
            </Stack>
            <Divider />
        </Stack>

        <Stack className='scrollbar' spacing={2} direction='column' sx={{flexGrow:1, overflow:'scroll', height:'87%'}}>

            {/* <Stack spacing={2.4}>
              <Typography variant='subtitle2' sx={{color:"#676767"}}>
                Pinned
              </Typography>
              {ChatList.filter((el)=> el.pinned).map((el)=>{
                return <ChatElement  {...el}/>
              })}
              
            </Stack> */}
          
            <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{color:"#676767"}}>
                    All Chats
                </Typography>

            {/* {ChatList.filter((el)=> !el.pinned).map((el)=>{
              return <ChatElement {...el}/>
            })} */}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default DMs
