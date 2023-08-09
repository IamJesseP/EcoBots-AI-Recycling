import React, { useState } from 'react';
import AboutImg from '../assets/About.png';
import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const extraContent = (
    <>
      {showMore && (
        <div className="transparent">
          <p className="transparent">
            Mentor: <br></br>Shwetha Tinniun Raju <br></br> Team:
            <div className="about-us-team">
              <ul>
                <li>
                  <a
                    href="https://github.com/IamJesseP"
                    className="gh-link"
                    target="_blank"
                    rel="noreferrer">
                    <DiGithubBadge />
                  </a>
                  Jesse Perez
                </li>
                <li>
                  <a
                    href="https://github.com/Hazel122"
                    className="gh-link"
                    target="_blank"
                    rel="noreferrer">
                    <DiGithubBadge />
                  </a>
                  Hazel Zhou
                </li>
              </ul>

              <ul>
                <li>
                  <a
                    href="https://github.com/IamJesseP"
                    className="gh-link"
                    target="_blank"
                    rel="noreferrer">
                    <DiGithubBadge />
                  </a>
                  Kwasi Debrah-Pinamang
                </li>
                <li>
                  <a
                    href="https://github.com/IamJesseP"
                    className="gh-link"
                    target="_blank"
                    rel="noreferrer">
                    <DiGithubBadge />
                  </a>
                  Averi Luo
                </li>
              </ul>
            </div>
          </p>
          <a onClick={() => setShowMore(!showMore)} className="about-us-button">
            Read less
          </a>
        </div>
      )}
    </>
  );

  return (
    <div id="about">
      <div className="about-section">
        <div className="about-section-text">
          <h1 style={{ backgroundColor: '#f0e7de' }}>
            About Project EcoBots{' '}
            <a
              href="https://github.com/IamJesseP/EcoBots-AI-Recycling"
              target="_blank"
              rel="noreferrer">
              <DiGithubBadge />
            </a>
          </h1>
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
              Team EcoBots is comprised of four students from across the U.S. with a desire{' '}
              <br></br>
              to make an impact on our planet<br></br>{' '}
              {!showMore && (
                <a onClick={() => setShowMore(!showMore)} className="about-us-button">
                  Learn more about us!
                </a>
              )}
              {showMore ? extraContent : null}
            </p>
            <hr style={{ width: '50%' }}></hr>
            <li>
              In collaboration with <br></br>
              <a
                href={'https://mysurestart.com/'}
                target="_blank"
                rel="noreferrer"
                className="transparent">
                SureStart
              </a>{' '}
              x{' '}
              <a
                href={'https://raise.mit.edu/'}
                target="_blank"
                rel="noreferrer"
                className="transparent">
                MIT RAISE
              </a>{' '}
              Create-a-thon
            </li>
            <hr style={{ width: '80%' }}></hr>
            <li>
              A.I. Powered by{' '}
              <a
                href={'https://docs.ultralytics.com/'}
                target="_blank"
                rel="noreferrer"
                className="transparent">
                Ultralytics
              </a>{' '}
              YOLOv8
            </li>
            <hr style={{ width: '100%' }}></hr>
          </ul>
        </div>
        <div className="about-img">
          <img src={AboutImg} className="about-img"></img>
        </div>
      </div>
    </div>
  );
}
