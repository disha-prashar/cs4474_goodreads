import { Box, Stack } from '@mui/material'
import React from 'react';
import { SampleChatDMs, SampleChatBookClubs, SampleChatAuthorUpdates } from '../Data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';

function ShowChatHistory ({menu}, {messagingView})  {
  if (messagingView === "direct messaging") {
  
    
    // return (
    //   SampleChatDMs.map((el)=>{
    //     switch (el.type) {
    //       case 'divider':
    //         return <TimeLine el={el}/>
    //       case 'msg':
    //         switch (el.subtype) {
    //           case 'img':
    //             return <MediaMsg el={el} menu={menu}/>
    //               case 'doc':
    //                 return <DocMsg el={el} menu={menu}/>
    //               case 'link':
    //                 return <LinkMsg el={el} menu={menu}/>
    //               case 'reply':
    //                 return <ReplyMsg el={el} menu={menu}/>
    //               default:
    //                 return <TextMsg el={el} menu={menu}/>
    //         }
    //       break;
    //       default:
    //         return <></>;
    //     }
    //   })
    // )
  }
  else if (messagingView === "book clubs") { 
    // return (
    //   SampleChatBookClubs.map((el)=>{
    //     switch (el.type) {
    //       case 'divider':
    //         return <TimeLine el={el}/>
    //       case 'msg':
    //         switch (el.subtype) {
    //           case 'img':
    //             return <MediaMsg el={el} menu={menu}/>
    //               case 'doc':
    //                 return <DocMsg el={el} menu={menu}/>
    //               case 'link':
    //                 return <LinkMsg el={el} menu={menu}/>
    //               case 'reply':
    //                 return <ReplyMsg el={el} menu={menu}/>
    //               default:
    //                 return <TextMsg el={el} menu={menu}/>
    //         }
    //       break;
    //       default:
    //         return <></>;
    //     }
    //   })
    // )
  }
  else {
    // return (
    //   SampleChatAuthorUpdates.map((el)=>{
    //     switch (el.type) {
    //       case 'divider':
    //         return <TimeLine el={el}/>
    //       case 'msg':
    //         switch (el.subtype) {
    //           case 'img':
    //             return <MediaMsg el={el} menu={menu}/>
    //               case 'doc':
    //                 return <DocMsg el={el} menu={menu}/>
    //               case 'link':
    //                 return <LinkMsg el={el} menu={menu}/>
    //               case 'reply':
    //                 return <ReplyMsg el={el} menu={menu}/>
    //               default:
    //                 return <TextMsg el={el} menu={menu}/>
    //         }
    //       break;
    //       default:
    //         return <></>;
    //     }
    //   })
    // )
  }
};

const Message = ({menu}, {messagingView}) => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
          {/* {messagingView === "direct messaging" ? 
            (SampleChatDMs.map((el)=>{
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
              })
            ) : (<></>)
          } */}
        </Stack>
    </Box>
  )
}

export default Message