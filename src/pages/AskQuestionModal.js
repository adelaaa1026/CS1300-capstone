import React, { useState } from 'react';
import './AskQuestionModal.css';

const doctorAvatar = 'https://randomuser.me/api/portraits/women/44.jpg';
const initialMessages = [
  { from: 'doctor', text: 'Hi! How can I help you today?' },
];

const AskQuestionModal = ({ open, onClose }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  if (!open) return null;

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'user', text: input }]);
      setInput('');
      // To simylate doctor reply
      setTimeout(() => {
        setMessages(msgs => [...msgs, { from: 'doctor', text: 'Thank you for your question. I will get back to you soon.' }]);
      }, 1000);
    }
  };

  return (
    <div className="ask-modal-overlay">
      <div className="ask-modal-window">
        <button className="ask-modal-close" onClick={onClose}>×</button>
        <h2 className="ask-modal-title">Chat with Doctor</h2>
        <div className="ask-modal-chat-area">
          {messages.map((msg, idx) => (
            msg.from === 'doctor' ? (
              <div key={idx} className="ask-modal-msg doctor">
                <img className="ask-modal-avatar" src={doctorAvatar} alt="Doctor" />
                <span>{msg.text}</span>
              </div>
            ) : (
              <div key={idx} className="ask-modal-msg user">{msg.text}</div>
            )
          ))}
        </div>
        <div className="ask-modal-input-row">
          <input
            className="ask-modal-input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your question..."
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          />
          <button className="ask-modal-send" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionModal; 