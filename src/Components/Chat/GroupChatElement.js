import { Avatar, Box, Stack, Typography } from '@mui/material';
import PhoneIcon from '../../Components/Chat/Images/phone.png';
import VideoIcon from '../../Components/Chat/Images/video.png';
import { Group } from '@mui/icons-material'; // Import the Group icon
import React from 'react';
import { BookClubsList } from '../Data';
import { Book } from 'phosphor-react';

// Group chat element
const GroupChatElement = ({selected, onClick}) => {
    
  const renderParticipantAvatars = () => {
    return BookClubsList["bookworms"].map((entry) => (
      <Avatar key={entry.id} src={entry.img} alt={entry.name} sx={{ width: 55, height: 55, border: '1px solid #663A21'}} />
    ));
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "1px solid #663A21",
        backgroundColor: selected ? '#663A2136' : 'transparent',
        borderRadius: selected ? '25px' : '0px',

      }}
      onClick={onClick}
      p={2}
      style={{ cursor: "pointer" }}
    >
      <Stack direction="row" alignItems='center' justifyContent='space-between'>
        <Stack direction='row' spacing={2} alignItems="center">
          <Stack direction="row" spacing={-3} alignItems="left">
            {renderParticipantAvatars()}
          </Stack>
          <Stack spacing={0.5}>
            <Typography style={{ fontFamily: 'DM Sans', color: '#663A21', fontWeight: 'bold' }} variant='subtitle2'>
              Bookworms 🐛
            </Typography>
            <Typography style={{ fontFamily: 'DM Sans', color: '#663A21' }} variant='caption'>
              Oh yes! I loved the ending!
            </Typography>
          </Stack>
        </Stack>
        <Stack padding={1} spacing={2} direction={"row"} alignItems='center'>
            <img src={PhoneIcon} style={{ width: '17px', height: '17px' }} alt="Phone" />
            <img src={VideoIcon} style={{ width: '18px', height: '18px' }} alt="Video" />
          </Stack>
    </Stack>
</Box>
  );
};

export default GroupChatElement;