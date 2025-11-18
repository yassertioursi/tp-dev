

import React, { useState } from 'react';
import '../Contact.css';

function Contact() {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Hello World</p>
      <div className="contact-form">
        <p
          className="hover-text"
          style={{ color: isHovered ? '#61dafb' : '#333', cursor: 'pointer' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Survolé
        </p>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type something..."
          className="text-input"
        />
        <div className="output-text">
          <p>écrit: {text}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;