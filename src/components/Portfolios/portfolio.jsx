import React, { useState } from 'react'; // Added useState
import './portfolio.css';
import Project1 from '../../assets/capstone.png';
import Project2 from '../../assets/capstone1.png'; 

const Portfolio = () => {
    const [showProjectImages, setShowProjectImages] = useState(false);

    return (
        <section id='portfolio'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
                A collection of work from my time as an IT student, focused on bridging 
                technical theory with practical, clean implementation.
            </span>
            
            <div className="worksImgs">
                <div className="worksItem">
                    <div className="worksGlow"></div>
                    <div className="worksContent">
                        <span className="projectCategory">My Project</span>
                        <h3>Digital Voting System</h3>
                        <p>A secure platform designed to streamline student elections.</p>
                        
                        {/* Toggle button logic */}
                        <button 
                            className="workBtn" 
                            onClick={() => setShowProjectImages(!showProjectImages)}
                        >
                            {showProjectImages ? "Hide Project" : "View Project"}
                        </button>
                    </div>
                </div>
            </div>

 {/* Conditional Rendering for the 2 pictures */}
{showProjectImages && (
    <div className="projectDetailsOverlay">
        <div className="projectImageContainer">
            <img src={Project1} alt="Project View 1" className="detailImg" />
            <img src={Project2} alt="Project View 2" className="detailImg" />
        </div>
    </div>
)}
        </section>
    );
}

export default Portfolio;