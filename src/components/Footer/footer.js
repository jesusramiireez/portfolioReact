import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <p><FontAwesomeIcon icon={faCopyright} className='iconStyle' /> 2024 Jesús Ramírez. All rights reserved.</p>
            <span>Made with love. <FontAwesomeIcon icon={faHeart} className='iconStyle' /> </span>
        </footer>
    )
}

export default Footer;
