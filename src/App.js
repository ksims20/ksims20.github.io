import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./about.js";
import Timeline from './timeline.js';
import Projects from './projects.js';
import Home from './home.js';
import Resume from './resume.js';


const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/timeline" element={<Timeline/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          </Routes>
    </Router>
  );
};

export default App;
