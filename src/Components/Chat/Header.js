import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { styled,useTheme } from "@mui/material/styles";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../Hooks/useResponsive";

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

const ChatHeader = () => {
  const isMobile = useResponsive("between", "md", "xs", "sm");
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();

  const [conversationMenuAnchorEl, setConversationMenuAnchorEl] =
    React.useState(null);
  const openConversationMenu = Boolean(conversationMenuAnchorEl);
  const handleClickConversationMenu = (event) => {
    setConversationMenuAnchorEl(event.currentTarget);
  };
  const handleCloseConversationMenu = () => {
    setConversationMenuAnchorEl(null);
  };

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
        <IconButton sx={{ fontSize: 50 }}>
          <Phone color={'#663A21'}/>
        </IconButton>

        {/*  Avatar picture on top of name */}
        <Box>
          <Stack direction="column" alignItems="center">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
            <Avatar sx={{ width: 80, height: 80 }} alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
            <Typography variant="subtitle2" fontSize={18} fontWeight={"bold"} color={'#663A21'} fontFamily={"DM Sans"}>
              {faker.name.fullName()}
            </Typography>
          </Stack>
        </Box>

        <IconButton sx={{ fontSize: 50 }}>
          <VideoCamera color="#663A21" />
        </IconButton>
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