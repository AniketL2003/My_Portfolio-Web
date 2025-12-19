import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/AutoScrollDivider";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import HR360Details from "./components/HR360CaseStudyPage";
import InGate from "./components/InGateCaseStudy";
import InvestorCaseStudy from "./components/InvestorCaseStudy";
import OBACaseStudy from "./components/OBACaseStudy";
import ErrorBoundary from "./components/ErrorBoundary";
import NameCursor from "./components/NameCursor";

import mixpanel from "./mixpanel";
import { initLenis } from "./lib/lenis";

import "./App.css";
import "./style.css";
import "./components/AutoScrollDivider.css";
import "./components/Navbar.css";

/* ----------------------------------
   Home Page Layout
---------------------------------- */
const HomePage = () => (
  <>
    <Helmet>
      <title>Aniket Lamkhade | UI/UX Design Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Aniket Lamkhade, a UI/UX designer creating user-centric and consistent digital experiences. Explore case studies like HR360, InGate, and more."
      />
      <link rel="canonical" href="https://aniketlamkhade.vercel.app" />
    </Helmet>

    <Hero />
    <Divider />
    <Projects />
    <Contact />
  </>
);

/* ----------------------------------
   Page View Tracking (Mixpanel)
---------------------------------- */
function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    mixpanel.track("Page Viewed", {
      page: location.pathname + location.hash,
    });
  }, [location]);

  return null;
}

/* ----------------------------------
   Main App Component
---------------------------------- */
export default function App() {
  // Initialize Lenis (smooth scroll)
  useEffect(() => {
    const lenis = initLenis?.();
    return () => lenis && lenis.destroy?.();
  }, []);

  return (
    <>
      <ErrorBoundary>
        {/* 🔥 Global Custom Cursor */}
        <NameCursor />

        <Navbar />
        <TrackPageView />

        {/* Global SEO Schema */}
        <Helmet>
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aniket Lamkhade",
              "jobTitle": "UI/UX Designer",
              "url": "https://aniketlamkhade.vercel.app",
              "sameAs": [
                "https://linkedin.com/in/aniketlamkhade",
                "https://behance.net/aniketlamkhade1"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Independent"
              }
            }
          `}</script>
        </Helmet>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Me | Aniket Lamkhade – UI/UX Designer</title>
                  <meta
                    name="description"
                    content="Learn more about Aniket Lamkhade, a passionate UI/UX designer crafting meaningful digital experiences."
                  />
                  <link
                    rel="canonical"
                    href="https://aniketlamkhade.vercel.app/about"
                  />
                </Helmet>
                <AboutSection />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact | Aniket Lamkhade – UI/UX Designer</title>
                  <meta
                    name="description"
                    content="Get in touch with Aniket Lamkhade for collaborations, projects, or freelance opportunities in UI/UX design."
                  />
                  <link
                    rel="canonical"
                    href="https://aniketlamkhade.vercel.app/contact"
                  />
                </Helmet>
                <Contact />
              </>
            }
          />

          <Route
            path="/case-study/hr360"
            element={
              <>
                <Helmet>
                  <title>HR360 Case Study | Aniket Lamkhade</title>
                  <meta
                    name="description"
                    content="Detailed case study of HR360 – a UI/UX solution for simplifying HR management."
                  />
                  <link
                    rel="canonical"
                    href="https://aniketlamkhade.vercel.app/case-study/hr360"
                  />
                </Helmet>
                <HR360Details />
              </>
            }
          />

          <Route
            path="/case-study/ingate"
            element={
              <>
                <Helmet>
                  <title>InGate Case Study | Aniket Lamkhade</title>
                  <meta
                    name="description"
                    content="Detailed case study of InGate – a UI/UX solution for visitor management."
                  />
                  <link
                    rel="canonical"
                    href="https://aniketlamkhade.vercel.app/case-study/ingate"
                  />
                </Helmet>
                <InGate />
              </>
            }
          />

          <Route
            path="/case-study/investor"
            element={
              <>
                <Helmet>
                  <title>Investor Case Study | Aniket Lamkhade</title>
                  <meta
                    name="description"
                    content="Detailed case study of Investor – real estate investment platform UI/UX."
                  />
                  <link
                    rel="canonical"
                    href="https://aniketlamkhade.vercel.app/case-study/investor"
                  />
                </Helmet>
                <InvestorCaseStudy />
              </>
            }
          />

          <Route
            path="/case-study/oba"
            element={
              <>
                <Helmet>
                  <title>OBA Case Study | Aniket Lamkhade</title>
                  <meta
                    name="description"
                    content="Detailed case study of OBA – order & business automation UI/UX solution."
                  />
                  <link
                    rel="canonical"
                    href="https://aniketlamkhade.vercel.app/case-study/oba"
                  />
                </Helmet>
                <OBACaseStudy />
              </>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
