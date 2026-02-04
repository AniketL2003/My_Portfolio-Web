import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

import imageHr from "../assets/imageHr.png";
import InGateCover from "../assets/InGateCover.svg";
import Estate from "../assets/InvestorCover.png";
import OBACover from "../assets/ImageOBA.svg";

const ProjectCard = ({ title, description, image, bg, tags, onClick }) => {
  return (
    <div className="ref-card" style={{ background: bg }} onClick={onClick}>
      <div className="ref-header">
        <div className="ref-copy">

          {/* Title row with arrow */}
          <div className="ref-title-row">
            <h3>{title}</h3>
            <span className="ref-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>

          <p>{description}</p>

          <div className="ref-tags">
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="ref-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="latest-work" className="projects">
      <h2 className="projects-title">Work, Crafted From Curiosity</h2>

      <div className="project-grid">
        <ProjectCard
          title="HR360"
          description="Optimising HR workflows to improve efficiency, accuracy, and employee experience."
          image={imageHr}
          bg="#f9f9f9"
          tags={["SaaS", "Optimisation", "HR"]}
          onClick={() => navigate("/case-study/hr360")}
        />

        <ProjectCard
          title="InGate"
          description="A smart visitor system for streamline access, security, and tracking."
          image={InGateCover}
          bg="#f9f9f9"
          tags={["Mobile App", "Security", "B2B"]}
          onClick={() => navigate("/case-study/ingate")}
        />

        <ProjectCard
          title="OBA"
          description="An order booking and management system that simplifies distributor-to-retailer operations."
          image={OBACover}
          bg="#f9f9f9"
          tags={["B2B", "Operations"]}
          onClick={() => navigate("/case-study/oba")}
        />

        <ProjectCard
          title="Investor"
          description="A data-driven platform that helps investors analyse properties, manage portfolios, and make confident decisions."
          image={Estate}
          bg="#f9f9f9"
          tags={["Finance", "Web App"]}
          onClick={() => navigate("/case-study/investor")}
        />

        
      </div>
    </section>
  );
};

export default Projects;
