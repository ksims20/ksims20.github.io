import React from "react";
import TopContainer from "./TopNavBar";
import './App.css'
import ContactIcons from './ContactIcons';

const Resume = () => {
    return(
        <div>
            <TopContainer />
            <div className="resume-container">
                <iframe
                    title="Resume"
                    className="resume-pdf"
                    src={`${process.env.PUBLIC_URL}/Kamren Sims CS Resume Revised.pdf`}
                    style={{ 
                        margin:'0 auto', 
                        width: '100%',
                        height: '80vh',
                        display: 'block', 
                        border: '2px solid #58E0C0'}}
                />
                
                <a
                 href={`${process.env.PUBLIC_URL}/Kamren Sims CS Resume Revised.pdf`}
                 download="Kamren_Sims_Resume"
                 className="download-link"
                 style={{ color: '#58E0C0', fontSize: '18px', marginTop: '20px', display: 'block', textAlign: 'center' }}
                >
                    Download My Resume
                </a>

                <ContactIcons />
            </div>
        </div>
     );
};

export default Resume;
