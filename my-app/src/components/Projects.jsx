import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "RentIn",
    subtitle: "Smart Rental Management App",
    description: "A System that makes renting homes easy with quick listings, secure bookings, and smooth communication between owners and tenants.",
    category: "Mobile Application Design",
    image: "/assets/rentin.png",
    tags: ["UX Research", "UI Design", "Prototyping", "Usability Testing"],
    color: "#4299E1"
  },
  {
    id: 2,
    title: "OIE TRAVEL",
    subtitle: "Bhutan Tourism & Trip Planning Platform",
    description: "A modern tourism website that helps travelers explore Bhutan, discover destinations, plan itineraries, and book experiences with ease.",
    category: "UX for Travel & Culture",
    image: "https://lp-cms-production.imgix.net/2022-01/GettyRF_511875301.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    tags: ["UI Design", "Travel Experience", "Responsive Design", "Information Architecture"],
    color: "#48BB78"
  },
  {
    id: 3,
    title: "Tandin Broadcasting Services",
    subtitle: "Bhutan News Broadcasting System",
    description: "A web-based platform for managing news articles, broadcasts, and updates, enabling smooth workflow between reporters and editors.",
    category: "Responsive Web Design",
    image: "/assets/tbs.png",
    tags: ["UI Design", "Typography", "Color Theory", "Mobile First"],
    color: "#ED8936"
  },
  {
    id: 4,
    title: "Coffee Shop",
    subtitle: "Smart Coffee Ordering System",
    description: "A digital platform where customers can order coffee, choose different coffee beans, and customize their drinks for a personalized experience.",
    category: "Web Application",
    image: "/assets/coffee.png",
    tags: ["Ordering System", "UI/UX", "Web App", "User Experience"],
    color: "#9F7AEA"
  }
];

const Projects = ({ onProjectClick }) => {
  return (
    <div className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
              onClick={() => onProjectClick(project)}
            >
              <div 
                className="project-image"
                style={{ backgroundColor: project.color }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-case-study">
                    View Case Study <FiArrowRight />
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-tag">{project.tags[0]}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;