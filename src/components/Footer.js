import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>nu</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>na de opleiding</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Werk</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Collega</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#accordion'>FAQ</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
