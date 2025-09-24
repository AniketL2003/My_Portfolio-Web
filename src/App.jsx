import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from './components/Hero';
import Divider from './components/AutoScrollDivider';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import mixpanel from './mixpanel';
import './App.css';
import './style.css';
import './components/AutoScrollDivider.css';
import './components/Navbar.css';
import HR360Details from './components/HR360CaseStudyPage';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Divider />
    <Projects />
    <Contact />
  </>
);

// Page tracking wrapper
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
      {/* This tracks route changes */}
      <TrackPageView />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Projects />} />
        <Route path="/case-study/hr360" element={<HR360Details />} />
      </Routes>
    </Router>

    
  );
}

export default App;
