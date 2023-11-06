import React from "react";
import user from '../Media/user.png'
import bot from '../Media/bot.png'

import './components.css'

function ChatBot({ message }) {
  if (message.type === 'bot') {
    return (
      <div className="respuestaCompleja">
        <div style={{ display: 'flex' }}>
          <img src={bot} alt="Usuario" className="avatar" />
          <p>Friendly PDF: {message.text}</p>
        </div>
        {message.audioSrc && (
          <audio controls>
            <source src={message.audioSrc} type="audio/mpeg" />
            Tu navegador no admite la reproducción de audio.
          </audio>
        )}
        {message.imgSrc && <img src={message.imgSrc} alt="Imagen" />}
      </div>
    );
  }
  else {
    return (
      <div className={`chatbot-message ${message.type}`}>
        <div style={{ display: 'flex' }}>
          <img src={user} alt="Usuario" className="avatar" />
          <p style={{ marginTop: '10px' }}>Tú: {message.text}</p>
        </div>
      </div>
    );

  }


}

export default ChatBot;