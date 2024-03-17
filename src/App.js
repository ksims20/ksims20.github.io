import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./about.js";
import Timeline from './timeline.js';
import Projects from './projects.js';
import Home from './home.js';
import Resume from './resume.js';

// const Home = () => <h1>Welcome to My Portfolio</h1>;

// const Timeline = () => <h1>Timeline Page</h1>;

// const About = () => <h1>About Page</h1>;

// const Projects = () => <h1>Projects Page</h1>;

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
