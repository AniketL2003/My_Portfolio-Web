import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hero from './components/Hero';
import Divider from './components/AutoScrollDivider';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import HR360Details from './components/HR360CaseStudyPage';
import mixpanel from './mixpanel';

import './App.css';
import './style.css';
import './components/AutoScrollDivider.css';
import './components/Navbar.css';

// ✅ Home Page Component
const HomePage = () => (
  <>
    <Helmet>
      <title>Aniket Lamkhade | UI/UX Designer Portfolio</title>
      <meta 
        name="description" 
        content="Portfolio of Aniket Lamkhade, a UI/UX designer creating user-centric and consistent digital experiences. Explore case studies like HR360, RetroRing, and more." 
      />
      <meta 
        name="keywords" 
        content="UI/UX designer, portfolio, product design, anisux, sventis, web design, app design" 
      />
      <link rel="canonical" href="https://anisux.com/" />
    </Helmet>

    <Hero />
    <Divider />
    <Projects />
    <Contact />
  </>
);

// ✅ Page tracking wrapper
function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    mixpanel.track("Page Viewed", {
      page: location.pathname,
    });
  }, [location]);

  return null; // it doesn’t render anything
}

function App() {
  return (
    <Router>
      <Navbar />
      <TrackPageView />

      {/* ✅ Global Schema for Portfolio */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aniket Lamkhade",
            "jobTitle": "UI/UX Designer",
            "url": "https://anisux.com",
            "sameAs": [
              "https://linkedin.com/in/aniketlamkhade",
              "https://behance.net/anisux"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Sventis"
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
                <link rel="canonical" href="https://anisux.com/about" />
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
                <link rel="canonical" href="https://anisux.com/contact" />
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
                <title>HR360 Case Study | UI/UX Design by Aniket Lamkhade</title>
                <meta 
                  name="description" 
                  content="Detailed case study of HR360 – a UI/UX solution for simplifying HR management, designed by Aniket Lamkhade." 
                />
                <link rel="canonical" href="https://anisux.com/case-study/hr360" />
              </Helmet>
              <HR360Details />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
