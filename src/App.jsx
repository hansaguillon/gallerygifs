import { useState } from 'react'
import GifUploader from './components/GifUploader'
import GifGallery from './components/GifGallery'
import './App.css'

function App() {
  const [gifs, setGifs] = useState([]);

  const handleAddGif = (gif) => {
    setGifs([...gifs, gif]);  // Agregar el nuevo GIF a la lista
  };
  const handleDeleteGif = (index) => {
    const updatedGifs = gifs.filter((_, i) => i !== index);  // Eliminar GIF por índice
    setGifs(updatedGifs);
  };

  return (
    <div className="App">
      <h1>Galería de GIFs</h1>
      <GifUploader onAddGif={handleAddGif} />
      <GifGallery gifs={gifs} onDeleteGif={handleDeleteGif} />
    </div>
  );
}

export default App;


