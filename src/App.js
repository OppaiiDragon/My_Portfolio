import React, { useState } from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Portfolio from './components/Portfolios/portfolio';
import ContactModal from './components/Contacts/contact'; 

function App() {
  const [activeTab, setActiveTab] = useState('home');
  // 2. Create state to manage the Modal's visibility globally
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="App">
      {/* 3. Pass the setter to Navbar so the 'Contact' link can open the modal */}
      <Navbar 
        onTabChange={setActiveTab} 
        activeTab={activeTab} 
        onContactClick={() => setIsContactOpen(true)} 
      />
      
      <main>
        {activeTab === 'home' && <Intro />}
        {activeTab === 'about' && <Skills />}
        {activeTab === 'portfolio' && <Portfolio />}
      </main>

      {/* 4. Render the Modal here so it can appear over Home or About */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;