import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import ice1 from "../assets/ice1.avif";
import ice2 from "../assets/ice2.avif";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am Selim Tekin. I am a student in the university and I'm PHP developer.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={ice1} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={ice2} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
