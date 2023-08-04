import React from 'react';
import EcoBotsLogo from '../assets/EcoBotsLogo.png';

export default function Nav() {
  return (
    <nav id="nav">
      <div className="navbar-section">
        <a href="/" className="logo">
          <img src={EcoBotsLogo}></img>
        </a>
      </div>
      <ul className="navbar-section">
        <li>How It Works</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>
      <div className="navbar-section-2">
        <button className="hover">Log In</button>
        <button className="hover">Recycle</button>
      </div>
    </nav>
  );
}
