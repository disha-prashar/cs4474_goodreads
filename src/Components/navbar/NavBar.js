import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Nav, NavbarBrand } from 'react-bootstrap';
import FormControl from '@mui/material/FormControl';
import logo from './goodreads_logo.svg.png';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import home from './home.png';
import message from './messaging.png';
import notif from './notification.png';
import './navbar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function NavBar() {
  return (
    <Navbar expand={'lg'}>
        <Navbar.Brand><img src = {logo} alt = "Logo" style = {{margin:40}}/></Navbar.Brand>
        <FormControl sx={{m: 3, width: 1000}} variant="outlined">
            <OutlinedInput id = "search-bar" sx={{borderRadius: 40, height: 37}}
                style={{borderStyle: "solid", borderWidth:"1px", borderColor: "#663A21"}}
                placeholder='Search by author, title or genre '
                endAdornment={<InputAdornment position="end"><SearchIcon style={{color: "#663A21"}}/> </InputAdornment>}>
            </OutlinedInput>
        </FormControl>   
            <Nav className='icon-contain'>
                <Nav.Link href='#'><img src = {home} alt = "Home" /></Nav.Link>
                <Nav.Link href='#'><img src = {message} alt = "Messaging"/></Nav.Link>
                <Nav.Link href='#'><img src = {notif} alt = "Notification"/></Nav.Link>
            </Nav>
        
        <Nav className="profile">
            <Nav.Link href='#'><AccountCircleOutlinedIcon style={{color: "#663A21", height: "37px", width: "37px"}}/></Nav.Link>
            <Navbar.Text style ={{paddingLeft: "10px"}}>User Name</Navbar.Text>
        </Nav>
        
    </Navbar>
  );
}

export default NavBar;