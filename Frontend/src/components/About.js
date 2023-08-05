import React from 'react';
import AboutImg from '../assets/About.png';

export default function About() {
  return (
    <div id="about">
      <div className="about-section">
        <div className="about-section-text">
          <h1 style={{ backgroundColor: '#f0e7de' }}>About our project</h1>
          <ul>
            <li>Who we are</li>
            <p
              style={{
                backgroundColor: '#f0e7de',
                fontFamily: 'Epilogue',
                lineHeight: 1.5,
                fontSize: '1rem',
                padding: '0px 12px 25px 12px'
              }}>
              Team EcoBots is comprised of five students from across the US.<br></br>From
              universities like MIT etc etc etc
            </p>
            <hr></hr>
            <li>SureStart x MIT Creatathon</li>
            <hr></hr>
            <li>A.I. Powered by YOLOv8</li>
            <hr></hr>
          </ul>
        </div>
        <div className="about-img">
          <img src={AboutImg} className="about-img"></img>
        </div>
      </div>
    </div>
  );
}
