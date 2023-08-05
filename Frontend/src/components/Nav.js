import React from 'react';
import EcoBotsLogo from '../assets/EcoBotsLogo.png';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export default function Nav() {
  return (
    <nav id="nav">
      <div className="navbar-section">
        <LinkScroll
          className="logo"
          to="nav"
          spy={true}
          duration={1200}
          smooth={true}
          offset={0}
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
        <button className="hover">Log In</button>
        <button className="hover">Recycle</button>
      </div>
    </nav>
  );
}
