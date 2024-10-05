import React from 'react';
import '../styles/GifCard.css';

const GifCard = ({ gif, index, onDeleteGif }) => {
  return (
    <div className="card">
      <img src={gif} alt={`gif-${index}`} />
      <button onClick={() => onDeleteGif(index)}>Eliminar</button>
    </div>
  );
};

export default GifCard;