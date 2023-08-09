import React, { useState, useEffect } from 'react';
import EcoBotsLogo from '../assets/EcoBotsLogo1NEW.png';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

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
          {location.pathname === '/' && (
            <LinkScroll to="hero-top" smooth={true} offset={-200} style={{ cursor: 'pointer' }}>
              <img src={EcoBotsLogo} width={220}></img>
            </LinkScroll>
          )}
          {location.pathname === '/recycle' && (
            <LinkRouter className="logo" to="/" style={{ cursor: 'pointer' }}>
              <img src={EcoBotsLogo} width={220}></img>
            </LinkRouter>
          )}
        </div>
        {location.pathname === '/' && (
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
            <li className="none">|</li>
            <li>
              <LinkScroll
                to="about"
                className="nav-item"
                spy={true}
                duration={1200}
                smooth={true}
                offset={0}
                style={{ cursor: 'pointer', marginRight: '118px' }}>
                About
              </LinkScroll>
            </li>
          </ul>
        )}
        <div className="navbar-section-2">
          {/* <button className="hover">Log In</button> */}
          {location.pathname === '/' && (
            <LinkRouter to="/recycle">
              <button className="nav-button recycle-button hover pointer">Recycle</button>
            </LinkRouter>
          )}
          {location.pathname === '/recycle' && (
            <LinkScroll to="recycle" spy={true} duration={1200} smooth={true} offset={0}>
              <button className="nav-button recycle-button hover pointer">Recycle</button>
            </LinkScroll>
          )}
        </div>
      </nav>
    </>
  );
}
