import React, { useState } from 'react';

const GifUploader = ({ onAddGif }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [inputKey, setInputKey] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === 'image/gif') {
      setErrorMessage('');
      const reader = new FileReader();
      reader.onload = () => {
        onAddGif(reader.result); 
        setInputKey(Date.now());
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage('Solo puedes subir archivos de tipo GIF');
    }
  };

  return (
    <div>
      <input key={inputKey} type="file" accept="image/gif" onChange={handleFileChange} />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default GifUploader;