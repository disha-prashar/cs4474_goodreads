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
import mybooks from './mybooks.png';
import './navbar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useResolvedPath, resolvedPath, useMatch } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand={'lg'} className='navb'>
        <Navbar.Brand><img src = {logo} alt = "Logo" style = {{margin:40}}/></Navbar.Brand>
        <FormControl sx={{m: 3, width: 700}} variant="outlined">
            <OutlinedInput id = "search-bar" sx={{borderRadius: 40, height: 37}}
                style={{borderStyle: "solid", borderWidth:"1px", borderColor: "#663A21"}}
                placeholder='Search by author, title or genre '
                endAdornment={<InputAdornment position="end"><SearchIcon style={{color: "#663A21"}}/> </InputAdornment>}>
            </OutlinedInput>
        </FormControl>   
            <Nav className='icon-contain'>
                <CustomLink to='/Home'><img src = {home} alt = "Home" /></CustomLink>
                <CustomLink to='/Messages'><img src = {message} alt = "Messages"/></CustomLink>
                <Nav.Link href='#'><img src = {mybooks} alt = "My Books"/></Nav.Link>
                <Nav.Link href='#'><img src = {notif} alt = "Notifications"/></Nav.Link>
            </Nav>
        <Nav className='profile'>
            <Nav.Link href='#'><AccountCircleOutlinedIcon style={{color: "#663A21", height: "37px", width: "37px"}}/></Nav.Link>
            <Navbar.Text style ={{paddingLeft: "10px"}}>Jane Doe</Navbar.Text>
        </Nav>
        
    </Navbar>
  );
}

function CustomLink({to,children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>

    )
}

export default NavBar;