import { FaHome, FaMailBulk, FaPhone, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">

            <div className="location">
                <FaHome size={20} style={{color: "#FFF", marginRight: "2rem"}}/>
                <div>
                  <p>Mahalle Sokak No</p>
                  <p>İlçe / Şehir</p>
                </div>
            </div>

            <div className="phone">
              <h4>
                <FaPhone size={20} style={{color: "#FFF", marginRight: "2rem"}}/>
                0xxx-xxx-xxxx
              </h4>
            </div>

            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{color: "#FFF", marginRight: "2rem"}}/>
                info@gmail.com
              </h4>
            </div>

        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>I am Selim Tekin. I am a junior software developer. I enjoy discussing new projects and design challenges.</p>
          <div className="social">
            <FaInstagram size={30} style={{color: "#FFF", marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{color: "#FFF", marginRight: "1rem"}}/>
            <FaGithub size={30} style={{color: "#FFF", marginRight: "1rem"}}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
