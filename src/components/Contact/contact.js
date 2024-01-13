import React, { useRef, useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState("Please fill out the form and click 'Send'.");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t90wycx', 'template_n1d0r0h', form.current, 'LZg6FMhDaQkTfD8Gs')
            .then((result) => {
                console.log(result.text);
                setAlertMessage('Message sent successfully!');
            })
            .catch((error) => {
                console.error(error.text);
                setAlertMessage('Error sending message. Please try again.');
            });
    };

    return (
        <section id='contactContainer'>
            <div className='contact'>
                <h2 className='contactTitle'>&lt; Contact Me /&gt;</h2>
                <span className='contactDesc'>Get in touch with me using the contact form below.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Name' name='from_name' />
                    <input type='email' className='email' placeholder='Email' name='from_email' />
                    <textarea name="message" className="message" rows="5" placeholder='Your message here'></textarea>
                    <button type="submit" value="Send" className='formBtn'>Send</button>
                    <div className={`alert ${alertMessage.includes('successfully') ? 'success' : 'error'}`}>{alertMessage}</div>
                </form>
                <div className='socialMedia'>
                        <a href="https://twitter.com/jesusramiirez_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter}/></a>
                        <a href="https://www.instagram.com/jesusramiireez_/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
