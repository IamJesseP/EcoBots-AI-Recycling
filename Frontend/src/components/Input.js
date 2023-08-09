/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { BsUpload } from 'react-icons/bs';
import { Link as LinkScroll } from 'react-scroll';

export default function Input({ setMessages, setBotResponse }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleSubmit(event, file); // Pass the selected file to handleSubmit
  };

  const handleSubmit = async (event, file) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file.');
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    const formData = new FormData();
    formData.append('photo', file);
    try {
      const response = await fetch('http://localhost:4000/recycle', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      // Assuming the backend responds with an object that has a message property
      // like { message: 'Bot's response after processing the image' }
      const botResponse = data.result;
      setBotResponse(botResponse);
      // Use the passed setMessages function to update the state in the parent component
      const botMessageContent = (
        <>
          {botResponse.response} Recycling this can have a significant overall impact on our
          precious planet.{' '}
          <LinkScroll
            className="input-link transparent"
            to="educational"
            smooth={true}
            offset={-200}
            style={{ cursor: 'pointer' }}>
            Click here to learn more
          </LinkScroll>
          <br></br>
          <br></br>
          <img src={imageUrl} alt="Uploaded Content" width="100" />{' '}
        </>
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: 'bot',
          content: botMessageContent
        }
      ]);
    } catch (error) {
      console.error('There was an error uploading the file.', error);
    }
  };

  return (
    <div className="input-page">
      <div className="input-title">
        <h2>Make Every Recycle Count</h2>
        <h1>A new way to understand your impact</h1>
      </div>
      <div className="spline">
        <Spline scene="https://prod.spline.design/QgyFsAcjnjNZv-zO/scene.splinecode" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          id="fileInput"
          style={{ display: 'none' }}
          className="hover"
        />
        <label htmlFor="fileInput" className="file-upload pointer">
          <BsUpload className="file-upload-icon" />
          Upload
        </label>
        <span>{selectedFile ? selectedFile.name : ''}</span>
      </form>
    </div>
  );
}
