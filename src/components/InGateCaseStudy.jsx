import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import "./InGateCaseStudy.css";

import IC from "../assets/InGateCover.svg";
import IHS from "../assets/SolutionIngate.svg";
import IAI from "../assets/Information-Architecture-InGate.svg";
import UFI from "../assets/User-Flow-InGate.svg";
import UJI from "../assets/User-Journey-InGate.svg";
import CSI from "../assets/Card-Sorting-Ingate.svg";
import SI from "../assets/SketchesIngate.svg";
import WSI from "../assets/WireframesIngate.svg";
import FDI from "../assets/Final-Design-InGate.svg";

const fadeProps = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
};

const InGateCaseStudyPage = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="case-study">

      {/* HERO (no animation) */}
      <section className="bm-hero ingate-hero">
        <p className="bm-eyebrow">InGate • Case Study</p>

        <h1>Smart access control for secure properties</h1>

        <p className="bm-hero-sub">
          InGate is a digital access-control system that replaces manual visitor
          registers with verified, permission-based entry for residential and
          commercial properties.
        </p>

        <div className="bm-hero-visual">
          <img src={IC} alt="InGate Cover" />
        </div>
      </section>

      {/* META */}
      <section className="bm-meta">
        <div><h4>Role</h4><p>UI/UX Designer</p></div>
        <div><h4>Team</h4><p>Designer • Frontend • Backend</p></div>
        <div><h4>Duration</h4><p>6 Weeks</p></div>
        <div><h4>Tools</h4><p>Figma, Miro, Notion</p></div>
      </section>

      {/* PROBLEM */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Problem</h2>
        <p>
          Visitor access was managed manually through physical registers and
          guard-dependent decisions. This resulted in inaccurate logs, security
          blind spots, and friction for residents and security teams.
        </p>
      </motion.section>

      {/* SOLUTION */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Solution</h2>
        <p>
          InGate enables verified, trackable, and permission-based access through
          a simple digital workflow—giving residents control while improving
          security accountability.
        </p>
        <img src={IHS} alt="Solution" className="bm-img"/>
      </motion.section>

      {/* DISCOVERY */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Discovery & Research</h2>

        <ul className="bm-list">
          <li>Visitor movement was rarely tracked accurately</li>
          <li>Manual entry created frequent errors and delays</li>
          <li>No standardized verification process existed</li>
          <li>Security outcomes depended on individual guards</li>
        </ul>
      </motion.section>

      {/* USER JOURNEY */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>User Journey</h2>
        <p>
          Mapping the journey exposed friction during approval and verification,
          especially at peak hours—guiding us to design faster, clearer workflows
          across resident, admin, and security roles.
        </p>
        <img src={UJI} alt="User Journey" className="bm-image" />
      </motion.section>

      {/* CARD SORTING */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Card Sorting</h2>
        <p>
          Card sorting helped structure navigation so each role only sees what is
          relevant—reducing cognitive load and avoiding feature clutter.
        </p>
        <img src={CSI} alt="Card Sorting" className="bm-image" />
      </motion.section>

      {/* IA */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Information Architecture</h2>
        <p>
          The IA defines clear paths for approvals, visitor logs, alerts, and
          settings—allowing key actions to be completed in under three taps.
        </p>
        <img src={IAI} alt="Information Architecture" className="bm-image" />
      </motion.section>

      {/* USER FLOWS */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>User Flows</h2>
        <p>
          Role-specific flows ensure that granting access, logging visitors, and
          reviewing history happens smoothly without redundant steps.
        </p>
        <img src={UFI} alt="User Flows" className="bm-image" />
      </motion.section>

      {/* Sketches */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Sketches</h2>
        <p>
          Sketches focused on speed and clarity—large CTAs, readable logs, and
          real-time states optimized for on-ground security staff.
        </p>
        <img src={SI} alt="Wireframes" className="bm-image" />
      </motion.section>

      {/* WIREFRAMES */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Wireframes</h2>
        <p>
          Wireframes focused on speed and clarity—large CTAs, readable logs, and
          real-time states optimized for on-ground security staff.
        </p>
        <img src={WSI} alt="Wireframes" className="bm-image" />
      </motion.section>

      {/* FINAL DESIGN */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Final Design</h2>
        <p>
          The final UI balances security and simplicity with bold actions,
          color-coded states, and accessible typography to support fast,
          real-world decision-making at the gate.
        </p>
        <img src={FDI} alt="Final Design" className="bm-image" />
      </motion.section>

      {/* IMPACT */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Impact</h2>

        <div className="bm-impact">
          <div>
            <strong>92%</strong>
            <span>Access approvals without guard intervention</span>
          </div>
          <div>
            <strong>40%</strong>
            <span>Reduction in gate processing time</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>Resident satisfaction</span>
          </div>
        </div>
      </motion.section>

      {/* LEARNINGS */}
      <motion.section className="bm-section bm-takeaway" {...fadeProps}>
        <h2>Key Learnings</h2>
        <ul>
          <li>Security must feel simple to be effective</li>
          <li>Speed is critical in physical access systems</li>
          <li>Clear logs build long-term accountability</li>
        </ul>
      </motion.section>

      {/* FOOTER */}
      <div className="bm-footer">
        <button onClick={() => (window.location.href = "/case-study/investor")}>
          Next Case Study →
        </button>
      </div>

    </main>
  );
};

export default InGateCaseStudyPage;
