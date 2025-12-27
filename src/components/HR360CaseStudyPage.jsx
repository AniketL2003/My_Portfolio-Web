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
import Arrow from "../assets/ArrowForward.svg";

const HR360CaseStudyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study" aria-labelledby="page-title">
      <div className="project-type">
        {/* <span>Mobile & Web</span>
        <span className="divider">|</span>
        <span>Case Study</span> */}
      </div>

      {/* ========== 01_Hero ========== */}
      <header id="page-title" className="frame hero-frame" role="banner">
        <div className="hero-inner-grid">
            <div className="col col-6 hero-copy">
              <h4 className="project-subtitle">Mobile & Web | Case Study</h4>
            <h1 className="project-title">HR360 – Smarter HR. Stronger Productivity.</h1>
            

            <p className="lead">
              HR360 centralizes attendance, payroll, recruitment, leave, and
              performance tracking into a single, modern interface—designed to
              simplify HR workflows and improve employee experience.
            </p>

            <div className="hero-cta">
              <button
                className="live-project-btn"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.mobigic.attendance&pcampaignid=web_share",
                    "_blank"
                  )
                }
              >
                Android App
              </button>
              <button
                className="live-project-btn"
                onClick={() =>
                  window.open(
                    "https://hr360app.com",
                    "_blank"
                  )
                }
              >
                Website
              </button>
            </div>
          </div>

          <div className="col col-6 hero-visual">
            <div className="hero-mockup">
              <img src={hr360Hero} alt="HR360 Case Study Banner" />
            </div>
          </div>
        </div>
      </header>

      {/* ========== 02_Project_Overview ========== */}
      <section id="project-overview" className="frame overview-frame">
        <div className="section-title-block">
          <h2 className="section-title">Project Overview</h2>
        </div>

        <div className="grid overview-grid">


          <aside className="col col-4 overview-details">
            <dl className="details-list">
              <div>
                <dt>Role</dt>
                <dd>UI/UX Designer (End-to-end)</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>Designer • Backend • Frontend • HR Consultant</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>5 Weeks</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Figma, Miro, Notion, Teams</dd>
              </div>
              <div>
                <dt>Methods</dt>
                <dd>Interviews, Surveys, IA, Wireframes,<br/> Prototyping</dd>
              </div>
            </dl>
          </aside>

          <div className="overview-text">
            <p>
              The HR360 project was initiated to address the growing need for a
              simplified, scalable HR management system. Mid-sized companies
              often use multiple, disjointed tools which reduce productivity and transparency.
            </p>

            <h4>Problem Statement</h4>
            <p className="small">
              Traditional HR tools are too complex or inflexible. HR professionals spend too much time toggling between systems for approvals, payroll and reporting.
            </p>

            <h4>Solution Summary</h4>
            <p className="small">
              Build a unified HR platform focused on automation, transparency and simplicity — enabling employees and HR teams to work from one dashboard.
            </p>
          </div>

        </div>
      </section>

      {/* ========== 03_Discovery_Research ========== */}
      <section id="discovery-research" className="frame discovery-frame">
        <h2 className="section-title">Discovery &amp; Research</h2>

        {/* Competitive Analysis */}
        <div className="subsection competitive">
          <h3>Competitive Analysis</h3>
          <p className="small">Workday & SAP are powerful but expensive and complex; smaller orgs need usability and customization.</p>

          <div className="cards-row">
            <div className="cmp-card1">
              <h4>Workday</h4>
              <p className="small">Enterprise features, steep learning curve.</p>
            </div>
            <div className="cmp-card2">
              <h4>SAP SuccessFactors</h4>
              <p className="small">Robust but costly and rigid.</p>
            </div>
            <div className="cmp-card3">
              <h4>Other HRMS</h4>
              <p className="small">Many trade-offs in features vs. usability.</p>
            </div>
          </div>
        </div>

        {/* User Research */}
        <div className="subsection user-research">
          <h3>User Research</h3>
          <p className="small">Interviews & surveys with HR managers and employees to uncover pain points.</p>

          <div className="insights-row">
            <div className="insight1">Lack of transparency</div>
            <div className="insight2">Manual & scattered tools</div>
            <div className="insight3">Employees face delays</div>
            <div className="insight4">Repetitive HR tasks</div>
          </div>
        </div>

        {/* Personas */}
        <div className="subsection personas">
          <h3>Personas</h3>
          <div className="persona-cards">
            <article className="persona-card">
              <img src={persona1} alt="Riya Sharma - HR Manager" />
              <h4>Riya Sharma</h4>
              <p className="muted">HR Manager • Age 27</p>

              <div className="persona-info">
                <ul>
                  <li>GOALS: Apply for leave/resignation quickly,
                    Access payslips & policies</li>
                  <br />
                  <li>FRUSTRATION: Has to use multiple tools for different HR tasks.
                    Doesn’t get real-time updates on request approvals.
                    Feels a lack of transparency and control.</li>
                </ul>
              </div>
            </article>


            <article className="persona-card">
              <img src={persona2} alt="Amit Verma - Project Manager" />
              <h4>Amit Verma</h4>
              <p className="muted">Project Manager • Age 35</p>

              <div className="persona-info">
                <ul>
                  <li>GOALS: Approve/reject requests efficiently,<br />
                    View team availability</li>
                  <br />
                  <li>FRUSTRATION: Wastes time tracking employee requests manually.
                    Needs to rely on emails and calls with HR for updates.
                    Lacks a single dashboard to manage HR-related decisions.</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="ia-block">
            <h4>Information Architecture</h4>
            <div className="ia-image">
              <img src={IA} alt="Information architecture diagram" />
            </div>
          </div>
        </div>

        {/* Key insights & Problem definition */}
        <div className="subsection insights-problem">
          <h3>Key Insights</h3>
          <div className="three-insights">
            <div className="insight-box1">Delays caused by scattered tools</div>
            <div className="insight-box2">Managers need faster approvals & filters</div>
            <div className="insight-box3">Employees want transparency & live updates</div>
          </div>

          <div className="problem-box">
            <strong>Problem Definition:</strong>
            <p>How might we centralize HR tasks, improve transparency, and simplify workflows for employees & managers?</p>
          </div>
        </div>
      </section>

      {/* ========== 04_Design_Process ========== */}
      <section id="design-process" className="frame process-frame">
        <h2 className="section-title">UX Design Process</h2>

        <div className="subsection flows">
          <h3>User Flows</h3>
          <p className="small">Designed flows for leave, attendance, payroll, timesheet.</p>
          <div className="flow-placeholder">
            <img src={HRFlow} />
          </div>
        </div>

        <div className="subsection-wireframes">
          <h3>Wireframes</h3>
          <div className="sketches-grid">
            {/* <div className="wireframe"> </div> */}
            <img src={sketches} />
            {/* <div className="wireframe">Low-fi 2</div>
            <div className="wireframe">Low-fi 3</div>
            <div className="wireframe">Low-fi 4</div> */}
          </div>
        </div>

        <div className="subsection-prototype">
          <h3>Prototype</h3>
          <p className="small">Interactive prototype validated core flows and interactions.</p>
          <div className="prototype-row">
            <video
              className="prototype-vid"
              src={prototypeVideo} // ✅ use imported variable
              controls
              muted
              autoPlay
              loop
              playsInline
            />
            <video
              className="prototype-vid2"
              src={PrototypeWeb} // ✅ use imported variable
              controls
              muted
              autoPlay
              loop
              playsInline
            />

          </div>
        </div>

        <div className="subsection usability">
          <div className="usability-grid">
            <div>
              <h3>Usability Testing</h3>
              <p className="small">
                Participants: <strong>5 HR Managers</strong> and <strong>15 Employees</strong>.
                Moderated sessions to validate attendance, leave, and report flows.
              </p>
            </div>

            <div>
              <h3>Top findings</h3>
              <ul>
                <li>Managers wanted advanced filters</li>
                <li>Employees wanted real-time leave notifications</li>
                <li>UI contrast and module distinction needed improvement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subsection iterations">
          <h3>Iterations — Before → After</h3>

          <div className="scroll-wrapper">
            <div className="scroll-track">

              {/* 🔁 FIRST SET */}
              <div className="before-after-row">
                <figure className="before">
                  <figcaption>Before</figcaption>
                  <img src={before} alt="Iteration before" />
                </figure>

                <figure className="after">
                  <figcaption>After</figcaption>
                  <img src={after} alt="Iteration after (final)" />
                </figure>
                <figure className="itrations">
                  <figcaption>3 Step Iterations For Attendance</figcaption>
                  <img src={iterationall} alt="Iteration all" />
                </figure>
              </div>

              {/* 🔁 DUPLICATE SET (for infinite loop) */}
              <div className="before-after-row">
                <figure className="before">
                  <figcaption>Before</figcaption>
                  <img src={before} alt="Iteration before duplicate" />
                </figure>

                <figure className="after">
                  <figcaption>After</figcaption>
                  <img src={after} alt="Iteration after duplicate" />
                </figure>

                <figure className="itrations">
                  <figcaption>After</figcaption>
                  <img src={iterationall} alt="Iteration all" />
                </figure>
              </div>

            </div>
          </div>

          <p className="small-caption">
            Changes: redesigned HR app flow, improved UX, aesthetics, and refined UI contrast.
          </p>
        </div>

      </section>

      {/* ========== 05_Final_Design ========== */}
      <section id="final-design" className="frame final-frame">
        <h2 className="section-title">Final Design</h2>

        <p className="small">
          The final HR360 UI: dashboard, attendance, leave flow, analytics, profile and Web pages.
        </p>

        <div className="final-scroll-wrapper vertical">
          <div className="final-scroll-track">

            {/* 🔁 First set */}
            <div className="final-item">
              <img src={mockups} alt="Dashboard mockup" />
            </div>

            {/* 🔁 Duplicate set for seamless loop */}
            <div className="final-item">
              <img src={mockups} alt="Dashboard mockup duplicate" />
            </div>

          </div>
        </div>




        <div className="design-system">
          <h4>Design System & Style-guides</h4>
          <p className="small">Primary Blue, Orange, Green — typography and reusable components (buttons, tables, badges).</p>
          <img className="color" src={DesignColors} alt="Design colors" />
        </div>
      </section>

      {/* ========== 06_Impact ========== */}
      <section id="impact" className="frame impact-frame">
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

        <blockquote className="testimonial">
          “HR360 reduced time spent on admin tasks and improved team transparency.” — HR Manager (participant)
        </blockquote>
      </section>

      {/* ========== 07_Learnings ========== */}
      <section id="learnings" className="frame learnings-frame">
        <h2 className="section-title">Learnings</h2>

        <div className="three-spot">
          <div className="spot">
            <h4>Validate early</h4>
            <p className="small">Prototype tests saved weeks of rework.</p>
          </div>
          <div className="spot">
            <h4>Collaborate closely</h4>
            <p className="small">Tighter engineering collaboration improved deliverability.</p>
          </div>
          <div className="spot">
            <h4>Enhance analytics</h4>
            <p className="small">Future focus: deeper, customizable reporting & filters.</p>
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

      {/* <div style={{ height: 160 }} />  */}
      {/* bottom padding */}
    </main>
  );
};

export default HR360CaseStudyPage;
