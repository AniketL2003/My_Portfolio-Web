import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import hr360 from '../assets/Ingate.png';
import Resolveit from '../assets/Resolveit.png';
import Retroring from '../assets/Retroring.jpg';
import Crm from '../assets/Crm.png';
import Estate from '../assets/Estate.png';
import imageHr from '../assets/imageHr.png';
import './Projects.css';

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
      <h3>My latest work</h3>
      <div className="project-grid">
        <ProjectCard
          title="HR360"
          description="HR360 is a modern HR management solution that streamlines attendance, payroll, and leave tracking, making workforce management effortless for businesses."
          image={imageHr}
          background="#DDEFFF"
          onClick={() => navigate('/case-study/hr360')}
        />
        <ProjectCard
          title="InGate"
          description="InGate is a smart visitor management app that streamlines check-ins, tracks visitors in real time, and notifies hosts instantly."
          image={hr360}
          background="#E4DBEA"
          onClick={() => window.open(`https://www.behance.net/gallery/216047277/InGate-Visitor-Management-System`, "_blank")}
        />
        <ProjectCard
          title="CRM"
          description="CRM helps businesses manage sales, track interactions, and strengthen client relationships efficiently."
          image={Crm}
          background="#E7EDFF"
          onClick={() => window.open(`https://www.behance.net/gallery/218461021/CRM-Customer-Relationship-Management`, "_blank")}
        />
        <ProjectCard
          title="Real Estate Investment"
          description="Invest is a modern platform that simplifies property analysis, portfolio tracking, and decision-making for investors."
          image={Estate}
          background="#D9F5F0"
          onClick={() => window.open(`https://www.behance.net/gallery/217938145/Real-Estate-Investment-System`, "_blank")}
        />
        <ProjectCard
          title="RetroRing"
          description="RetroRing is a modern social media app that fosters meaningful connections through seamless content."
          image={Retroring}
          background="#FEE9E3"
          onClick={() => window.open(`https://www.behance.net/gallery/200075317/RetroRing-Community-App-Case-Study`, "_blank")}
        />
        <ProjectCard
          title="ResolveIT"
          description="ResolveIT is a complaint management system that streamlines issue reporting, tracking, and resolution."
          image={Resolveit}
          background="#FAF6C8"
          onClick={() => window.open(`https://www.behance.net/gallery/221184171/ResolveIT-Complaint-Management-System`, "_blank")}
        />
      </div>
    </section>
  );
};

export default Projects;
