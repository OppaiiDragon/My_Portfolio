import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

// 1. Add onContactClick to the destructured props
const Navbar = ({ onTabChange, activeTab, onContactClick }) => {
    return (
        <nav className="navbar">
            <img 
                src={logo} 
                alt="logo" 
                className='logo' 
                onClick={() => onTabChange('home')} 
                style={{cursor: 'pointer'}}
            />
            
            <div className="desktopMenu">
                <span 
                    className={`desktopMenuListItem ${activeTab === 'home' ? 'active' : ''}`} 
                    onClick={() => onTabChange('home')}
                >
                    Home
                </span>
                
                <span 
                    className={`desktopMenuListItem ${activeTab === 'about' ? 'active' : ''}`} 
                    onClick={() => onTabChange('about')}
                >
                    About
                </span>

                {/* FIX: Added active class logic and onClick to change the tab to 'portfolio' */}
                <span 
                    className={`desktopMenuListItem ${activeTab === 'portfolio' ? 'active' : ''}`} 
                    onClick={() => onTabChange('portfolio')}
                >
                    Portfolio
                </span>
            </div>

            <button className="desktopMenuBtn" onClick={onContactClick}>
                Contact Me
            </button>
        </nav>
    );
}

export default Navbar;