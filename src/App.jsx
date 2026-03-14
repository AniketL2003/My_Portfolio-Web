import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HR360CaseStudyPage from "./components/HR360CaseStudyPage";
import InGateCaseStudyPage from "./components/InGateCaseStudy";

import "./App.css";
import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<HR360CaseStudyPage />} />

        {/* InGate case study */}
        <Route path="/ingate" element={<InGateCaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;