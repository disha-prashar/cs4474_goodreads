import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import {useTheme , styled} from '@mui/material/styles';
import StyledBadge from './StyledBadge';
import Phone from '../../Components/Chat/phone.png'
import Video from '../../Components/Chat/video.png'

//single chat element
const ChatElement = ({id,name, img, msg, time,online, unread}) => {
    return (
      <Box sx={{
        width: "100%",
        borderBottom: "1px solid #663A21", 
      }}
        p={2}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Stack direction='row' spacing={2}>
              <Avatar src={img} />
            <Stack spacing={0.3}>
                <Typography style={{fontFamily: 'DM Sans', color: '#663A21'}} variant='subtitle2'>
                    {name}
                </Typography>
                <Typography style={{fontFamily: 'DM Sans', color: '#663A21'}} variant='caption'>
                    {msg}
                </Typography>
            </Stack>
        </Stack>
        <Stack spacing={2} direction={"row"} alignItems='center'>
                <img src={Phone} style={{ width: '17px', height: '17px' }}></img>
                <img src={Video} style={{ width: '18px', height: '18px' }}></img>
            </Stack>
        </Stack>
      </Box>
    )
  };

  export default ChatElement