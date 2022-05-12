import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  
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
