import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-placeholder">
              <img 
                src="/assets/profile1.png" 
                alt="Tandin Wangchuk"
                className="profile-img"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="about-intro">
              <h3>Hi! I'm Tandin Wangchuk</h3>
              <p>
                A bachelor's in Computer Application student with a passion for crafting intuitive 
                and engaging digital experiences. Over the past year, I have continuously 
                improved my skills in UX design and frontend development, working on projects 
                that emphasize clean design, responsiveness, and user-friendly interaction.
              </p>
            </div>
            
            <div className="about-interests">
              <div className="interest-card">
                <FiTarget className="interest-icon" />
                <h4>My Focus</h4>
                <p>
                  UX design and frontend development—focused on building intuitive, responsive, 
                  and visually appealing web applications that enhance user experience.
                </p>
              </div>
              
              <div className="interest-card">
                <FiHeart className="interest-icon" />
                <h4>My Passion</h4>
                <p>
                  Understanding user needs, solving problems through design, and creating 
                  accessible, visually engaging interfaces that make a real difference.
                </p>
              </div>
            </div>
            
            <div className="about-education">
              {/* <h4>Education</h4> */}
              <div className="education-item">
                <h5>Bachelor's in Computer Appication</h5>
                  <a 
                      href="https://srmus.ac.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <p className="institution">SRM University, Sikkim</p>
                    </a>
               
              </div>
            
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;