import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MessagesView from './components/MessagesView'; // ADDED THIS
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// Styles
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeProject, setActiveProject] = useState(null);

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const messagesRef = useRef(null); // ADDED THIS

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    let sectionRef = null;
    switch(sectionId) {
      case 'home': sectionRef = homeRef; break;
      case 'about': sectionRef = aboutRef; break;
      case 'skills': sectionRef = skillsRef; break;
      case 'projects': sectionRef = projectsRef; break;
      case 'contact': sectionRef = contactRef; break;
      case 'messages': sectionRef = messagesRef; break; // ADDED THIS
      default: sectionRef = homeRef;
    }
    
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Handle project click
  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  // Handle modal close
  const handleModalClose = () => {
    setActiveProject(null);
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef },
        { id: 'messages', ref: messagesRef } // ADDED THIS
      ];

      const scrollPosition = window.pageYOffset + 100;

      for (const section of sections) {
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionBottom = sectionTop + section.ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <div className="nav-dots">
        {['home', 'about', 'skills', 'projects', 'contact', 'messages'].map((section) => (
          <button
            key={section}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            aria-label={`Go to ${section} section`}
            data-section={section}
          />
        ))}
      </div>

      <main>
        <section id="home" ref={homeRef}><Hero /></section>
        <section id="about" ref={aboutRef}><About /></section>
        <section id="skills" ref={skillsRef}><Skills /></section>
        <section id="projects" ref={projectsRef}><Projects onProjectClick={handleProjectClick} /></section>
        <section id="contact" ref={contactRef}><Contact /></section>
        
        {/* ADDED: Messages/Inquiries Section */}
        <section id="messages" ref={messagesRef}>
          <MessagesView />
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={handleModalClose} />
        )}
      </AnimatePresence>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;