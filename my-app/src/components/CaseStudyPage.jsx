import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiX, FiArrowRight, FiExternalLink } from "react-icons/fi";

// Replace or import your images paths if needed
const caseStudies = {
  1: {
    title: "RentIn App",
    subtitle: "Rental property management simplified",
    color: "#6C63FF",
    problemStatement:
      "Finding and managing rental properties is often difficult due to scattered information, unreliable communication, and slow approval processes. Tenants struggle to find verified listings, while owners face challenges in managing requests efficiently.",
    researchInsights: [
      "Interviewed 12 tenants and 8 property owners",
      "65% wanted quicker communication and verified listings",
      "Owners needed a simple way to manage multiple properties",
      "Users disliked lengthy, offline rental processes",
    ],
    wireframes: [
      "Sketched multiple flows for property search and listing",
      "Tested paper prototypes with 10 users to refine navigation",
      "Simplified filtering options to reduce cognitive load",
      "Iterated the property details screen 3 times",
    ],
    highFidelity: [
      "Clean UI with emphasis on photos and clarity",
      "Easy-to-use booking and inquiry flows",
      "Modular design system for property cards, filters, and chat",
      "30+ polished screens covering owner and tenant journeys",
    ],
    prototypes: [
      "Clickable Figma prototype with smooth transitions",
      "Usability tested with 10 users",
      "92% task completion rate",
      "SUS score: 80",
    ],
    iterations: [
      "Improved search filters after users struggled to narrow property results",
      "Simplified owner listing flow from 5 steps to 3 steps",
      "Added in-app chat after repeated requests for faster communication",
      "Redesigned booking confirmation screen for clarity",
    ],
    reflections: [
      "Learned that renters value trust and transparency above all",
      "Main challenge: balancing owner and tenant needs in one app",
      "Would include more early testing with property owners",
      "Real-time communication became the most appreciated feature",
    ],
    figmaLink:
      "https://www.figma.com/design/oy3P0CLJriQid1pMq2fCmU/RentIn?node-id=2123-342&t=XIOzCukI0HvaJnrW-1",
    images: {
      wireframes: [
        "https://miro.medium.com/1*DsewIjSZe2quBs1OPuQ-VQ.jpeg",
        "https://www.visily.ai/wp-content/uploads/2023/10/Low-Fidelity-Wireframes-1-1024x712.png",
      ],
      highFidelity: [
        "/assets/ri3.png",
        "/assets/ri1.png",
        "/assets/ri2.png",
        "/assets/ri4.png",
      ],
    },
  },
  // You can add projects 2,3,4 similarly
};

const CaseStudyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = Number(id) || 1;
  const project = caseStudies[projectId];

  if (!project) {
    return (
      <div style={{ textAlign: "center", padding: "3rem" }}>
        <h2>Project Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="case-study-page"
    >
      <div className="page-header" style={{ backgroundColor: project.color }}>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        <button className="close-btn" onClick={() => navigate(-1)}>
          <FiX />
        </button>
      </div>

      <div className="page-content">
        {/* Problem Statement */}
        <section className="section">
          <h2>01. Problem Statement</h2>
          <p>{project.problemStatement}</p>
        </section>

        {/* Research Insights */}
        <section className="section">
          <h2>02. User Research Insights</h2>
          <ul className="insights-grid">
            {project.researchInsights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </section>

        {/* Wireframes */}
        <section className="section">
          <h2>03. Wireframes</h2>
          <ul className="points-list">
            {project.wireframes.map((wf, i) => (
              <li key={i}>{wf}</li>
            ))}
          </ul>
          <div className="images-grid">
            {project.images.wireframes.map((img, i) => (
              <div key={i} className="image-wrapper">
                <img src={img} alt={`Wireframe ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* High-Fidelity Designs */}
        <section className="section">
          <h2>04. High-Fidelity Designs</h2>
          <ul className="points-list">
            {project.highFidelity.map((hf, i) => (
              <li key={i}>{hf}</li>
            ))}
          </ul>
          <div className="images-grid">
            {project.images.highFidelity.map((img, i) => (
              <div key={i} className="image-wrapper">
                <img src={img} alt={`High-fidelity design ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Prototypes */}
        <section className="section">
          <h2>05. Prototypes</h2>
          <ul className="points-list">
            {project.prototypes.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
          <a
            href={project.figmaLink}
            className="figma-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Prototype on Figma <FiArrowRight />
          </a>
        </section>

        {/* Iterations */}
        <section className="section">
          <h2>06. Iterations</h2>
          <ul className="points-list">
            {project.iterations.map((iter, i) => (
              <li key={i}>{iter}</li>
            ))}
          </ul>
        </section>

        {/* Reflections */}
        <section className="section">
          <h2>07. Reflections</h2>
          <ul className="points-list">
            {project.reflections.map((ref, i) => (
              <li key={i}>💡 {ref}</li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default CaseStudyPage;
