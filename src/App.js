import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Home/Hero";
import AIDetection from "./components/Research/AIDetection";
import TeachingStrategies from "./components/Research/TeachingStrategies";
import FutureImplications from "./components/Research/FutureImplications";
import Footer from "./components/Navigation/Footer";
import DetectionToolsDetail from "./components/Details/DetectionToolsDetail";
import WritingAnalysisDetail from "./components/Details/WritingAnalysisDetail";
import TeachingStrategiesDetail from "./components/Details/TeachingStrategiesDetail.js";
import FutureImplicationsDetail from "./components/Details/FutureImplicationsDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <div className="container mx-auto px-4 py-8">
                  <AIDetection />

                  <TeachingStrategies />
                  <FutureImplications />
                </div>
              </main>
            }
          />
          <Route path="/detection-tools" element={<DetectionToolsDetail />} />
          <Route path="/writing-analysis" element={<WritingAnalysisDetail />} />
          <Route
            path="/teaching-strategies"
            element={<TeachingStrategiesDetail />}
          />
          <Route
            path="/future-implications"
            element={<FutureImplicationsDetail />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
