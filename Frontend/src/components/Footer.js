import React from 'react';
import EcoBotsLogoWhite from '../assets/EcoBotsLogoWhite.png';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-section">
        <img src={EcoBotsLogoWhite}></img>
        <ul>
          <li>About us</li>
          <li>FAQs</li>
          <li>Academy</li>
        </ul>
      </div>
    </footer>
  );
}
