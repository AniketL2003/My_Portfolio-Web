import React from "react";
import "./HR360CaseStudyPage.css";

import hr360Hero from "../assets/hr360-hero.svg";
import persona1 from "../assets/persona1.svg";
import persona2 from "../assets/persona2.svg";
import sketches from "../assets/sketches1.svg";
import iterationall from "../assets/iterationall.svg";
import before from "../assets/Before.svg";
import after from "../assets/After.svg";
import mockups from "../assets/mockups.svg";
import DesignColors from "../assets/ColorHR360.svg";
import prototypeVideo from "../assets/prototype.mp4";
import IA from "../assets/InformationArchi.svg";
import HRFlow from "../assets/HRFlow.png";
import PrototypeWeb from "../assets/PrototypeWeb.mp4";

const HR360CaseStudyPage = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="case-study" aria-labelledby="page-title">

      {/* HERO */}
      <section className="hr360-hero-strip">
        <div className="hero-grid">
          <div>
            <h4 className="case-label">Mobile & Web | Case Study</h4>
            <h1 className="project-title" id="page-title">
              HR360 — Smarter HR. Stronger Productivity.
            </h1>
            <p className="lead">
              HR360 centralizes attendance, payroll, recruitment, leave, and
              performance tracking into a single modern system—designed to
              simplify HR workflows and improve employee experience.
            </p>
          </div>

          <div className="hero-visual">
            <img src={hr360Hero} alt="HR360 overview" className="hero-image" />
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="frame">
        <h2 className="section-title">Project Overview</h2>

        <div className="overview-grid">
          <aside className="overview-details">
            <dl className="details-list">
              <div><dt>Role</dt><dd>UI/UX Designer (End-to-End)</dd></div>
              <div><dt>Team</dt><dd>Designer • Backend • Frontend • HR Consultant</dd></div>
              <div><dt>Duration</dt><dd>5 Weeks</dd></div>
              <div><dt>Tools</dt><dd>Figma, Miro, Notion</dd></div>
              <div><dt>Methods</dt><dd>Interviews • IA • Wireframes • Prototyping</dd></div>
            </dl>
          </aside>

          <div className="overview-text">
          <h3>The Problem</h3>
          
            <p className="Prob">
              <h5 className="Que"> What exactly was broken?<br/>
              Who was struggling?<br/>
              What was at risk (time, money, adoption)?</h5>
              <br/>

              HR teams were using multiple disconnected tools for attendance, payroll,
              and employee data, leading to manual work, errors, and poor visibility.
            </p>

            <h3>Solution Summary</h3>
            <p className="small">
              Build a unified HR platform focused on automation, transparency and simplicity — enabling employees and HR teams to work from one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* DISCOVERY & PERSONAS */}
      <section className="frame">
        <h2 className="section-title">Discovery & Research</h2>

        <div className="insights-row">
          <div>Lack of transparency</div>
          <div>Manual & scattered tools</div>
          <div>Approval delays</div>
          <div>Repetitive HR tasks</div>
        </div>

        <div className="persona-cards">
          <article className="persona-card">
            <img src={persona1} alt="HR Manager persona" />
            <h4>Riya Sharma</h4>
            <p className="muted">HR Manager • Age 27</p>
            <ul>
              <li>Needs quick approvals & visibility</li>
              <li>Frustrated with multiple HR tools</li>
            </ul>
          </article>

          <article className="persona-card">
            <img src={persona2} alt="Manager persona" />
            <h4>Amit Verma</h4>
            <p className="muted">Project Manager • Age 35</p>
            <ul>
              <li>Approves requests daily</li>
              <li>Needs a single HR dashboard</li>
            </ul>
          </article>
        </div>

        <div className="figure">
          <h4>Information Architecture</h4>
          <img src={IA} alt="IA diagram" />
        </div>
      </section>

      {/* UX PROCESS */}
      <section className="frame">
        <h2 className="section-title">UX Design Process</h2>

        <div className="figure">
          <h4>User Flows</h4>
          <img src={HRFlow} alt="User flows" />
        </div>

        <div className="figure">
          <h4>Wireframes</h4>
          <img src={sketches} alt="Wireframes" />
        </div>

        <div className="figure">
          <h4>Prototype</h4>
          <div className="prototype-row">
            <video src={prototypeVideo} muted autoPlay loop />
            <video src={PrototypeWeb} muted autoPlay loop />
          </div>
        </div>

        {/* USABILITY */}
        <div className="usability-grid">
          <div>
            <h3>Usability Testing</h3>
            <p className="small">
              Participants: <strong>5 HR Managers</strong> and{" "}
              <strong>15 Employees</strong>. Moderated sessions validated
              attendance, leave, and reporting flows.
            </p>
          </div>

          <div>
            <h3>Top Findings</h3>
            <ul>
              <li>Managers wanted faster approvals & better filters</li>
              <li>Employees expected real-time updates</li>
              <li>UI contrast and module clarity needed improvement</li>
            </ul>
          </div>
        </div>

        {/* ITERATIONS — AUTO SCROLL */}
        <div className="scroll-wrapper">
          <div className="scroll-track">
            <div className="before-after-row">
              <img src={before} alt="Before" />
              <img src={after} alt="After" />
              <img src={iterationall} alt="Iterations" />
            </div>

            <div className="before-after-row">
              <img src={before} alt="Before duplicate" />
              <img src={after} alt="After duplicate" />
              <img src={iterationall} alt="Iterations duplicate" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL DESIGN */}
      <section className="frame">
        <h2 className="section-title">Final Design</h2>

        <div className="final-scroll-wrapper">
          <div className="final-scroll-track">
            <img src={mockups} alt="Final UI" />
            <img src={mockups} alt="Final UI duplicate" />
          </div>
        </div>

        <div className="design-system">
          <h4>Design System</h4>
          <img src={DesignColors} alt="Design colors" />
        </div>
      </section>

      {/* IMPACT */}
      <section className="frame">
        <h2 className="section-title">Impact</h2>

        <div className="stats-row">
          <div className="stat-card1">
            <div className="stat-value">95%</div>
            <div className="stat-label">Task completion</div>
          </div>
          <div className="stat-card2">
            <div className="stat-value">30%</div>
            <div className="stat-label">Faster workflows</div>
          </div>
          <div className="stat-card3">
            <div className="stat-value">4.7/5</div>
            <div className="stat-label">User satisfaction</div>
          </div>
        </div>
      </section>

      <div className="footer-cta">
        <button
          className="next-project-btn"
          onClick={() => {
            window.location.href = "/case-study/ingate";
          }}
        >

          Nxt Study
          <svg
            className="arrowForward"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 12h14M13 5l6 7-6 7" />
          </svg>
        </button>
      </div>

    </main>
  );
};

export default HR360CaseStudyPage;
