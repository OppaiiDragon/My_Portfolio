import React, { useEffect } from 'react';
import './intro.css';
import bg from '../../assets/profile.png';

const Intro = () => {
    // Logic to disable scroll only for the Home page
    useEffect(() => {
        // Hide scrollbar when on Home
        document.body.style.overflow = 'hidden';

        // Cleanup: Re-enable scroll when navigating to 'About' or 'Portfolio'
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <section id='intro'>
            <div className="imageContainer">
                <div className="imageGlow"></div>
                <img src={bg} alt='Profile' className='bg'/>
            </div>

            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <h1 className='introText'>
                    I'm <span className='introName'>Jhian Kyle</span>
                </h1>
                <div className="roleText">Graduating Student</div>
                <p className='introPara'>
                    I am a 4th year BSIT student looking to apply my technical 
                    skills in a real-world internship environment and contribute 
                    to innovative projects.
                </p>
            </div>
        </section>
    );
}

export default Intro;