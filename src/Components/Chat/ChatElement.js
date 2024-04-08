import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import Phone from '../../Components/Chat/Images/phone.png';
import Video from '../../Components/Chat/Images/video.png';

//single chat element
const ChatElement = ({id,name, img, msg, time,online, unread, onClick, selected}) => {
    return (
      <Box sx={{
        width: "100%",
        borderBottom: "1px solid #663A21", 
        backgroundColor: selected ? '#663A2136' : 'transparent',
        borderRadius: selected ? '25px' : '0px',
      }}
        p={2}
        onClick={onClick} // Attach onClick event handler
        style={{ cursor: "pointer" }}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Stack direction='row' spacing={2}>
              <Avatar style={{height:"60px", width: "60px"}}  src={img} />
            <Stack spacing={0.5}>
                <Typography style={{fontFamily: 'DM Sans', color: '#663A21', fontWeight:'bold'}} variant='subtitle2'>
                    {name}
                </Typography>
                <Typography style={{fontFamily: 'DM Sans', color: '#663A21'}} variant='caption'>
                    {msg}
                </Typography>
            </Stack>
        </Stack>
        {id !== 0 && id !== 1 && id !== 2 ?  
          (<Stack  padding={1} spacing={2} direction={"row"} alignItems='center'>
            <img src={Phone} style={{ width: '17px', height: '17px' }}></img>
            <img src={Video} style={{ width: '18px', height: '18px' }}></img>
          </Stack>) : 
          <></>}
        </Stack>
      </Box>
    )
  };

  export default ChatElement