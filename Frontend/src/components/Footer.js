import React from 'react';
import EcoBotsLogoWhite from '../assets/EcoBotsLogoNEW.png';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-section">
        <img src={EcoBotsLogoWhite} width={220}></img>
        <ul>
          <li>About us</li>
          <li>Recycle now</li>
          <li>FAQs</li>
          <li>Academy</li>
        </ul>
      </div>
    </footer>
  );
}
