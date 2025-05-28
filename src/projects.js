import React from "react";
import TopContainer from "./TopNavBar";
import AntCards from "./AntCards";
import ContactIcons from './ContactIcons';
import { motion } from 'framer-motion';


const Projects = () => {
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
     <AntCards/>
     <ContactIcons />
     </div>
     </motion.div>
  );
};

export default Projects;
