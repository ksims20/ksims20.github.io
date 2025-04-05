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
            fontSize:"22px",
            lineHeight:"2",
            color:"#58E0C0"
            
          }}>
            Hello! I'm <span className="whiteText">Kamren Sims</span>,a recent Computer Science graduate with a passion for front-end development and clean, accessible design.  My interest in
             <span className="whiteText"> Web Development </span> began during my junior year of College (2022/2023), where I took <span className="whiteText">New Media 231 - Introductory Interactive Media</span>, 
            <span className="whiteText"> CSCI 344 - Advanced Web Technology </span>, and<span className="whiteText"> CSCI 338 - Software enginneering. </span> Through these courses, I discovered the world
            of <span className="whiteText"> Front-end Development / UX UI Design. </span> Since then, my passion for designing 
            and building web Applications has continued to grow. I've led personal projects from design to deployment
            and am always looking for new ways to improve my skills and contribute to impactful software. 
            <span className="whiteText"> Currently, I'm seeking a  <b>Software Engineer I </b> or <b>Front-End Developer </b> role </span> where I can grow, collaborate, and build meaningful projects.
            </p>
            <p style={{ fontSize:"24px", paddingTop:"20px", paddingBottom:"40px"}}>
            Here are some of the technologies I've been working with recently:
          </p>

          <ul style={{ fontSize: "20px", lineHeight: "2.2", marginTop: "20px", marginBottom: "40px", color:"#58E0C0" }}>
              <li><strong style={{ color: "white" }}>Languages:</strong> Java, JavaScript (ES6+), HTML5, CSS3, TypeScript, PHP</li>
              <li><strong style={{ color: "white" }}>Frameworks & Libraries:</strong> React, React Native, Node.js, Prisma</li>
              <li><strong style={{ color: "white" }}>Cloud & Databases:</strong> Firebase, Google Cloud, MySQL</li>
              <li><strong style={{ color: "white" }}>Tools:</strong> Git & GitHub, NPM, Docker, Jira, Figma, Adobe Suite</li>
              <li><strong style={{ color: "white" }}>Focus:</strong> Front-End Development, UX/UI Design, API Integration</li>
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
