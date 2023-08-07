import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Input from './Input';
import Output from './Output';

export default function Recycle() {
  const [messages, setMessages] = useState([]);

  return (
    <div id="recycle">
      <Nav routed={'recycle'} />
      <div className="recycle-page">
        <Input setMessages={setMessages} />
        <Output messages={messages} setMessages={setMessages} />
      </div>
      <Footer />
    </div>
  );
}
