import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import About from "./about.js";
import Timeline from './timeline.js';
import Projects from './projects.js';
import Home from './home.js';
import Resume from './resume.js';


const AppWrapper = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};

// Just in case the motion's logic does not work
const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
