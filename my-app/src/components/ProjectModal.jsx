import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiArrowRight, FiCheck, FiAlertCircle, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const caseStudies = {
    1: {
      problemStatement: "Finding and managing rental properties is often difficult due to scattered information, unreliable communication, and slow approval processes. Tenants struggle to find verified listings, while owners face challenges in managing requests efficiently.",
      researchInsights: [
        "Interviewed 12 tenants and 8 property owners",
        "65% wanted quicker communication and verified listings",
        "Owners needed a simple way to manage multiple properties",
        "Users disliked lengthy, offline rental processes"
      ],
      wireframes: [],
      highFidelity: [],
      prototypes: [],
      figmaLink: "https://www.figma.com/design/FAlP6oTLbxIqawM4FDvlLf/RentIn?node-id=0-1&t=BU4sRZOPlKHTVBpu-1",
      images: {
        wireframes: [
          "https://miro.medium.com/1*DsewIjSZe2quBs1OPuQ-VQ.jpeg",
          "https://www.visily.ai/wp-content/uploads/2023/10/Low-Fidelity-Wireframes-1-1024x712.png"
        ],
        highFidelity: [
          "/assets/ri3.png",
          "/assets/ri1.png",
          "/assets/ri2.png",
          "/assets/ri4.png"
        ]
      }
    },
    2: {
      problemStatement: "Travelers struggle to find reliable, well-organized information about Bhutan’s destinations. Existing travel sites feel outdated, lack cultural context, and offer poor trip-planning features, making it difficult for tourists to plan meaningful journeys.",
      researchInsights: [
        "Interviewed 20 international travelers and 5 tour guides",
        "75% wanted clearer trip planning tools and cultural insights",
        "Users preferred visual destination previews over long text",
        "Pain point: difficulty comparing attractions and planning itineraries"
      ],
      wireframes: [
        
      ],
      highFidelity: [
        
      ],
      prototypes: [
        
      ],
      figmaLink: "https://www.figma.com/design/36h75hW7m5u0JoyLyZhZNY/OIE-TRAVEL?t=BU4sRZOPlKHTVBpu-1",
      images: {
        wireframes: ["/assets/lw5.jpeg", "/assets/unnamed.png"],
        highFidelity: ["/assets/t1.png", "/assets/t2.png", "/assets/t3.png", "/assets/t4.png"]
      }
    },
    3: {
      problemStatement: "News production and broadcasting workflows are often fragmented and inefficient, making it difficult for teams to manage content, approvals, and timely publication. Editors and reporters struggle with coordination and real-time updates.",
      researchInsights: [
        "Interviewed newsroom staff and content creators",
        "75% reported delays in news approval and publishing",
        "Users needed a centralized system for managing news content",
        "Key pain point: lack of real-time coordination between reporters and editors"
      ],
      wireframes: [
        
      ],
      highFidelity: [
        
      ],
      prototypes: [
        
      ],
      figmaLink: "https://www.figma.com/design/05D3dE1KlxsXPCXA2tijv8/Desktop---Phone?t=BU4sRZOPlKHTVBpu-1",
      images: {
        wireframes: ["/assets/lw1.png", "/assets/lw2.png"],
        highFidelity: ["/assets/a1.png", "/assets/a2.png", "/assets/a3.png", "/assets/a4.png"]
      }
    },
    4: {
      problemStatement: "Customers often struggle to quickly choose and customize their coffee preferences, especially when selecting different beans and drink options. Existing ordering systems lack personalization and a smooth, intuitive experience.",
      researchInsights: [
        "Surveyed 40 coffee shop customers",
        "68% preferred customizing coffee beans and strength",
        "Users wanted a faster and more visual ordering process",
        "Major pain point: limited customization options in existing systems"
      ],
      wireframes: [
        
      ],
      highFidelity: [
        
      ],
      prototypes: [
        
      ],
      figmaLink: "https://www.figma.com/design/ECSHgVkv8Ydb4WAf3ZPXCv/Coffee-Shop?node-id=0-1&t=6chb0rc90OI9rnPY-1",
      images: {
        wireframes: ["/assets/lw3.png", "/assets/lw4.png"],
        highFidelity: ["/assets/c1.png", "/assets/c4.png", "/assets/c3.png", "/assets/c2.png"]
      }
    }
  };

  const caseStudy = caseStudies[project.id] || caseStudies[1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="modal-content compact-modal"
        onClick={e => e.stopPropagation()}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="case-study-modal">
          <div className="case-study-hero" style={{ backgroundColor: project.color }}>
            <div className="hero-content">
              <h2>{project.title}</h2>
              <p className="subtitle">{project.subtitle}</p>
            </div>
          </div>
          
          <div className="case-study-content compact-content">
            {/* 01 Problem Statement */}
            <section className="case-study-section compact-section">
              <h3><span className="section-number">01</span>Problem Statement</h3>
              <div className="content-box compact-box">
                <p>{caseStudy.problemStatement}</p>
              </div>
            </section>
            
            {/* 02 Research */}
            <section className="case-study-section compact-section">
              <h3><span className="section-number">02</span>User Research Insights</h3>
              <div className="insights-grid compact-grid">
                {(caseStudy.researchInsights || []).map((insight, index) => (
                  <div key={index} className="insight-card compact-card">
                    <div className="insight-number">{index + 1}</div>
                    <p>{insight}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* 03 Wireframes */}
            <section className="case-study-section compact-section">
              <h3><span className="section-number">03</span>Wireframes (Low-Fidelity)</h3>
              <div className="wireframes compact-list">
                {(caseStudy.wireframes || []).map((wireframe, index) => (
                  <div key={index} className="wireframe-item compact-item">
                    <FiCheck className="check-icon" />
                    <p>{wireframe}</p>
                  </div>
                ))}
              </div>
              <div className="images-grid">
                {(caseStudy.images?.wireframes || []).map((img, index) => (
                  <div key={index} className="image-container">
                    <img src={img} alt={`Wireframe ${index + 1}`} />
                    <div className="image-caption">Wireframe {index + 1}</div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* 04 High-Fidelity */}
            <section className="case-study-section compact-section">
              <h3><span className="section-number">04</span>High-Fidelity Designs</h3>
              <div className="design-points compact-list">
                {(caseStudy.highFidelity || []).map((point, index) => (
                  <div key={index} className="design-point compact-item">
                    <div className="point-number">{index + 1}</div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <div className="images-grid">
                {(caseStudy.images?.highFidelity || []).map((img, index) => (
                  <div key={index} className="image-container">
                    <img src={img} alt={`High-fidelity design ${index + 1}`} />
                    <div className="image-caption">Screen {index + 1}</div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* 05 Prototypes */}
            <section className="case-study-section compact-section last-section">
              <h3><span className="section-number">05</span>Prototypes</h3>
              <div className="prototype-info compact-list">
                {(caseStudy.prototypes || []).map((info, index) => (
                  <div key={index} className="prototype-item compact-item">
                    <FiAlertCircle className="info-icon" />
                    <p>{info}</p>
                  </div>
                ))}
              </div>
              <div className="prototype-link">
                <a href={caseStudy.figmaLink} className="btn figma-btn" target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                  <span>View Interactive Prototype on Figma</span>
                  <FiArrowRight />
                </a>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;