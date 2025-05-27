import React, { useState,useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/portfolioLogo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }

    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return (
        <div className='navbar'>
            <img id='logo' src={logo}></img>
            <img src={menu_open} onClick={openMenu} className='nav-mob-open'></img>
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}></img>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline}></img>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Portfolio</p></AnchorLink>{menu==="services"?<img src={underline}></img>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact me</p></AnchorLink>{menu==="contact"?<img src={underline}></img>:<></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
        </div>
    )
}

export default Navbar