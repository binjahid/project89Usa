
import logo from "../../../assets/images/PROJECT.png"
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <header className="headerContainer">
             <div className="mainNavContainer">
             <div className="logoContainer">
                 <img src={logo} className="logo" alt="" />
            </div>
            <nav className="navContainer">
                 <Link className='menuItem menuItemActive' to="/">Home</Link>
                <Link className='menuItem' to="/">RoadMap</Link>
               <Link className='menuItem' to="/">Team</Link>
                <Link className='menuItem' to="/">MarketPlace</Link>
                <Link className='menuItem' to="/">Mint Here</Link>
            </nav>
             </div>
         </header>
    );
};

export default Header;