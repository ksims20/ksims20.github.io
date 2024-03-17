import React from "react";
import { IonIcon } from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import "./App.css";

const TopContainer = () => {
  return (
    <div className="Topcontainer">
      <span id="circle">
        <a
          href="https://www.linkedin.com/in/kamren-sims-845844258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p id="LetterK">K</p>{" "}
        </a>
      </span>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/timeline.js">&lt;Timeline/&gt;</a>
          </li>
          <li className="nav-item">
            <a href="projects.js">&lt;Projects/&gt;</a>
          </li>
          <li className="nav-item">
            <a href="about.js">&lt;About/&gt;</a>
          </li>
          <li className="nav-item">
            <a href="resume.js">&lt;Resume/&gt;</a>
          </li>
          <li className="nav-item">
            <a id="Ion" href="/">
              <IonIcon icon={homeOutline} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopContainer;
