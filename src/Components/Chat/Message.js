import { Avatar, Box, Stack, Typography } from '@mui/material'
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
          : messagingView === "book clubs" 
              ? SampleChatBookClubs
              : SampleChatDMs[clickedChat] || null
      );
    }
    else {
      setSelectedConvo(
        messagingView === "author updates"
          ? SampleChatAuthorUpdates["Colleen Hoover"] || null
          : messagingView === "book clubs" 
            ? SampleChatBookClubs
            : SampleChatDMs["Audrey Miller"] || null
      );
    }

  }, [clickedChat, messagingView])

  return (
    <Box p={3}>
        <Stack spacing={3}>
            {selectedConvo && (selectedConvo.map((el)=>{
              if (el.type === 'divider') {
                return <TimeLine el={el} />;
            } else if (el.type === 'msg') {
                let messageComponent;
                switch (el.subtype) {
                    case 'img':
                        messageComponent = <MediaMsg el={el} menu={menu} />;
                        break;
                    case 'doc':
                        messageComponent = <DocMsg el={el} menu={menu} />;
                        break;
                    case 'link':
                        messageComponent = <LinkMsg el={el} menu={menu} />;
                        break;
                    case 'reply':
                        messageComponent = <ReplyMsg el={el} menu={menu} />;
                        break;
                    default:
                        messageComponent = <TextMsg el={el} menu={menu} />;
                }
                if (el.profile) {
                    return (
                        <Stack key={el.id} spacing={1} direction="row">
                          <Avatar style={{height:"50px", width: "50px"}}  src={el.profile} />
                            {messageComponent}
                        </Stack>
                    );
                } else {
                    return messageComponent;
                }
            } else {
                return <></>;
            }
            }))}  
        </Stack>
    </Box> 
    )
}

export default Message