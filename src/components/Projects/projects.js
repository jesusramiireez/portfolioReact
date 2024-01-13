import React from 'react';
import './projects.css';
import Project1 from '../../assets/3djuegos.png';
import Project2 from '../../assets/interestellar.png';
import Project3 from '../../assets/shop.png';
import Project4 from '../../assets/christmas.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>&lt; My projects /&gt;</h2>
            <div className='projectsContainer'>
                <div className='projectCard'>
                    <a href="https://earnest-arithmetic-3476a9.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={Project1} alt="3djuegos project" className='projectImg'/>
                    </a>
                    <h3 className='projectName'>3dJuegos Page</h3>
                    <p className='projectDesc'>This is a copy of the 3dJuegos's webpage.</p>
                    <span className='tech'>
                        Made with: 
                        <FontAwesomeIcon icon={faHtml5} className='iconStyle'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='iconStyle'/>
                    </span>
                </div>
                <div className='projectCard'>
                    <a href="https://resilient-bavarois-b6f06c.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={Project2} alt="Netflix project" className='projectImg'/>
                    </a>
                    <h3 className='projectName'>Netflix Template</h3>
                    <p className='projectDesc'>Basic copy of the Netflix template.</p>
                    <span className='tech'>
                        Made with: 
                        <FontAwesomeIcon icon={faHtml5} className='iconStyle'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='iconStyle'/>
                        <FontAwesomeIcon icon={faJs} className='iconStyle'/>
                    </span>
                </div>
                <div className='projectCard'>
                    <a href="https://fascinating-creponne-645d8d.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={Project3} alt="Shop website" className='projectImg'/>
                    </a>
                    <h3 className='projectName'>Shop Website</h3>
                    <p className='projectDesc'>Template for a clothes shop site.</p>
                    <span className='tech'>
                        Made with: 
                        <FontAwesomeIcon icon={faHtml5} className='iconStyle'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='iconStyle'/>
                        <FontAwesomeIcon icon={faJs} className='iconStyle'/>
                    </span>
                </div>
                <div className='projectCard'>
                    <a href="https://christmas-jesusramirez.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={Project4} alt="Christmass card project" className='projectImg'/>
                    </a>
                    <h3 className='projectName'>Christmas Card</h3>
                    <p className='projectDesc'>Simple card with christmas thematic.</p>
                    <span className='tech'>
                        Made with: 
                        <FontAwesomeIcon icon={faHtml5} className='iconStyle'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='iconStyle'/>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Projects;