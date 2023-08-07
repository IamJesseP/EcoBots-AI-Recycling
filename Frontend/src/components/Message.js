/* eslint-disable react/prop-types */
import React from 'react';

export default function Message({ sender, content }) {
  return (
    <div className={`message ${sender}`}>
      <p className={`message-content ${sender}`}>{content}</p>
    </div>
  );
}
