import React, { useState, useEffect } from "react";
import TopContainer from "./TopNavBar";
import './App.css';
import ContactIcons from './ContactIcons';
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Duration of typewriter animation
    const typingDuration = 2500;

    // Fade out starts after timeout
    const fadeDelayTimer = setTimeout(() => {
      setFadeOut(true);
    }, typingDuration);

    // After fade out finishes, hide preloader
    const fadeDuration = 1000;
    const totalDelay = typingDuration + fadeDuration;

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, totalDelay);

    return () => {
      clearTimeout(fadeDelayTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="typewriter">Initializing &lt;Kamren's Portfolio/&gt;</h1>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <>
          <TopContainer />
          <div className="CenterContainer">
            <h1>HI THERE! I'M</h1>
            <h1 style={{ color: "white", fontSize: "52px" }}>Kamren Sims</h1>
            <h2 style={{ fontSize: "32px" }}>
              A Charlotte-based coder on a journey to master Full Stack Development
            </h2>
            <h4 style={{ color: "#8892B0" }}>
              Full Stack Engineer | Software Engineer
            </h4>
            <ContactIcons />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;