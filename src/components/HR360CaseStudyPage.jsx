import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import "./HR360CaseStudyPage.css";


import hr360Hero from "../assets/hr360-hero.svg";
import hr360Preview from "../assets/SolutionImg.svg";
import persona1 from "../assets/persona1.svg";
import persona from "../assets/persona2.svg";
import sketches from "../assets/sketches.svg";
import IA from "../assets/InformationArchi.svg";
import HRFlow from "../assets/HRFlow.png";
import Wireframes from "../assets/WireframesHR360.svg";
import Iterations from "../assets/iterationall.svg";
import mockups from "../assets/mockups.svg";
import Color from "../assets/ColorHR360.svg";
import Contact from "./Contact";
import EP from "../assets/EmployeeProblem.png";
import HP from "../assets/HRProblem.png";
import UUH from "../assets/UnderstandingUser.png";

const HR360CaseStudyPage = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="case-study">

      {/* HERO (DO NOT ANIMATE) */}
      <section className="bm-hero">
        <p className="bm-eyebrow">HR360 • Case Study</p>

        <h1>Smarter HR. Stronger Productivity.</h1>

        <p className="bm-hero-sub">
          A unified HR platform designed to reduce operational friction by
          bringing attendance, payroll, leave, and performance workflows
          into one reliable system.
        </p>

        <div className="bm-hero-visual">
          <img src={hr360Hero} alt="HR360 preview" />
        </div>
      </section>

      {/* META */}
      <section className="bm-meta">
        <div><h4>Role</h4><p>UI/UX Designer</p></div>
        <div><h4>Team</h4><p>Designer • Dev • HR Consultant</p></div>
        <div><h4>Duration</h4><p>5 Weeks</p></div>
        <div><h4>Tools</h4><p>Figma, Miro, Notion</p></div>
      </section>

      {/* PROBLEM */}
      <motion.section
        className="bm-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Problem</h2>
        <p>
          HR teams relied on fragmented tools for attendance, payroll,
          leave, and employee records. Manual coordination increased
          errors, slowed approvals, and reduced visibility.
        </p>
        <img src={EP} alt="Employee Problem Visual" className="pm-image" />
        <img src={HP} alt="HR Problem Visual" className="pm-image" />
      </motion.section>

      {/* SOLUTION */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Solution</h2>
        <p>
          HR360 consolidates core HR operations into a single platform
          that automates repetitive tasks, improves transparency,
          and enables faster decision-making.
        </p>

        <img src={hr360Preview} alt="Solution UI" className="bm-img" />
      </motion.section>

      {/* UNDERSTANDING USERS */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Understanding the User</h2>
        <p>
          Research focused on HR managers responsible for daily operations,
          team leads approving requests at scale, and employees expecting
          clarity and real-time updates.
        </p>
        <img src={UUH} alt="Understanding User" className="uu-image" />
      </motion.section>

      {/* IA */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Information Architecture</h2>
        <p>
          I created an information architecture diagram to map out the
          structure of the HR360 platform, ensuring intuitive navigation
          and logical grouping of features.
        </p>
        <img src={IA} alt="Information Architecture" className="bm-image" />
      </motion.section>

      {/* USER FLOW */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>User Flow</h2>
        <p>
          The user flow diagram illustrates the steps HR managers and team
          leads take to complete key tasks within the platform, highlighting
          areas for efficiency improvements.
        </p>
        <img src={HRFlow} alt="User Flow" className="bm-image" />
      </motion.section>

      {/* PERSONA */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Persona</h2>

        <div className="bm-persona">
          <img src={persona1} alt="HR Manager Persona" />
          <div>
            <h3>Riya Sharma</h3>
            <p>
              HR Manager who needs faster approvals, reliable reporting,
              and centralized employee data to reduce daily overhead.
            </p>
          </div>
        </div>

        <div className="bm-persona">
          <img src={persona} alt="HR Manager Persona" />
          <div>
            <h3>Amit Verma</h3>
            <p>
              Team Lead who needs a single HR dashboard to manage team workflows efficiently.
            </p>
          </div>
        </div>
      </motion.section>

    {/* Sketches */}
    <motion.section className="bm-section" {...fadeProps}>
        <h2>Sketches</h2>
        <p>
              I started with several basic sketches of how I wanted the overall layout to be structured to begin the design stage.
            </p>
        <img src={sketches} alt="Sketches" className="bm-image" />
      </motion.section>

      {/* Wireframes */}
    <motion.section className="bm-section" {...fadeProps}>
        <h2>Wireframes</h2>
        <p>
              Once the final sketch layout was completed, it was time to incorporate those ideas into wireframes. To help visualize how the app should be structured, 
              I created low-fidelity wireframes for the main pages in Figma.
            </p>
        <img src={Wireframes} alt="Wireframes" className="bm-image" />
      </motion.section>

      {/* Iteration */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Iterations</h2>
        <p>
              After creating the wireframes, I made several iterations to improve the usability and visual hierarchy of the design. 
              This involved refining the layout, adjusting spacing, and enhancing the overall user experience based on feedback.
            </p>
        <img src={Iterations} alt="Final Design" className="bm-image" />
      </motion.section>

      {/* FINAL DESIGN */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Final Design</h2>
        <p>
              The final design incorporates all the feedback and iterations made during the design process. 
              The end result is a clean, user-friendly interface that effectively meets the needs of HR professionals.
            </p>
        <img src={mockups} alt="Final Design" className="bm-image" />
      </motion.section>

      {/*  DESIGN SYSTEM */}
      <motion.section className="bm-section" {...fadeProps}>
        <h2>Design System</h2>
        <p>
              To ensure consistency across the platform, I developed a design system that includes color schemes, typography, and UI components. 
              This system helps maintain a cohesive look and feel throughout the application.
            </p>
        <img src={Color} alt="Design System" className="bm-image" />
      </motion.section>

      {/* LEARNINGS */}
      <motion.section className="bm-section bm-takeaway" {...fadeProps}>
        <h2>Key Learnings</h2>
        <ul>
          <li>Clear information architecture matters more than feature depth</li>
          <li>Approval speed defines enterprise UX quality</li>
          <li>Design systems reduce long-term complexity</li>
        </ul>
      </motion.section>

      {/* FOOTER */}
      <div className="bm-footer">
        <button onClick={() => (window.location.href = "/case-study/ingate")}>
          Next Case Study →
        </button>
      </div>

    <Contact />

    </main>
  );
};

/* Shared animation props */
const fadeProps = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
};

export default HR360CaseStudyPage;
