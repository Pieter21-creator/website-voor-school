import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Werk</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <p>Nog niks</p>
                        <p><span>Nog niks</span></p>
                        <p>Nog niks</p>
                    </div>
                    <div className='card'>
                        <p>Nog niks</p>
                        <p><span>nog nikes</span></p>
                        <p>Nog niks</p>
                    </div>
                    <div className='card'>
                        <p>niks</p>
                        <p><span>nog niks</span></p>
                        <p>nog niks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
