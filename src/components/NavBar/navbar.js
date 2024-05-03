import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
           <Link className='desktopMenuListItem'>Home</Link>
           <Link className='desktopMenuListItem'>About</Link>
           <Link className='desktopMenuListItem'>Portfolio</Link>
           <Link className='desktopMenuListItem'>Experience</Link>
        </div>
        <button className='desktopMenuBtn'>
            <ContactMailOutlinedIcon className='contactIcon'/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar