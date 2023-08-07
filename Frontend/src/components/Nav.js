import React, { useState, useEffect, useRef } from 'react';
import EcoBotsLogo from '../assets/EcoBotsLogo.png';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setHasScrolled(currentScrollPos > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="nav" className={hasScrolled ? 'scrolled' : ''}>
        <div className="navbar-section">
          <LinkScroll
            className="logo"
            to="hero-top"
            spy={true}
            duration={1200}
            smooth={true}
            offset={-200}
            style={{ cursor: 'pointer' }}>
            <img src={EcoBotsLogo}></img>
          </LinkScroll>
        </div>
        <ul className="navbar-section">
          <li>
            <LinkScroll
              to="instructional"
              className="nav-item"
              spy={true}
              duration={1200}
              smooth={true}
              offset={-80}
              style={{ cursor: 'pointer' }}>
              How It Works
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="about"
              className="nav-item"
              spy={true}
              duration={1200}
              smooth={true}
              offset={0}
              style={{ cursor: 'pointer' }}>
              About
            </LinkScroll>
          </li>
          <li>FAQ</li>
        </ul>
        <div className="navbar-section-2">
          {/* <button className="hover">Log In</button> */}
          <LinkRouter to="/recycle">
            <button className="recycle-button hover pointer">Recycle</button>
          </LinkRouter>
        </div>
      </nav>
    </>
  );
}
