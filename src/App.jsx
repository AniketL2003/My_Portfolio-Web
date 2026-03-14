import React from "react";
import { Routes, Route } from "react-router-dom";

import HR360CaseStudyPage from "./components/HR360CaseStudyPage";
import InGateCaseStudy from "./components/InGateCaseStudy";

import "./App.css";
import "./style.css";

const HomePage = () => {
  return (
    <div>
      Home Page
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hr360" element={<HR360CaseStudyPage />} />
      <Route path="/ingate" element={<InGateCaseStudy />} />
    </Routes>
  );
}

export default App;