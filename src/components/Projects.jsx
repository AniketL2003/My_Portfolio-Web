import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import InGateCover from '../assets/InGateCover.svg';
import Estate from '../assets/Estate.png';
import imageHr from '../assets/imageHr.png';
import './Projects.css';
import OBACover from '../assets/OBACover.svg';


const ProjectCard = ({ title, description, image, background, onClick }) => {
  const ref = useRef(null);
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });
  const scale = useSpring(1, { stiffness: 100, damping: 30 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateXValue = ((mouseY - rect.height / 2) / rect.height) * -20;
    const rotateYValue = ((mouseX - rect.width / 2) / rect.width) * 20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  return (
    <motion.div
      ref={ref}
      className="project-card"
      onClick={onClick}
      style={{ background, rotateX, rotateY, scale, cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => scale.set(1.05)}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <p><strong>Read case study →</strong></p>
      <motion.img src={image} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="latest-work" className="projects">
      <h3>Selected Work</h3>
      <div className="project-grid">
        <ProjectCard
          title="HR360"
          description="HR360 is a modern HR management solution that streamlines attendance, payroll, and leave tracking, making workforce management effortless for businesses."
          image={imageHr}
          background="#f7f7f7ff"
          onClick={() => navigate('/case-study/hr360')}
        />
        <ProjectCard
          title="InGate"
          description="InGate is a smart visitor management app that streamlines check-ins, tracks visitors in real time, and notifies hosts instantly."
          image={InGateCover}
          background="#f7f7f7ff"
          onClick={() =>navigate('/case-study/ingate') }
        />
        
        <ProjectCard
          title="Real Estate Investment"
          description="Invest is a modern platform that simplifies property analysis, portfolio tracking, and decision-making for investors."
          image={Estate}
          background="#f7f7f7ff"
          onClick={() =>navigate('/case-study/investor') }
          />
       
        <ProjectCard
          title="OBA"
          description="OBA is a order management system that streamlines ordering, tracking, and delivery."
          image={OBACover}
          background="#f7f7f7ff"
          onClick={() => navigate('/case-study/oba')}
          />
      </div>
    </section>
  );
};

export default Projects;
