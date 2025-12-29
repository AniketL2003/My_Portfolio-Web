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
        </div>

        <div className="figure">
          <h4>User Journey</h4>
          <img src={UJI} alt="User Journey" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="frame">
        <h2 className="section-title">UX Design Process</h2>

        <div className="figure">
          <h4>Card Sorting</h4>
          <img src={CSI} alt="Card Sorting" />
        </div>

        <div className="figure">
          <h4>Information Architecture</h4>
          <img src={IAI} alt="Information Architecture" />
        </div>

        <div className="figure">
          <h4>User Flows</h4>
          <img src={UFI} alt="User Flows" />
        </div>

        <div className="figure">
          <h4>Wireframes</h4>
          <img src={WSI} alt="Wireframes" />
        </div>
      </section>

      {/* FINAL */}
      <section className="frame">
        <h2 className="section-title">Final Design</h2>
        <p className="small">
          Smart access app interface for residents, security guards & admins.
        </p><div className="final-design-figure">
        <img src={FDI} alt="Final Design" />
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="frame">
        <h2 className="section-title">Learnings</h2>
        <div className="three-spot">
          <div className="spot">Security first</div>
          <div className="spot">Simple approvals</div>
          <div className="spot">Clear logs</div>
        </div>
      </section>

    </main>
  );
};

export default InGateCaseStudyPage;
