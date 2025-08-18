import React from 'react';
import Hero from './components/Hero';
import Divider from './components/AutoScrollDivider';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import './style.css';
import './components/AutoScrollDivider.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from './components/AboutSection'; // About page

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Divider />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
