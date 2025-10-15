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
      <title>Aniket Lamkhade | UI/UX Design Portfolio</title>
      <meta 
        name="description" 
        content="Portfolio of Aniket Lamkhade, a UI/UX designer creating user-centric and consistent digital experiences. Explore case studies like HR360, InGate, and more." 
      />
      <meta 
        name="keywords" 
        content="UI/UX designer, portfolio, product design, anisux, sventis, web design, app design, aniket lamkhade, hr360, ingate, design case studies, freelance designer, user experience, 
        user interface, digital design, interaction design, visual design, responsive design, prototyping, wireframing, user research, usability testing, design thinking, creative design, 
        branding, graphic design, design portfolio, design projects, design solutions, user-centered design, design trends, modern design, minimalist design, clean design, professional design, 
        innovative design, design inspiration, design process, design tools, adobe xd, figma, sketch, invision, ux/ui best practices, design systems, design collaboration, remote design, 
        freelance projects, design consultancy, design agency, sventis design, anisux portfolio, product design case studies, design for startups, design for businesses, digital product design, 
        mobile app design, web app design, user interface trends, user experience trends" 
      />
      <link rel="canonical" href="https://aniketlamkhade.vercel.app"/>
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
            "@context": "https://aniketlamkhade.vercel.app",
            "@type": "Person",
            "name": "Aniket Lamkhade",
            "jobTitle": "UI/UX Designer",
            "url": "https://aniketlamkhade.vercel.app",
            "sameAs": [
              "https://linkedin.com/in/aniketlamkhade",
              "https://behance.net/aniketlamkhade1",
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "myself"
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
                <link rel="canonical" href="https://aniketlamkhade.vercel.app/about" />
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
                <link rel="canonical" href="https://aniketlamkhade.vercel.app/contact" />
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
                <link rel="canonical" href="https://aniketlamkhade.vercel.app/case-study/hr360" />
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
