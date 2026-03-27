import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import "./InGateCaseStudy.css";

import IC from "../assets/InGateCover.svg";
import IHS from "../assets/SolutionIngate.svg";
import IAI from "../assets/Information-Architecture-InGate.svg";
import UFI from "../assets/User-Flow-InGate.svg";
import UJI from "../assets/User-Journey-InGate.svg";
import IUP from "../assets/IngatePersona.svg";
import CSI from "../assets/Card-Sorting-Ingate.svg";
import SI from "../assets/SketchesIngate.svg";
import WSI from "../assets/WireframesIngate.svg";
import FDI from "../assets/Final-Design-InGate.svg";
import IDS from "../assets/IngateDesignSystem.svg";
import VM from "../assets/VisitorProblem.png";
import DRV from "../assets/Discovery&ResearchV.png";

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

      {/* HERO */}
      <section className="bm-hero ingate-hero">
        <p className="bm-eyebrow">InGate • Case Study</p>

        <h1>Smart access control for secure properties</h1>

        <p className="bm-hero-sub">
          InGate is a digital access-control system that replaces manual visitor
          registers with verified, permission-based entry.
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
          guard-dependent decisions. This resulted in inaccurate logs,
          security blind spots, and friction for residents.
        </p>
        <img src={VM} alt="Visitor Problem" className="vm-img"/>
      </motion.section>

      {/* SOLUTION */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Solution</h2>
        <p>
          InGate enables verified, trackable, and permission-based access
          through a simple digital workflow.
        </p>
        <img src={IHS} alt="Solution" className="bm-img"/>
      </motion.section>

      {/* DISCOVERY */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Discovery & Research</h2>

        <ul className="bm-list">
          <li>Visitor movement rarely tracked accurately</li>
          <li>Manual entry created errors and delays</li>
          <li>No standardized verification process</li>
          <li>Security depended on individual guards</li>
        </ul>

        <img src={DRV} alt="Discovery Research" className="vm-img"/>
      </motion.section>

      {/* USER JOURNEY */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>User Journey</h2>
        <img src={UJI} alt="User Journey" className="bm-image" />
      </motion.section>

      {/* CARD SORTING */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Card Sorting</h2>
        <img src={CSI} alt="Card Sorting" className="bm-image" />
      </motion.section>

      {/* IA */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Information Architecture</h2>
        <img src={IAI} alt="Information Architecture" className="bm-image" />
      </motion.section>

      {/* USER FLOW */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>User Flow</h2>
        <img src={UFI} alt="User Flow" className="bm-image" />
      </motion.section>

      {/* PERSONA */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>User Persona</h2>
        <img src={IUP} alt="User Persona" className="bm-image" />
      </motion.section>

      {/* SKETCHES */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Sketches</h2>
        <img src={SI} alt="Sketches" className="bm-image" />
      </motion.section>

      {/* WIREFRAMES */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Wireframes</h2>
        <img src={WSI} alt="Wireframes" className="bm-image" />
      </motion.section>

      {/* FINAL DESIGN */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Final Design</h2>
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

      {/* DESIGN SYSTEM */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Design System</h2>
        <img src={IDS} alt="Design System" className="bm-image" />
      </motion.section>

      {/* LEARNINGS */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Key Learnings</h2>
        <ul>
          <li>Security must feel simple to be effective</li>
          <li>Speed is critical in physical access systems</li>
          <li>Clear logs build long-term accountability</li>
        </ul>
      </motion.section>

      {/* FOOTER */}
      <div className="bm-footer">
        <button onClick={() => (window.location.href = "https://www.anisux.com")}>
          Back to Home →
        </button>
      </div>

    </main>
  );
};

export default InGateCaseStudyPage;