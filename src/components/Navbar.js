import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/4b8973e887f90d654b6fd3f00cd2d9b6.png'

import './Navbar.css'

const Navbar = () => {
    
    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    // change nav color when scrolling
    const [color, setColor] = useState(false)
    
    
    // close menu on click
    const closeMenu = () => setClick(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={25} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>nu</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>na de opleiding</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Werk</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Collega</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#accordion' onClick={closeMenu}>FAQ</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
