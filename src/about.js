import React from "react";
import TopContainer from "./TopNavBar";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin, mailOutline } from "ionicons/icons";
import "./App.css";

const About = () => {
  const sendEmail = () => {
    window.location.href = "mailto:simkamr12@gmail.com";
  }

  return (
    <div>
      <TopContainer />
      <div className="about-container">
        <div className="about-left">
          <h1
            style={{
              color: "#CBD5F5",
              fontSize: "52px",
              textDecoration: "underline overline #CBD5F5",
            }}
          >
            About Me
          </h1>
          <p
          style={{
            fontSize:"18px",
            lineHeight:"2",
            color:"#58E0C0"
            
          }}>
            Hello! I'm <span className="whiteText">Kamren Sims</span>,and as a student from the University of North Carolina at Asheville, 
            I have graduated with a degree in <span className="whiteText">
            Computer science with a concentration in Information Systems. </span> My interest for <span className="whiteText">web
            development </span> started back in my Junior year of College "2022/2023", where I took <span className="whiteText">New Media 231 - Introductory Interactive Media</span>, and 
            <span className="whiteText"> CSCI 344 - Advanced Web Technology </span>, additionally <span className="whiteText">CSCI 338 - Software enginneering. </span> It was through these 
            classes that I've learned the term <span className="whiteText"> "Front-end Development / UX UI Design." </span> Since then my passion for designing 
            and developing web Applications has continued to grow. In the future I hope to hold the title: <span className="whiteText">"Front-end Developer." </span>
            </p>
            <p style={{ fontSize:"18px", paddingTop:"20px", paddingBottom:"40px"}}>
            Here are some of the few technologies that I've recently used to grow:
            
          </p>
            <ul className="arrow-list">
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Firebase</li>
                <li>Github</li>
                <li>Java</li>

            </ul>

        </div>
        <div className="about-right">
          <img
            src={`${process.env.PUBLIC_URL}/Kamren.JPG`}
            alt="Kamren Sims"
            className="about-photo"
          />
            <br></br>
            <h2 style={{color:'white'}}>Contact me: </h2>
            <div className="contact-icons">
            <a
            className="logo"
            style={{ fontSize: "44px" }}
            href="https://github.com/ksims20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={logoGithub} className="github-icon" />
          </a>

          <a
            className="logo"
            style={{ fontSize: "44px" }}
            href="https://www.linkedin.com/in/kamren-sims-845844258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={logoLinkedin} className="linkedin-icon" />
          </a>
          <div onClick={sendEmail} className="logo" style={{ fontSize: "44px" }}>
            <IonIcon icon={mailOutline} className="email-icon" />
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
