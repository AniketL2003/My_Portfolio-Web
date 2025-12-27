import React from "react";
import "./InGateCaseStudy.css";

// import ingateHero from "../assets/ingate-hero.svg"; // add later if needed

const InGateCaseStudyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study" aria-labelledby="page-title">

      {/* ================== 01 — HERO STRIP ================== */}
      <section className="ingate-hero-strip">
        <div className="ingate-hero-container">

          <div className="hero-copy">
            <h4 className="case-label">Mobile, Web & Tab | Case Study</h4>

            <h1 className="project-title" id="page-title">
              InGate — Smart Access Control
            </h1>

            <p className="lead">
              InGate is an access-control system that simplifies and
              secures entry for residential & commercial properties — replacing
              manual visitor logging with smart verification & automated access.
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-mockup">
              {/* <img src={ingateHero} alt="InGate UI Mockups" /> */}
            </div>
          </div>

        </div>
      </section>

      {/* ================== 02 — PROJECT OVERVIEW ================== */}
      <section id="project-overview-ingate" className="frame-overview-frame">
        <h2 className="section-title">Project Overview</h2>

        <div className="overview-grid-ingate">

          <aside className="overview-details-ingate">
            <dl className="details-list-ingate">

              <div>
                <dt>Role</dt>
                <dd>UI/UX Designer (End-to-End)</dd>
              </div>

              <div>
                <dt>Team</dt>
                <dd>Designer • Backend • Frontend</dd>
              </div>

              <div>
                <dt>Duration</dt>
                <dd>6 Weeks</dd>
              </div>

              <div>
                <dt>Tools</dt>
                <dd>Figma, Miro, Notion</dd>
              </div>

              <div>
                <dt>Methods</dt>
                <dd>Research • IA • Flows • Wireframes • Usability Testing</dd>
              </div>

            </dl>
          </aside>

          <div className="overview-text">
            <p>
              InGate enables controlled and secure property access without physical
              registers or unmanaged visitor entry. Security teams and residents can
              approve entries digitally.
            </p>

            <h4>Problem Statement</h4>
            <p className="small">
              Manual visitor tracking is time-consuming, unreliable, and lacks security
              validation — creating friction for residents & security staff.
            </p>

            <h4>Solution Summary</h4>
            <p className="small">
              Design a seamless access system enabling verified,
              trackable & permission-based entry — improving security confidence
              with a simple mobile interface.
            </p>
          </div>

        </div>
      </section>

      {/* ================== 03 — DISCOVERY & RESEARCH ================== */}
      <section id="discovery-research" className="frame discovery-frame">
        <h2 className="section-title">Discovery & Research</h2>

        <div className="subsection user-research">
          <h3>User Research</h3>

          <p className="small">
            Interviews with residents, security guards & facility managers to
            understand daily challenges in access control.
          </p>

          <div className="insights-row">
            <div>Untracked visitor movement</div>
            <div>Manual entry errors</div>
            <div>No digital verification</div>
            <div>Security dependency on guards</div>
          </div>
        </div>
      </section>

      {/* ================== 04 — DESIGN PROCESS ================== */}
      <section id="design-process" className="frame process-frame">
        <h2 className="section-title">UX Design Process</h2>

        <div className="subsection-flows">
          <h3>User Flows</h3>
          <p>working...</p>
        </div>

        <div className="subsection-wireframes">
          <h3>Wireframes</h3>
          <p>working...</p>
        </div>

        <div className="subsection-prototype">
          <h3>Prototype</h3>

          <p className="small">
            Interactive prototype validating access journeys.
          </p>
        </div>
      </section>

      {/* ================== 05 — FINAL UI ================== */}
      <section id="final-design" className="frame final-frame">
        <h2 className="section-title">Final Design</h2>

        <p className="small">
          Smart access app interface for residents, security guards & admins.
        </p>
      </section>

      {/* ================== 06 — IMPACT ================== */}
      <section id="impact" className="frame impact-frame">
        <h2 className="section-title">Impact</h2>

        <div className="stats-row">

          <div className="stat-card1">
            <div className="stat-value">—</div>
            <div className="stat-label">Security Confidence</div>
          </div>

          <div className="stat-card2">
            <div className="stat-value">—</div>
            <div className="stat-label">Access Approval Time</div>
          </div>

          <div className="stat-card3">
            <div className="stat-value">—</div>
            <div className="stat-label">System Adoption</div>
          </div>

        </div>
      </section>

      {/* ================== 07 — LEARNINGS ================== */}
      <section id="learnings" className="frame learnings-frame">
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
