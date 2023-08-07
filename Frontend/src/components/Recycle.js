import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Input from './Input';
import Output from './Output';

export default function Recycle() {
  return (
    <div id="recycle">
      <Nav routed={'recycle'} />
      <div className="recycle-page">
        <Input />
        <Output />
      </div>
      <Footer />
    </div>
  );
}
