import React from "react";
import "./InGateCaseStudy.css";

import IAI from "../assets/Information-Architecture-InGate.svg";
import UFI from "../assets/User-Flow-InGate.svg";
import UJI from "../assets/User-Journey-InGate.svg";
import CSI from "../assets/Card-Sorting-Ingate.svg";
import WSI from "../assets/Wireframe-Ingate.svg";
import FDI from "../assets/Final-Design-InGate.svg";

const InGateCaseStudyPage = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="case-study" aria-labelledby="page-title">

      {/* HERO */}
      <section className="ingate-hero-strip">
        <div className="hero-grid">
          <div>
            <h4 className="case-label">Mobile, Web & Tab | Case Study</h4>
            <h1 className="project-title" id="page-title">
              InGate — Smart Access Control
            </h1>
            <p className="lead">
              InGate is an access-control system that simplifies and secures
              entry for residential & commercial properties — replacing manual
              visitor logging with smart verification & automated access.
            </p>
          </div>

          <div className="hero-visual">
            {/* Add mockup later */}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="project-overview-ingate" className="frame">
        <h2 className="section-title">Project Overview</h2>

        <div className="overview-grid-ingate">
          <aside className="overview-details-ingate">
            <dl className="details-list-ingate">
              <div><dt>Role</dt><dd>UI/UX Designer (End-to-End)</dd></div>
              <div><dt>Team</dt><dd>Designer • Backend • Frontend</dd></div>
              <div><dt>Duration</dt><dd>6 Weeks</dd></div>
              <div><dt>Tools</dt><dd>Figma, Miro, Notion</dd></div>
              <div><dt>Methods</dt>
                <dd>Research • IA • Flows • Wireframes • Testing</dd>
              </div>
            </dl>
          </aside>

          <div className="overview-text">
            <p>
              InGate enables controlled and secure property access without
              physical registers or unmanaged visitor entry. Security teams and
              residents can approve entries digitally.
            </p>

            <h4>Problem Statement</h4>
            <p className="small">
              Manual visitor tracking is time-consuming, unreliable, and lacks
              security validation — creating friction for residents & security staff.
            </p>

            <h4>Solution Summary</h4>
            <p className="small">
              A seamless access system enabling verified, trackable &
              permission-based entry — improving security confidence with a
              simple mobile interface.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="frame">
        <h2 className="section-title">Discovery & Research</h2>

        <div className="insights-row">
          <div>Untracked visitor movement</div>
          <div>Manual entry errors</div>
          <div>No digital verification</div>
          <div>Security dependency on guards</div>
          <ol className="badge-list">
            <li>Visitor movement was rarely recorded accurately, leading to security blind spots.</li>
            <li>Manual data entry created frequent errors and time delays at the gate.</li>
            <li>There was no consistent verification process for visitors and deliveries.</li>
            <li>Security outcomes depended largely on individual guards instead of a system.</li>
          </ol>


        </div>

        <div className="figure">
          <h4>User Journey</h4>
          <div className="problem-box-ingate">
            {/* <strong>Definition:</strong> */}
            <p>Mapping the journey helped identify friction at approval and verification touchpoints —
              especially during peak visitor hours. This guided us to design a faster,
              clearer approval workflow across resident, admin, and security roles.</p>
          </div>
          <img src={UJI} alt="User Journey" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="frame">
        <h2 className="section-title">UX Design Process</h2>

        <div className="figure">
          <h4>Card Sorting</h4>
          <div className="problem-box-ingate">
            {/* <strong>Definition:</strong> */}
            <p>I used card-sorting to structure the navigation so each role — resident,
              guard, or admin — only sees what’s relevant to them. This ensured clarity,
              minimized cognitive load, and avoided feature clutter.</p>
          </div>
          <img src={CSI} alt="Card Sorting" />
        </div>

        <div className="figure">
          <h4>Information Architecture</h4>
          <div className="problem-box-ingate">
            {/* <strong>Definition:</strong> */}
            <p>The IA defines clear pathways for Approvals, Visitor Logs, Security Alerts,
              and Settings — helping users complete key actions in under 3 taps.</p>
          </div>
          <img src={IAI} alt="Information Architecture" />
        </div>

        <div className="figure">
          <h4>User Flows</h4>
          <div className="problem-box-ingate">
            {/* <strong>Definition:</strong> */}
            <p>I designed role-specific flows so actions like granting access, logging visitors,
              and reviewing history happen smoothly without confusion or redundant steps.</p>
          </div>
          <img src={UFI} alt="User Flows" />
        </div>

        <div className="figure">
          <h4>Wireframes</h4>
          <div className="problem-box-ingate">
            {/* <strong>Definition:</strong> */}
            <p>Wireframes focused on speed and clarity: large CTAs, real-time states,
              and readable logs optimized for quick scanning by on-ground staff.</p>
          </div>
          <img src={WSI} alt="Wireframes" />
        </div>
      </section>

      {/* FINAL */}
      <section className="frame">
        <h2 className="section-title">Final Design</h2>
        <div className="problem-box-ingate">
          {/* <strong>Definition:</strong> */}
          <p>The final UI balances security and simplicity — bold actions for quick approvals,
            color-coded states for instant clarity,
            and accessible typography to support fast decision-making in real-world gate environments.</p>
        </div>
        <div className="final-design-figure">
          <img src={FDI} alt="Final Design" />
        </div>
      </section>


      {/* ========== 06_Impact ========== */}
      <section id="impact" className="frame impact-frame">
        <h2 className="section-title">Impact</h2>

        <div className="stats-row">
          <div className="stat-card1">
            <div className="stat-value">92%</div>
            <div className="stat-label">Successful access approvals without guard intervention</div>
          </div>
          <div className="stat-card2">
            <div className="stat-value">40%</div>
            <div className="stat-label">Reduction in gate-processing time</div>
          </div>
          <div className="stat-card3">
            <div className="stat-value">4.8/5</div>
            <div className="stat-label">Resident satisfaction with the approval experience</div>
          </div>
        </div>

        <blockquote className="testimonial">
          “InGate made the entry process smooth and reliable — residents approve visitors instantly and our team finally has a clear digital record.” — Security Supervisor
        </blockquote>
      </section>


      {/* LEARNINGS */}
      <section className="frame">
        <h2 className="section-title">Learnings</h2>
        <div className="three-spot">
          <div className="spot">Security must feel simple</div>
          <div className="spot">Speed matters at the gate</div>
          <div className="spot">Clear logs build accountability</div>
        </div>
        <div className="problem-box-ingate">
          {/* <strong>Definition:</strong> */}
          <p>This project strengthened my ability to design role-based systems, simplify complex workflows,
            and translate real-world operational needs into intuitive digital experiences.</p>
        </div>
      </section>

      <div className="footer-cta">
        <button
          className="next-project-btn"
          onClick={() => {
            window.location.href = "/case-study/investor";
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

export default InGateCaseStudyPage;
