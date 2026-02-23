import React from 'react';
import './contact.css';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="contactModalContent" onClick={(e) => e.stopPropagation()}>
                <button className="modalClose" onClick={onClose}>&times;</button>
                
                <div className="contactHeader">
                    <span className="academicLabel">Let's Connect</span>
                    <h2 className="coolLetters">Get In <span>Touch</span></h2>
                </div>

                <div className="contactInfoGrid">
                    <div className="contactItem" style={{"--delay": "0.1s"}}>
                        <label>Email</label>
                        <p>cincojhian@gmail.com</p>
                    </div>
                    <div className="contactItem" style={{"--delay": "0.2s"}}>
                        <label>What'sapp</label>
                        <p>09691885757</p>
                    </div>
                    <div className="contactItem" style={{"--delay": "0.3s"}}>
                        <label>Location</label>
                        <p>Mandaue, Cebu, Philippines</p>
                    </div>
                </div>

                <div className="modalFooter">
                    <p>Focused on Frontend, Backend, and Frameworks</p>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;