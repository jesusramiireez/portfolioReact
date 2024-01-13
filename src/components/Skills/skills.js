import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
    return (
        <section id='skillsContainer'>
            <h2 className='containerTitle'>&lt; My skills /&gt;</h2>
                <div className='skillCard'>
                    <h3 className='skillTitle'>Front-End</h3>
                    <div className='imgPanel'>
                        <FontAwesomeIcon icon={faHtml5} className='iconStyle'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='iconStyle'/>
                        <FontAwesomeIcon icon={faJs} className='iconStyle'/>
                        <FontAwesomeIcon icon={faReact} className='iconStyle'/>
                        <FontAwesomeIcon icon={faBootstrap} className='iconStyle'/>
                    </div>
                </div>
                <div className='skillCard'>
                    <h3 className='skillTitle'>Back-End</h3>
                    <div className='imgPanel'>
                        <FontAwesomeIcon icon={faJs} className='iconStyle'/>
                        <FontAwesomeIcon icon={faPhp} className='iconStyle'/>
                        <FontAwesomeIcon icon={faNode} className='iconStyle'/>
                    </div>
                </div>
                <div className='skillCard'>
                    <h3 className='skillTitle'>OS Knowledge</h3>
                    <div className='imgPanel'>
                        <FontAwesomeIcon icon={faWindows} className='iconStyle'/>
                        <FontAwesomeIcon icon={faLinux} className='iconStyle'/>
                    </div>
                </div>
        </section>
    )
}

export default Skills