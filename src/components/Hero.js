import React from 'react';
import Heropic from '../assets/self.jpg'

function Hero () {
    return (
        <div className='hero'>
            <img src={Heropic} className='heropic' alt='me seated'/>
            <p>Hello there!</p>
        </div>
    )
};

export default Hero;