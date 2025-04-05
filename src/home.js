import React from "react";
import TopContainer from "./TopNavBar";
import './App.css'
import ContactIcons from './ContactIcons';

const Home = () => {
  return (
    <div className="App">
       <TopContainer/>
      <div className="CenterContainer">
      <h1>HI THERE! I'M</h1>
      <h1 style={{ color: "white", fontSize: "52px"}}>Kamren Sims</h1>
      <h2 style={{fontSize:"32px"}}>A Charlotte-based coder on a journey to master Front-End Development</h2>
      <h4 style={{ color: "#8892B0"}}>Front-End Developer | Software Engineer  </h4>

      <ContactIcons />
      </div>
    </div>
  );
};

export default Home;
