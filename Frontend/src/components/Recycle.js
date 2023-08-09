import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Input from './Input';
import Output from './Output';
import Educational from './Educational';
export default function Recycle() {
  const [messages, setMessages] = useState([]);
  const [botResponse, setBotResponse] = useState(null);

  return (
    <div id="recycle">
      <Nav routed={'recycle'} />
      <div className="recycle-page">
        <Input setMessages={setMessages} setBotResponse={setBotResponse} />
        <Output messages={messages} setMessages={setMessages} />
      </div>
      <div className="educational-page">
        <Educational botResponse={botResponse} />
      </div>
      <Footer />
    </div>
  );
}
