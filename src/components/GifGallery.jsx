import React from 'react';
import '../styles/GifGallery.css';
import GifCard from './GifCard';

const GifGallery = ({ gifs, onDeleteGif }) => {
  return (
    <div className="gallery">
      {gifs.map((gif, index) => (
        <GifCard key={index} gif={gif} index={index} onDeleteGif={onDeleteGif} />
      ))}
    </div>
  );
};

export default GifGallery;