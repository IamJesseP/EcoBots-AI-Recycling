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
        <img src={CardBoardCard} className="hide-on-mobile"></img>
        {/* TO DO: Fix pixelated svg green pitch card */}
        <img src={GreenPitchCard}></img>
        <img src={RecycleBinCard} className="hide-on-mobile"></img>
        <img src={BottlesCard}></img>
      </div>
    </div>
  );
}
