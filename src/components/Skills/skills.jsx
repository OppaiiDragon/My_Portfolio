import React, { useState, useEffect } from 'react';
import './skills.css';
import frontendImg from '../../assets/frontend.jpg'; 
import backendImg from '../../assets/backend.jpg';
import frameworkImg from '../../assets/framework.png';

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null); // State for Modal

    // Close modal on 'Esc' key
    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') setSelectedSkill(null); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const skillData = [
        { 
            id: 1, 
            title: "Frontend", 
            image: frontendImg,
            tags: ["React", "Next.js", "TypeScript"],
            desc: "Building immersive, high-performance interfaces.",
            longDesc: "Expertise in crafting responsive, user-centric web applications. I focus on modern React patterns, state management, and optimized rendering to ensure a seamless UX across all devices.",
            accent: "#00dfd8"
        },
        { 
            id: 2, 
            title: "Backend", 
            image: backendImg,
            tags: ["Node.js", "PostgreSQL", "MySQL"],
            desc: "Developing robust server-side architectures.",
            longDesc: "Specializing in scalable server-side logic and database design. I build secure RESTful APIs and manage complex data relationships using both SQL and NoSQL environments.",
            accent: "#007cf0"
        },
        { 
            id: 3, 
            title: "Frameworks", 
            image: frameworkImg,
            tags: ["Express", "Laravel"],
            desc: "Leveraging tools for scalable development.",
            longDesc: "Proficient in utilizing industry-leading frameworks to accelerate development cycles. I utilize Laravel for robust PHP backend structures and Express for lightweight, fast Node.js applications.",
            accent: "#ffd700"
        },
    ];

    return (
        <section id='skills'>
            <div className="skillsHeader">
                <span className="academicLabel">Academic Competencies</span>
                <h2 className="skillTitle coolLetters">Technical <span>Core</span></h2>
                <p className="skillDesc">Mastering the modern web stack through my BSIT journey.</p>
            </div>
            
            <div className="skillGrid">
                {skillData.map((skill, index) => (
                    <div 
                        className={`skillCard ${hoveredIndex === index ? 'active' : ''}`} 
                        key={skill.id}
                        style={{ "--delay": `${index * 0.1}s`, "--accent": skill.accent }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setSelectedSkill(skill)} // Open Modal
                    >
                        <div className="cardContent">
                            <div className="skillIconContainer">
                                <img src={skill.image} alt={skill.title} className="skillIconImg" />
                            </div>
                            <div className="cardHeader">
                                <div className="dot" style={{ backgroundColor: skill.accent }}></div>
                                <h2>{skill.title}</h2>
                            </div>
                            <p className="cardDesc">{skill.desc}</p>
                            <div className="tagContainer">
                                {skill.tags.map(tag => (
                                    <span key={tag} className="skillTag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="cardGlow"></div>
                    </div>
                ))}
            </div>

            {/* MODAL OVERLAY */}
            {selectedSkill && (
                <div className="modalOverlay" onClick={() => setSelectedSkill(null)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()} style={{ "--accent": selectedSkill.accent }}>
                        <button className="modalClose" onClick={() => setSelectedSkill(null)}>&times;</button>
                        
                        <div className="modalHeader">
                            <img src={selectedSkill.image} alt="" className="modalImg" />
                            <div>
                                <span className="modalLabel">Skill Overview</span>
                                <h2>{selectedSkill.title}</h2>
                            </div>
                        </div>

                        <div className="modalBody">
                            <p>{selectedSkill.longDesc}</p>
                            <div className="modalTags">
                                {selectedSkill.tags.map(tag => (
                                    <span key={tag} className="skillTag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Skills;