import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/in/sabesan96/",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/sabesansathananthan",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
    {
      SocialMediaName: "Medium",
      ProfileLink: "https://medium.com/@sabesan96",
      fontAwesomeIconName: "fab fa-medium",
      OnMouseOverColor: "#12100e",
    },
    {
      SocialMediaName: "StackOverFlow",
      ProfileLink:
        "https://stackoverflow.com/users/8629258/sathananthan-sabesan",
      fontAwesomeIconName: "fab fa-stack-overflow",
      OnMouseOverColor: "#f48024",
    },
    {
      SocialMediaName: "Gmail",
      ProfileLink: "mailto:sabesan996@gmail.com",
      fontAwesomeIconName: "far fa-envelope",
      OnMouseOverColor: "#D44638",
      _comment: "OnMouseOverColor for yahoo mail: #720e9e",
    },
    {
      SocialMediaName: "WhatsApp",
      ProfileLink: "https://wa.me/94770711017",
      fontAwesomeIconName: "fab fa-whatsapp",
      OnMouseOverColor: "#25d366",
    },
    {
      SocialMediaName: "Telegram",
      ProfileLink: "https://telegram.me/TheSabesan",
      fontAwesomeIconName: "fab fa-telegram",
      OnMouseOverColor: "#0088cc",
    },
    {
      SocialMediaName: "Twitter",
      ProfileLink: "https://twitter.com/TheSabesan",
      fontAwesomeIconName: "fab fa-twitter",
      OnMouseOverColor: "#1da1f2",
    },
    {
      SocialMediaName: "Facebook",
      ProfileLink: "https://www.facebook.com/sathananthan.sabesan",
      fontAwesomeIconName: "fab fa-facebook-f",
      OnMouseOverColor: "#1877f2",
    },
  ];

  return (
    <React.Fragment>
      
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "50px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "Montserrat"
          }}
        >
          COVID-19 data via {" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid API
          </a>
        </h6>
      </div>
      
      
    </React.Fragment>
  );
};

export default Footer;
