import React from "react";
import "./HR360CaseStudyPage.css";

// Ensure your image paths are correct in your project's assets folder
import hr360Hero from "../assets/hr360-hero.png";
import persona1 from "../assets/persona1.svg";
import persona2 from "../assets/persona2.svg";
import sketches from "../assets/sketches.svg";
import iteration1 from "../assets/iteration1.png";
import iteration2 from "../assets/iteration2.png";
import iteration3 from "../assets/iteration3.png";
import mockups from "../assets/mockups.png";

const HR360CaseStudyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="case-study">
      {/* ========== Hero Section ========== */}
       <h2 className="project-title">HR360</h2>
      <section className="Hero-section">
        <img src={hr360Hero} alt="HR360 Case Study Banner" className="hero-img" />
      </section>

      {/* ========== Context ========== */}
      <section className="section section--split">
        <h2 className="section-title">Context</h2>
        <div className="split-content">
          <p>
            HR360 is a smart HR management solution that helps businesses manage
            employee data, track attendance, streamline payroll, and automate
            HR-related tasks.
          </p>
        </div>
      </section>

      {/* ========== Problem Statement ========== */}
      <section className="section section--split">
        <h2 className="section-title">Problem Statement</h2>
        <div className="split-content">
          <p>
            HR managers struggle with outdated systems, manual attendance logs,
            and scattered employee data. This makes workforce management
            inefficient, error-prone, and frustrating for all.
          </p>
        </div>
      </section>

      {/* ========== Solution ========== */}
      <section className="section section--split">
        <h2 className="section-title">Solution</h2>
        <div className="split-content">
          <p>
            We designed HR360 — an intuitive HR system that centralizes employee
            information, automates payroll, and provides seamless leave &
            attendance tracking.
          </p>
        </div>
      </section>

      {/* ========== How I Reached There ========== */}
      <section className="section section--split">
        <h2 className="section-title">How I Reached There — The Story</h2>
        <div className="split-content">
          <div className="grid-two">
            <div className="card">
              <h4>The Team</h4>
              <ul>
                <li>UI/UX Designer (Me – leading research, wireframes, and final UI)
                  Backend Developer (handling database and system logic)
                  Frontend Developer (building user interface interactions)
                  HR Consultant (providing domain insights on HR workflows)</li>
              </ul>
            </div>
            <div className="card">
              <h4>My Role</h4>
              <ul>
                <li>Conducted user research with employees, managers, and HR representatives.
                  Mapped workflows (leave, payroll, resignation, attendance).
                  Designed wireframes, high-fidelity screens, and interactive prototypes.
                  Ensured consistency in UI, usability, and brand alignment.</li>
              </ul>
            </div>
            <div className="card">
              <h4>Duration</h4>
              <ul>
                <li>3 months (Concept → Research → Wireframing → Design → Handoff)</li>
              </ul>
            </div>
            <div className="card">
              <h4>Tools</h4>
              <ul>
                <li>Figma – Wireframing & UI Design</li>
                <li>Miro – Journey Mapping & Brainstorming</li>
                <li>Notion – Documentation & Project Management</li>
                <li>Teams – Team Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Research Part ========== */}
      <section className="section section--split">
        <h2 className="section-title">Research Part</h2>
        <div className="split-content">
          <h2>Personas</h2>
          <div className="grid-two persona-grid">
            <div className="persona-card">
              <img src={persona1} alt="Persona of an HR Manager" />
              <h3>Riya Sharma</h3>
              <h5>HR Manager</h5>
              <h6>Age: 27</h6>
              <br/>
              <h5>Goals:</h5>
              <p>Apply for leave, resignation, or regularization quickly.</p>
              <p>Access salary slips, attendance, and HR policies easily.</p>
              <br/>
              <h5>Frustrations:</h5>
              <p>Has to use multiple tools for different HR tasks.</p>
              <p>Doesn’t get real-time updates on request approvals.</p>
              <p>Feels a lack of transparency and control.</p>
            </div>
            <div className="persona-card">
              <img src={persona2} alt="Persona of an Employee" />
                 <h3>Amit Verma</h3>
              <h5>Project Manager</h5>
              <h6>Age: 35</h6>
               <br/>
             <h5>Goals:</h5>
               <p>Approve/reject leave, resignation, and other requests efficiently.</p>
               <p>View team availability and performance in one place.</p>
               <p>Focus more on productivity and less on admin tasks.</p>
              <br />
              <h5>Frustrations:</h5>
                <p>Wastes time tracking employee requests manually.</p>
                <p>Needs to rely on emails and calls with HR for updates.</p>
                <p>Lacks a single dashboard to manage HR-related decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Analysis ========== */}
      <section className="section section--split">
        <h2 className="section-title">Analysis</h2>
        <div className="split-content">
          <div className="grid-two">
            <div className="card">
              <h4>Competitive Analysis</h4>
              <p>Existing HR tools (Workday, SAP SuccessFactors) are powerful but complex and expensive.</p>
              <p>Small to mid-size companies struggle to adapt due to lack of customisation and usability.</p>
            </div>
            <div className="card">
              <h4>Use Case Analysis</h4>
              <p>Employees use HR360 for leave, payroll, attendance, and resignation in one place.</p>
              <p>Managers and HR teams track, approve, and analyse workforce activities with ease.</p>
            </div>
            <div className="card">
              <h4>Pain Points</h4>
              <p>Employees face delays, scattered tools, and lack of transparency in HR processes.</p>
              <p>Managers and HR teams waste time on repetitive tasks without real-time insights.</p>
            </div>
            <div className="card">
              <h4>Target Audience</h4>
              <p>Employees, managers, and HR teams of growing small-to-mid sized organisations.</p>
              <p>Companies seeking a unified, cost-effective, and user-friendly HR platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Brainstorming & Ideation ========== */}
      <section className="section section--split">
        <h2 className="section-title">Brainstorming & Ideation</h2>
        <div className="split-content">
          <div className="grid-two">
            <div className="card">
              <h4>My Approach</h4>
              <p>Understand HR pain points and user groups (HR managers, employees, admins). Focus on key areas like onboarding, engagement, and performance.</p>
              <p>Use divergent thinking to generate ideas, then narrow using feasibility-impact matrix. Prioritize employee-centric solutions with tech enhancements.</p>
            </div>
            <div className="card">
              <h4>Possible Solutions</h4>
              <p>Attendance & Payroll: Mobile check-ins and automated leave workflows. Transparent payslip generator with tax calculators.</p>
              <p>Analytics & Admin Tools: Predictive attrition analysis and HR efficiency dashboards. Custom report builder with drag-and-drop features</p>
            </div>
            </div>
        <br/>
          <img src={sketches} alt="Sketches and Wireframes" className="content-img" />
        </div>
      </section>

      {/* ========== Iterations ========== */}
      <section className="section section--split">
        <h2 className="section-title">Iterations</h2>
        <div className="split-content">
          <div className="iterations-grid">
            <img src={iteration1} alt="Iteration 1 of the design" />
            <img src={iteration2} alt="Iteration 2 of the design" />
            <img src={iteration3} alt="Iteration 3 of the design" />
          </div>
        </div>
      </section>

      {/* ========== Final Designs ========== */}
      <section className="section section--split">
        <h2 className="section-title">Final Designs (Mockups)</h2>
        <div className="split-content">
          <img src={mockups} alt="Final application mockups" className="content-img" />
        </div>
      </section>

      {/* ========== Design System ========== */}
      <section className="section section--split">
        <h2 className="section-title">Design System & Style-guides</h2>
        <div className="split-content">
          <p>
            A consistent visual system with colors, typography, and reusable
            components for scalability.
          </p>
        </div>
      </section>

      {/* ========== Prototype ========== */}
      <section className="section section--split">
        <h2 className="section-title">Prototype</h2>
        <div className="split-content">
          <div className="final-mockup-embed">
            <p>Interactive prototype would be embedded here.</p>
          </div>
        </div>
      </section>

      {/* ========== User Testing ========== */}
      <section className="section section--split">
        <h2 className="section-title">User Testing</h2>
        <div className="split-content">
          <p>
            Tested with 10 HR managers and 15 employees. Feedback was
            incorporated into design iterations for improved usability.
          </p>
        </div>
      </section>

      {/* ========== Conclusion ========== */}
      <section className="section section--split">
        <h2 className="section-title">Conclusion</h2>
        <div className="split-content">
          <p>
            HR360 successfully streamlined HR operations, reduced manual errors,
            and improved transparency for employees and managers alike.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HR360CaseStudyPage;