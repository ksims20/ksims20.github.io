// import React from "react";
// import { IonIcon } from "@ionic/react";
// import { homeOutline } from "ionicons/icons";
// import "./App.css";

// const TopContainer = () => {
//   return (
//     <div className="Topcontainer">
//       <span id="circle">
//         <a
//           href="https://www.linkedin.com/in/kamren-sims-845844258/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <p id="LetterK">K</p>{" "}
//         </a>
//       </span>
//       <nav className="navbar">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a href="/timeline.js">&lt;Timeline/&gt;</a>
//           </li>
//           <li className="nav-item">
//             <a href="projects.js">&lt;Projects/&gt;</a>
//           </li>
//           <li className="nav-item">
//             <a href="about.js">&lt;About/&gt;</a>
//           </li>
//           <li className="nav-item">
//             <a href="resume.js">&lt;Resume/&gt;</a>
//           </li>
//           <li className="nav-item">
//             <a id="Ion" href="/">
//               <IonIcon icon={homeOutline} />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default TopContainer;



import React from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';

const TopNavBar = () => {
  return (
    <div className="Topcontainer">
      

      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/timeline">&lt;Timeline/&gt;</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">&lt;Projects/&gt;</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">&lt;About/&gt;</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume">&lt;Resume/&gt;</Link>
          </li>
          <li className="nav-item">
            <Link id="Ion" to="/">
              <IonIcon icon={homeOutline} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNavBar;
