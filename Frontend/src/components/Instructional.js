import React from 'react';
import Instruct1 from '../assets/Instruct1.png';
import Instruct2 from '../assets/Instruct2.png';
import Instruct3 from '../assets/Instruct3.png';

export default function Instructional() {
  return (
    <div id="instructional">
      <div className="title">How It Works</div>
      <div className="instructional-cards">
        <div className="card">
          <img src={Instruct1}></img>
          <button>1</button>
          <p>Snap a picture of your recyclable</p>
        </div>
        <div className="card">
          <img src={Instruct2}></img>
          <button>2</button>
          <p>EcoBot begins identifying your recyclable</p>
        </div>
        <div className="card">
          <img src={Instruct3}></img>
          <button>3</button>
          <p>See your impact and ask EcoBot questions!</p>
        </div>
      </div>
      <button className="recycle-button">Recycle Now</button>
    </div>
  );
}
