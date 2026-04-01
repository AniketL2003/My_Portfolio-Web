import React from "react";
import { Routes, Route } from "react-router-dom";

import HR360CaseStudyPage from "./components/HR360CaseStudyPage";
import InGateCaseStudy from "./components/InGateCaseStudy";

import "./App.css";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InGateCaseStudy />} />
      <Route path="/hr360" element={<HR360CaseStudyPage />} />
    </Routes>
  );
}

export default App;