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
          <Route path="/timeline.js" element={<Timeline/>} />
          <Route path="/about.js" element={<About/>} />
          <Route path="/projects.js" element={<Projects/>} />
          <Route path="/resume.js" element={<Resume/>} />
          </Routes>
    </Router>
  );
};

export default App;
