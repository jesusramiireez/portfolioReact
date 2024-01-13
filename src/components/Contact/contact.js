import React , {useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t90wycx', 'template_n1d0r0h', form.current, 'LZg6FMhDaQkTfD8Gs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (    
        <section id='contactContainer'>
            <div className='contact'>
                <h2 className='contactTitle'>&lt; Contact Me /&gt;</h2>
                <span className='contactDesc'>Get in touch with me using the contact form below.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Email' name='your_email'/>
                    <textarea name="message" className="message" rows="5" placeholder='Your message here'></textarea>
                    <button type="submit" value="Send" className='formBtn'>Send</button>
                    <div className='socialMedia'>
                        <FontAwesomeIcon icon={faXTwitter} className='iconStyle'/>
                        <FontAwesomeIcon icon={faInstagram} className='iconStyle'/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;