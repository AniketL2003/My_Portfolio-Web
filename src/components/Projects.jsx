import React from 'react';
import hr360 from '../assets/Ingate.png';
import Resolveit from '../assets/Resolveit.png';
import Retroring from '../assets/Retroring.jpg';
import Crm from '../assets/Crm.png';
import Estate from '../assets/Estate.png';
import imageHr from '../assets/imageHr.png';
import './Projects.css';
// import { Link } from 'react-router-dom';

const Projects = () => (
  <section className="projects">
    <h3>My latest work</h3>
    <div className="project-grid">

  
<div
  className="project-card"
  onClick={() => window.location.href = `https://www.behance.net/gallery/228766549/HR-360-App`}
  style={{ background: '#DDEFFF', cursor: 'pointer' }}
>
  <h4>HR360</h4>
  <p>HR360 is a modern HR management solution that streamlines attendance, payroll, 
      and leave tracking, making workforce management effortless for businesses.</p>
  <p><strong>Read case study →</strong></p>
  <img src={imageHr} alt="HR360" />
</div>



<div
  className="project-card"
  onClick={() => window.location.href = `https://www.behance.net/gallery/216047277/InGate-Visitor-Management-System`}
  style={{ background: '#E4DBEA', cursor: 'pointer' }}
>
  <h4>InGate</h4>
  <p>InGate is a smart visitor management app that streamlines check-ins, 
      tracks visitors in real time, and notifies hosts instantly — 
      ensuring security and efficiency.</p>
  <p><strong>Read case study →</strong></p>
  <img src={hr360} alt="HR360" />
</div>



<div
  className="project-card"
  onClick={() => window.location.href = `https://www.behance.net/gallery/218461021/CRM-Customer-Relationship-Management`}
  style={{ background: '#E7EDFF', cursor: 'pointer' }}
>
  <h4>CRM</h4>
  <p>CRM is a customer relationship management system that helps businesses 
      track interactions, manage sales, and strengthen client relationships efficiently.</p>
  <p><strong>Read case study →</strong></p>
  <img src={Crm} alt="CRM" />
</div>



<div
  className="project-card"
  onClick={() => window.location.href = `https://www.behance.net/gallery/217938145/Real-Estate-Investment-System`}
  style={{ background: '#D9F5F0', cursor: 'pointer' }}
>
  <h4>Real Estate Investment</h4>
  <p>Invest is a modern real estate investment platform that simplifies property 
      analysis, portfolio tracking, and decision-making for investors.</p>
  <p><strong>Read case study →</strong></p>
  <img src={Estate} alt="Invest" />
</div>



<div
  className="project-card"
  onClick={() => window.location.href = `https://www.behance.net/gallery/200075317/RetroRing-Community-App-Case-Study`}
  style={{ background: '#FEE9E3', cursor: 'pointer' }}
>
  <h4>RetroRing</h4>
  <p>RetroRing is a modern social media app that fosters meaningful 
      connections through seamless content.</p>
  <p><strong>Read case study →</strong></p>
  <img src={Retroring} alt="Invest" />
</div>



<div
  className="project-card"
  onClick={() => window.location.href = `https://www.behance.net/gallery/221184171/ResolveIT-Complaint-Management-System`}
  style={{ background: '#FAF6C8', cursor: 'pointer' }}
>
  <h4>ResolveIT</h4>
  <p>ResolveIT is a complaint management system that streamlines issue 
      reporting, tracking, and resolution to improve customer satisfaction.</p>
  <p><strong>Read case study →</strong></p>
  <img src={Resolveit} alt="Invest" />
</div>



    </div>
  </section>
);

export default Projects;
