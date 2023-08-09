/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Message from './Message.js';

export default function Output({ messages, setMessages }) {
  // Destructure props
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // First, update the state with the user's message
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', content: inputValue }]);

    const chatHistory = {
      history: messages,
      userInput: inputValue
    };
    // Send the user's message to the backend
    try {
      const response = await fetch('http://localhost:4000/AI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(chatHistory)
      });

      const data = await response.json();

      // Assuming the backend responds with an object like { message: 'Bot response here' }
      const botResponse = data.message;

      // Update the state with the bot's response
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('There was an error sending the message to the backend.', error);
    }

    // Clear the input
    setInputValue('');
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
