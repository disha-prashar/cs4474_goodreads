import { Box, Stack } from '@mui/material'
import React, {useState, useEffect} from 'react';
import { SampleChatDMs, SampleChatBookClubs, SampleChatAuthorUpdates } from '../Data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';

const Message = ({menu, messagingView, clickedChat}) => {
  const [selectedConvo, setSelectedConvo] = useState(null);
  useEffect(() => {
    if (clickedChat !== undefined) {
      setSelectedConvo(
        messagingView === "author updates"
          ? SampleChatAuthorUpdates[clickedChat] || null
          : SampleChatDMs[clickedChat] || null
      );
    }
    else {
      setSelectedConvo(
        messagingView === "author updates"
          ? SampleChatAuthorUpdates["Colleen Hoover"] || null
          : SampleChatDMs["Audrey Miller"] || null
      );
    }
    console.log("selected is", selectedConvo);

  }, [clickedChat, messagingView])

  return (
    <Box p={3}>
        <Stack spacing={3}>
            {selectedConvo && (selectedConvo.map((el)=>{
              switch (el.type) {
                  case 'divider':
                    return <TimeLine el={el}/>
                  case 'msg':
                    switch (el.subtype) {
                      case 'img':
                        return <MediaMsg el={el} menu={menu}/>
                      case 'doc':
                        return <DocMsg el={el} menu={menu}/>
                      case 'link':
                        return <LinkMsg el={el} menu={menu}/>
                      case 'reply':
                        return <ReplyMsg el={el} menu={menu}/>
                      default:
                        return <TextMsg el={el} menu={menu}/>
                    }
                  break;
                  default:
                    return <></>;
                }
              }))}
          
        </Stack>
    </Box>
  )
}

export default Message