import React from "react";
import TopContainer from "./TopNavBar.js";
import ReactTime from "./ReactTimeline.js";
import './App.css'
import ContactIcons from './ContactIcons';

const Timeline = () => {
    return(
        <div>
        <TopContainer/>
        <h1 id="TimeHeader">My Coding Journey in a Timeline</h1>
        <div className="CenterContainerTime">
        <ReactTime/>

        <ContactIcons />
            </div>
        </div>
     );
};

export default Timeline;
