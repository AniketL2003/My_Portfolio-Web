import React from 'react';
import hr360 from '../assets/Ingate.png';
import Resolveit from '../assets/Resolveit.png';
import Retroring from '../assets/Retroring.jpg';
import Crm from '../assets/Crm.png';
import Estate from '../assets/Estate.png';
import imageHr from '../assets/imageHr.png';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => (
  <section className="projects">
    <h3>My latest work</h3>
    <div className="project-grid">

  
<a 
  href="https://www.behance.net/gallery/228766549/HR-360-App" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="project-card" style={{ background: '#DDEFFF' }}>
    <h4>HR360</h4>
    <p>
      HR360 is a modern HR management solution that streamlines attendance, payroll, 
      and leave tracking, making workforce management effortless for businesses.
    </p>
    <p><strong>Read case study →</strong></p>
    <img src={imageHr} alt="Hr360" />
  </div>
</a>


     <a 
  href="https://www.behance.net/gallery/216047277/InGate-Visitor-Management-System" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="project-card" style={{ background: '#E4DBEA' }}>
    <h4>InGate</h4>
    <p>
      InGate is a smart visitor management app that streamlines check-ins, 
      tracks visitors in real time, and notifies hosts instantly — 
      ensuring security and efficiency.
    </p>
    <p><strong>Read case study →</strong></p>
    <img src={hr360} alt="InGate" />
  </div>
</a>


      <a 
  href="https://www.behance.net/gallery/218461021/CRM-Customer-Relationship-Management" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="project-card" style={{ background: '#D9F5F0' }}>
    <h4>CRM</h4>
    <p>
      CRM is a customer relationship management system that helps businesses 
      track interactions, manage sales, and strengthen client relationships efficiently.
    </p>
    <p><strong>Read case study →</strong></p>
    <img src={Crm} alt="CRM" />
  </div>
</a>


      <a 
  href="https://www.behance.net/gallery/217938145/Real-Estate-Investment-System" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="project-card" style={{ background: '#E7EDFF' }}>
    <h4>Real Estate Investment</h4>
    <p>
      Invest is a modern real estate investment platform that simplifies property 
      analysis, portfolio tracking, and decision-making for investors.
    </p>
    <p><strong>Read case study →</strong></p>
    <img src={Estate} alt="Real Estate Invest" />
  </div>
</a>


      <a 
  href="https://www.behance.net/gallery/200075317/RetroRing-Community-App-Case-Study" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="project-card" style={{ background: '#FEE9E3' }}>
    <h4>RetroRing</h4>
    <p>
      RetroRing is a modern social media app that fosters meaningful 
      connections through seamless content.
    </p>
    <p><strong>Read case study →</strong></p>
    <img src={Retroring} alt="RetroRing" />
  </div>
</a>


      <a 
  href="https://www.behance.net/gallery/221184171/ResolveIT-Complaint-Management-System" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="project-card" style={{ background: '#FAF6C8' }}>
    <h4>ResolveIT</h4>
    <p>
      ResolveIT is a complaint management system that streamlines issue 
      reporting, tracking, and resolution to improve customer satisfaction.
    </p>
    <p><strong>Read case study →</strong></p>
    <img src={Resolveit} alt="ResolveIT" />
  </div>
</a>


    </div>
  </section>
);

export default Projects;
