import React from 'react';
import './intro.css';
import bg from '../../assets/pixelart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
    return (
        <section id='introContainer'>
            <div className='textContainer'>
                <span>I'm <span className='introName'>Jesús</span></span>
                <p className='aboutText'>IT Technician | Trying to improve every day.</p>
                <div className='iconPanel'>
                    <a href="https://github.com/jesusramiireez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/jesusramireez/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
            <div className='imageContainer'><img src={bg} alt='PixelArt' className='bg'/></div>
        </section>
    )
}

export default Intro;