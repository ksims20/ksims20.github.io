import React from "react";
import TopContainer from "./TopNavBar";
import './App.css'

const Resume = () => {
    return(
        <div>
            <TopContainer />
            <div className="resume-container">
                <iframe
                    title="Resume"
                    className="resume-pdf"
                    src={`${process.env.PUBLIC_URL}/Kamren Sims CS Resume.pdf`}
                    width="1700px"
                    height="725px"
                    style={{ margin:'0 auto', display: 'block', border: '2px solid #58E0C0'}}
                />
            </div>
        </div>
     );
};

export default Resume;
