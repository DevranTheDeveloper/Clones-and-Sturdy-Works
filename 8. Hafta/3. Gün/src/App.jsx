import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isAutoResponse, setIsAutoResponse] = useState(false);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    // Scroll to the last message when it changes
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  let send = (event) => {
    if (event.key === 'Enter') {
      const newMessage = { message, time: new Date().getTime(), sender: 'User 1' };
      setMessages([...messages, newMessage]);
      setMessage('');

      if (message === 'sa') {
        setTimeout(() => {
          const response = { message: 'as', time: new Date().getTime(), sender: 'User 2' };
          setMessages([...messages, response]);
          setIsAutoResponse(true); // Set the flag to indicate the auto response
        }, 1000); // Simulate a delay of 1 second before sending the automatic response
      } else {
        setIsAutoResponse(false); // Reset the flag if it's not an auto response
      }
    }
  };

  return (
    <>
      <div className="top">
        <h1>mesajs</h1>
      </div>
      <div className="main-box">
        <div className="left">
          <div className="input">
            <input type="text" value="" placeholder="users" />
          </div>
          <div className="users"></div>
        </div>
        <div className="right">
          <div className="message">
            <div className="ml">
              {messages.map((messageItem, index) => (
                <div
                  key={index}
                  ref={index === messages.length - 1 ? lastMessageRef : null}
                  className={`message-box ${messageItem.sender === 'User 2' ? 'message-box2' : ''} ${
                    isAutoResponse && index === messages.length - 1 ? 'auto-response' : ''
                  }`}
                >
                  <p>{messageItem.message}</p>
                  <small>{new Date(messageItem.time).toLocaleString()}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="inp">
            <input
              className="i"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={send}
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
