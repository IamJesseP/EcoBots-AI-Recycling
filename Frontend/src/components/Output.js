import React, { useState } from 'react';
import Message from './Message.js';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: 'user', content: inputValue }]);
    setInputValue('');

    // For demonstration purposes, let's assume the bot responds immediately
    setTimeout(() => {
      setMessages([
        ...messages,
        { sender: 'user', content: inputValue },
        { sender: 'bot', content: 'Bot response here' }
      ]);
    }, 1000);
  };

  return (
    <div className="output-page">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} content={message.content} />
        ))}
      </div>
      <form className="input-area" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleInputChange} placeholder="Have any questions?" />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
}
