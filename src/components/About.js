import React from 'react'
import john from './images/IMG_3886-removebg-preview.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Over mij</h2>
                    <span className='line'></span>
                    <p>hi.</p>
                    <p>Ik ben pieter</p>
                </div>
            </div>
        </div>
    )
}

export default About
