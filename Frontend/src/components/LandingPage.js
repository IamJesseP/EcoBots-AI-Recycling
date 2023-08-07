import React from 'react';
import HeroTop from './HeroTop';
import HeroBottom from './HeroBottom';
import Instructional from './Instructional';
import About from './About';
import Nav from './Nav';
import Footer from './Footer';
import '../styles.css';

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <HeroTop />
      <HeroBottom />
      <Instructional />
      <About />
      <Footer />
    </div>
  );
}
