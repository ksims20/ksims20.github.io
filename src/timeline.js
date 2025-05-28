import React from "react";
import TopContainer from "./TopNavBar.js";
import ReactTime from "./ReactTimeline.js";
import './App.css'
import ContactIcons from './ContactIcons';
import { motion } from 'framer-motion';

const Timeline = () => {
    return(
        <motion.div
              className="App"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
        <div>
        <TopContainer/>
        <h1 id="TimeHeader">My Coding Journey in a Timeline</h1>
        <div className="CenterContainerTime">
        <ReactTime/>

        <ContactIcons />
            </div>
        </div>
        </motion.div>
     );
};

export default Timeline;
