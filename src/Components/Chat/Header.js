import React, { useState, useEffect} from "react";
import {
  Avatar,
  Badge,
  Box,
  ClickAwayListener,
  Divider,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Button } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import { CaretDown } from "phosphor-react";
import { KeyboardArrowDown } from "@mui/icons-material"; // Import the Material-UI caret icon
import { useSearchParams } from "react-router-dom";
import phoneIcon from '../../Components/Chat/Images/phone.png';
import videoIcon from '../../Components/Chat/Images/video.png';
import { MembersList, AuthorUpdatesList, BookClubsList } from "../Data";


const Conversation_Menu = [
  {
    title: "Contact info",
  },
  {
    title: "Mute notifications",
  },
  {
    title: "Clear messages",
  },
  {
    title: "Delete chat",
  },
];

const ChatHeader = ({messagingView, clickedChat}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedUser, setSelectedUser] = 
    useState(messagingView === "author updates" ?
      AuthorUpdatesList[0] : messagingView === "book clubs" ? BookClubsList["bookworms"] : MembersList[0]);

  const [conversationMenuAnchorEl, setConversationMenuAnchorEl] =
    React.useState(null);

  const openConversationMenu = Boolean(conversationMenuAnchorEl);

  const handleClickConversationMenu = (event) => {
    setConversationMenuAnchorEl(event.currentTarget);
  };

  const handleCloseConversationMenu = () => {
    setConversationMenuAnchorEl(null);
  };
  
  useEffect(() => {
    if (clickedChat === null) {
      setSelectedUser(
        messagingView === "author updates"
          ? AuthorUpdatesList[0] : messagingView === "book clubs" 
            ? BookClubsList["bookworms"] 
            : MembersList[0]
      );
    }
    else {
      setSelectedUser(
        messagingView === "author updates"
          ? AuthorUpdatesList?.find(author => author.name === clickedChat) 
            : messagingView === "book clubs" 
              ? BookClubsList["bookworms"] 
              : MembersList?.find(member => member.name === clickedChat)
      );
    }
  }, [clickedChat, messagingView]);


  return (
    <Box
      p={2}
      width={"100%"}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
      >
        { messagingView === 'author updates' ?
          (<></>) : 
          (<img src={phoneIcon} alt={"phonecall"} style={{height: 50, width: 50}}></img>)
        }
        <Box> 
          {messagingView !== "book clubs" ?
            (<Avatar sx={{ width: 80, height: 80 }} alt={selectedUser?.name} src={selectedUser?.img} />) : 
              (<Stack direction="row" spacing={-3} alignItems="left">
                {BookClubsList["bookworms"].map((entry) => ( 
                  <Avatar key={entry.id} src={entry.img} alt={entry.name} sx={{ width: 80, height: 80, border: '1px solid #663A21'}} />
                ))}
              </Stack>
            )
          }
          <Stack direction="column" alignItems="center">
            <Typography variant="subtitle2" fontSize={18} fontWeight={"bold"} color={'#663A21'} fontFamily={"DM Sans"}>
              {messagingView !== "book clubs" ? selectedUser?.name : "Bookworms 🐛"}
            </Typography>
          </Stack>
        </Box>
        { messagingView === 'author updates' ?
          (<></>) : 
          (<img src={videoIcon} alt={"videocall"} style={{height: 50, width: 50}}></img>)
        }
      </Stack>
      <Button
        id="conversation-positioned-button"
        aria-controls={
          openConversationMenu ? "conversation-positioned-menu" : undefined
        }
        style={{  boxShadow: 'none', backgroundColor: "#FFF9F0", borderColor:"#FFF9F0"}} 
        aria-expanded={openConversationMenu ? "true" : undefined}
        onClick={handleClickConversationMenu}>
          <CaretDown color={'#663A21'}/>
      </Button>
          <Menu
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            id="conversation-positioned-menu"
            aria-labelledby="conversation-positioned-button"
            anchorEl={conversationMenuAnchorEl}
            open={openConversationMenu}
            onClose={handleCloseConversationMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}>
            <Box p={1}>
              <Stack spacing={1}>
                {Conversation_Menu.map((el) => (
                  <MenuItem onClick={handleCloseConversationMenu}>
                    <Stack
                      sx={{ minWidth: 100 }}
                      direction="row"
                      alignItems={"center"}
                      justifyContent="space-between"
                    >
                      <span>{el.title}</span>
                    </Stack>{" "}
                  </MenuItem>
                ))}
              </Stack>
              
            </Box>
          </Menu>
          
    </Box>
  );
};

export default ChatHeader;