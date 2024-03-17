import React from "react";
import TopContainer from "./TopNavBar";
import './App.css'

const Home = () => {
  return (
    <div className="App">
       <TopContainer/>
      <div className="CenterContainer">
      <h1>HI THERE! I'M</h1>
      <h1 style={{ color: "white", fontSize: "52px"}}>Kamren Sims</h1>
      <h2 style={{fontSize:"32px"}}>A Charlotte-based coder on a journey to master Front-End Development</h2>
      <h4 style={{ color: "#8892B0"}}>Future Front-end developer | Junior Developer | Future UX/UI Designer </h4>
      </div>
    </div>
  );
};

export default Home;
