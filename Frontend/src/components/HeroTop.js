import React from 'react';
import '../styles.css';

export default function HeroTop() {
  return (
    <div id="hero-top">
      <div className="hero-quote">
        An{' '}
        <span style={{ color: '#49A078', fontStyle: 'italic', fontFamily: 'Andada Pro' }}>
          AI-Eco
        </span>{' '}
        <button className="hero-button">solution </button> designed to quantify your recycling
        impact
      </div>
    </div>
  );
}
