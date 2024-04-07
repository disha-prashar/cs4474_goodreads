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
import { styled } from "@mui/material/styles";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../Hooks/useResponsive";
import phoneIcon from '../../Components/Chat/Images/phone.png';
import videoIcon from '../../Components/Chat/Images/video.png';
import { MembersList, AuthorUpdatesList } from "../Data";
import { click } from "@testing-library/user-event/dist/click";
import { SampleChatAuthorUpdates, SampleChatBookClubs, SampleChatDMs } from "../Data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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

  const [selectedConvo, setSelectedConvo] = 
    useState(null);
  
  const [selectedUser, setSelectedUser] = useState(null);

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
    if (clickedChat !== undefined) {
      setSelectedConvo(
        messagingView === "author updates"
          ? SampleChatAuthorUpdates[clickedChat] || null
          : SampleChatDMs[clickedChat] || null
      );
      setSelectedUser(
        messagingView === "author updates"
          ? AuthorUpdatesList?.find(author => author.name === clickedChat) || null
          : MembersList?.find(member => member.name === clickedChat) || null
      )
    }
    else {
      setSelectedConvo(
        messagingView === "author updates"
          ? SampleChatAuthorUpdates["Colleen Hoover"] || null
          : SampleChatDMs["Audrey Miller"] || null
      );
      setSelectedUser(
        messagingView === "author updates"
          ? AuthorUpdatesList[0] || null
          : MembersList[0] || null
      )
    }
    console.log("selected is", selectedConvo, selectedUser);
  }, [clickedChat, messagingView]);

  return (
    <Box
      p={2}
      width={"100%"}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Stack
        onClick={() => {
          searchParams.set("open", true);
          setSearchParams(searchParams);
        }}
        spacing={2}
        direction="row"
        alignItems={"center"}
      >
        { messagingView == 'author updates' ?
          (<></>) : 
          (<img src={phoneIcon} style={{height: 50, width: 50}}></img>)
        }
        <Box> 
          {selectedConvo &&(
          <Stack direction="column" alignItems="center">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant={messagingView === 'author updates' ? undefined : "dot"}
            >
            <Avatar sx={{ width: 80, height: 80 }} alt={selectedUser?.name} src={selectedUser?.img} />
            </StyledBadge>
            <Typography variant="subtitle2" fontSize={18} fontWeight={"bold"} color={'#663A21'} fontFamily={"DM Sans"}>
              {selectedUser?.name}
            </Typography>
          </Stack>)}
        </Box>
        { messagingView == 'author updates' ?
          (<></>) : 
          (<img src={videoIcon} style={{height: 50, width: 50}}></img>)
        }
      </Stack>
      <IconButton
        id="conversation-positioned-button"
        aria-controls={
          openConversationMenu ? "conversation-positioned-menu" : undefined
        }
        aria-haspopup="true"
        aria-expanded={openConversationMenu ? "true" : undefined}
        onClick={handleClickConversationMenu}>
          <CaretDown color={'#663A21'}/>
        </IconButton>
          <Menu
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            TransitionComponent={Fade}
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