import React from 'react';
import '../styles.css';
import BottlesCard from '../assets/BottlesCard.png';
import CardBoardCard from '../assets/CardBoardCard.png';
import GreenPitchCard from '../assets/GreenPitchCard.png';
import RecycleBinCard from '../assets/RecycleBinCard.png';

export default function HeroBottom() {
  return (
    <div id="hero-bottom">
      <div className="hero-card-container">
        <img src={CardBoardCard}></img>
        <img src={RecycleBinCard}></img>
        {/* TO DO: Fix pixelated svg green pitch card */}
        <img src={GreenPitchCard}></img>
        <img src={BottlesCard}></img>
      </div>
    </div>
  );
}
