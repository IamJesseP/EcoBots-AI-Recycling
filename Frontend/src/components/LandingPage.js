import React from 'react';
import HeroTop from './HeroTop';
import HeroBottom from './HeroBottom';
import Instructional from './Instructional';
import '../styles.css';

export default function LandingPage() {
  return (
    <div>
      <HeroTop />
      <HeroBottom />
      <Instructional />
    </div>
  );
}
