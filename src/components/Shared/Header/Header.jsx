import React, { useEffect, useRef } from 'react';

import logo from "../../../assets/images/PROJECT.png"

import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    const [show , setShow] = React.useState(false)
    const [active , setActive] = React.useState("home")
    const menuRef = useRef()
// Close Menu click outside
    useEffect(() => {
        document.addEventListener("mousedown" , (e) => {
            if(!menuRef.current.contains(e.target)){
                setShow(false)
            }
        })
    })
    return (
        <header className="headerContainer">
             <div className="mainNavContainer">
             <div className="logoContainer">
                 <img src={logo} className="logo" alt="" />
            </div>
            <nav className={show ? "navContainerActive" : "navContainer navHidden"} ref={menuRef}>
                 <Link onClick={() => {setShow(false) ; setActive("home")}} className={active === "home" ? 'menuItem menuItemActive' : 'menuItem menuItemNotActive'} to="/">Home</Link>
                <Link onClick={() => {setShow(false) ; setActive("roadMap") }} className={active === "roadMap" ? 'menuItem menuItemActive' : 'menuItem menuItemNotActive'} to="/">RoadMap</Link>
               <Link onClick={() => {setShow(false) ; setActive("team")}} className={active === "team" ? 'menuItem menuItemActive' : 'menuItem menuItemNotActive'} to="/">Team</Link>
                <Link onClick={() => {setShow(false) ; setActive("marketPlace")}} className={active === "marketPlace" ? 'menuItem menuItemActive' : 'menuItem menuItemNotActive'} to="/">MarketPlace</Link>
                <Link onClick={() => {setShow(false) ; setActive("mint")}} className={active === "mint" ? 'menuItem menuItemActive' : 'menuItem menuItemNotActive'} to="/">Mint Here</Link>
            </nav>
            <GiHamburgerMenu onClick={() => {setShow(!show)}} className="menuToogle"/>
             </div>
         </header>
    );
};

export default Header;