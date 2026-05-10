import React from 'react';
// import { motion } from 'framer-motion';
import { 
   FiLayout, FiCode, FiSearch, FiAperture, FiServer, FiCpu 
} from 'react-icons/fi';

const Skills = () => {
  const skills = [
    {
      category: 'UI/UX Design',
      icon: <FiLayout />,
      description: 'User-centric experiences with intuitive interfaces and wireframing.',
      level: 90,
      color: '#4299E1'
    },
    {
      category: 'Networking',
      icon: <FiCpu />,
      description: 'Networks, protocols, and secure communication.',
      level: 90,
      color: '#48BB78'
    },
    {
      category: 'Graphic Design',
      icon: <FiAperture />, // Changed from FiPalette
      description: 'Expert in Adobe Photoshop & Illustrator for impactful visual communication.',
      level: 85,
      color: '#ED8936'
    },
    {
      category: 'Frontend Development',
      icon: <FiCode />,
      description: 'Building responsive, accessible interfaces with modern frameworks.',
      level: 80,
      color: '#9F7AEA'
    },
    {
      category: 'UX Research',
      icon: <FiSearch />,
      description: 'User interviews, usability testing, and persona creation.',
      level: 75,
      color: '#F56565'
    },
    {
      category: 'Backend Development',
      icon: <FiServer />,
      description: 'Creating robust server logic and data systems that keep applications running seamlessly.',
      level: 70,
      color: '#38B2AC'
    }
  ];

  return (
    <div className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.category} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3>{skill.category}</h3>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-meter">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                />
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;