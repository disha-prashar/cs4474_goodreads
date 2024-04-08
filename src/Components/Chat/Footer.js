import {
    Box,
    Fab,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Tooltip,
  } from "@mui/material";
  import {
    Camera,
    File,
    Image,
    LinkSimple,
    PaperPlaneTilt,
    Smiley,
    Sticker,
    User,
  } from "phosphor-react";
  import { Button } from "react-bootstrap";
  import React, {useState} from "react";
  import { useSearchParams } from "react-router-dom";
  import useResponsive from "../Hooks/useResponsive";
  import { styled, useTheme } from "@mui/material/styles";
  
  import data from "@emoji-mart/data";
  import Picker from "@emoji-mart/react";
  
  const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px !important",
      paddingBottom: "12px !important",
    },
  }));
  
  const Actions = [
    {
      color: "#4da5fe",
      icon: <Image size={24} />,
      y: 102,
      title: "Photo/Video",
    },
    {
      color: "#1b8cfe",
      icon: <Sticker size={24} />,
      y: 172,
      title: "Stickers",
    },
    {
      color: "#0172e4",
      icon: <Camera size={24} />,
      y: 242,
      title: "Image",
    },
    {
      color: "#0159b2",
      icon: <File size={24} />,
      y: 312,
      title: "Document",
    },
    {
      color: "#013f7f",
      icon: <User size={24} />,
      y: 382,
      title: "Contact",
    },
  ];
  
  const ChatInput = ({ openPicker, setOpenPicker }) => {
    const [openActions, setOpenActions] = useState(false);
  
    return (
      <StyledInput
        fullWidth
        placeholder="Write a message..."
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <Stack sx={{ width: "max-content" }}>
              
  
              <InputAdornment>
                <Button
                  style={{  boxShadow: 'none', backgroundColor: "#663A21", borderColor:"#FFF9F0", marginRight:"15px"}} 
                  onClick={() => {
                    setOpenActions(!openActions);
                  }}
                >
                  <LinkSimple />
                </Button>
              </InputAdornment>
            </Stack>
          ),
          endAdornment: (
            <Stack sx={{ position: "relative" }}>
              {/* <InputAdornment>
                <Button
                  style={{  boxShadow: 'none', backgroundColor: "#AD9080", borderColor:'#AD9080', marginRight:"10px"}} 
                  onClick={() => {
                    setOpenPicker(!openPicker);
                  }}
                >
                  <Smiley />
                </Button>
              </InputAdornment> */}
            </Stack>
          ),
        }}
      />
    );
  };
  
  const Footer = () => {
    const theme = useTheme();
    
    const [searchParams] = useSearchParams();
  
    const [openPicker, setOpenPicker] = React.useState(false);
    return (
      <Box
        sx={{
          position: "relative",
          backgroundColor: "transparent !important",
        }}
      >
        <Box
          p={2}
          width={"100%"}
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack direction="row" alignItems={"center"} spacing={3}>
            <Stack sx={{ width: "100%" }}>
              <Box
                style={{
                  zIndex: 10,
                  position: "fixed",
                  display: openPicker ? "inline" : "none",
                  bottom: 81,
                  right: searchParams.get("open") === "true"
                    ? 420
                    : 100,
                }}
              >
                {/* <Picker
                  theme={theme.palette.mode}
                  data={data}
                  onEmojiSelect={console.log}
                /> */}
              </Box>
              <ChatInput openPicker={openPicker} setOpenPicker={setOpenPicker} />
            </Stack>
            <Box
              sx={{
                height: 48,
                width: 48,
                backgroundColor: '#663A21',
                borderRadius: 1.5,
              }}
            >
              <Stack
                sx={{ height: "100%" }}
                alignItems={"center"}
                justifyContent="center"
              >
                <IconButton>
                  <PaperPlaneTilt color="#ffffff" />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  };
  
  export default Footer;