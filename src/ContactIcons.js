// ContactIcons.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoGithub, logoLinkedin, mailOutline } from 'ionicons/icons';

const ContactIcons = () => {
  const sendEmail = () => {
    window.location.href = "mailto:your.email@example.com"; // Replace with your actual email
  };

  return (
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
  );
};

export default ContactIcons;
