/* eslint-disable react/prop-types */
import React from 'react';
import '../card.css';
import EducationalCard from './EducationalCard';
import CFcard from '../assets/CFcard.png';
import EnergySavings from '../assets/energysaving.png';
import Facts from '../assets/leafscard.png';
import RecycleTips from '../assets/recyclecard.png';
import ResourceCon from '../assets/resourcecon.png';

export default function Educational({ botResponse }) {
  if (!botResponse) {
    return <div style={{ height: '700px' }}></div>;
  }

  return (
    <>
      <h1 className="educational-title transparent">Your Data At A Glance</h1>
      <div id="educational">
        <div className="educational-cards transparent">
          <EducationalCard
            botResponse={botResponse.carbonFootprint}
            title={'Carbon Footprint'}
            image={CFcard}
          />
          <EducationalCard botResponse={botResponse.facts} title={'Facts'} image={Facts} />
          <EducationalCard
            botResponse={botResponse.recyclingTip}
            title={'Recycling Tips'}
            image={RecycleTips}
          />
          <EducationalCard
            botResponse={botResponse.energySavings}
            title={'Energy Savings'}
            image={EnergySavings}
          />
          <EducationalCard
            botResponse={botResponse.resourceConservation}
            title={'Resource Conservation'}
            image={ResourceCon}
          />
        </div>
      </div>
    </>
  );
}
