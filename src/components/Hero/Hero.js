import React from 'react';
import Image from 'react-bootstrap/Image'; 
import Heropic from '../../assets/self.jpg';
import './style.css';

function Hero () {
    return (
        <div className='hero'>
            <Image src={Heropic} alt='me seated'/>
        </div>
    )
};

export default Hero;