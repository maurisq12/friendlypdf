import React from 'react';

const Response = ({ response }) => (
  <div>
    {response.type === 'text' && <div className="text-response">{response.text}</div>}
    {response.type === 'audio' && <audio controls src={response.audioUrl}></audio>}
    {response.type === 'image' && <img src={response.imageUrl} alt="Imagen de respuesta" />}
  </div>
);

export default Response;
