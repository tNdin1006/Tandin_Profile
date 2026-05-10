import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Tandin Wangchuk</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="role">UX Designer</span>
            <span className="separator">•</span>
            <span className="role">Frontend Developer</span>
            <span className="separator">•</span>
            <span className="role">Software Developer</span>
          </div>
          
          <p className="hero-description">
            I combine UX design, and frontend developmen skills to create products that are both visually engaging and intelligently crafted. I love solving problems with creativity, clarity, and purpose.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn">
              View My Work
              <FiChevronDown />
            </a>
            
            <div className="social-links">
              <a href="https://github.com/tNdin1006" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/tndin-wangchuk-a50261218/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://instagram.com/mtf_thug" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="scroll-indicator"
      >
        <FiChevronDown />
      </motion.div>
    </div>
  );
};

export default Hero;