import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Header from './components/Header';

import './App.css';
import PoniesList from './components/PoniesList';
import SelectedPony from './components/SelectedPony';
import DeletedPony from './components/DeletedPony';

function App() {
  const [selectedPony, setSelectedPony] = useState({
    name: 'Rainbow Dash',
    image: ['https://vignette.wikia.nocookie.net/mlp/images/4/4b/Rainbow_Dash_Wonderbolt_fantasy_cropped_S1E3.png/revision/latest?cb=20190410214837'],
  });

  const [deletedPony, setDeletedPony] = useState({
    name: 'Applejack',
    image: ['https://vignette.wikia.nocookie.net/mlp/images/d/d8/Applejack_S01E13_cropped.png/revision/latest?cb=20130419182236'],
  });

  const [ponies, setPonies] = useState([]);

  useEffect(async () => {
    const res = await axios.get('http://ponyweb.ml/v1/character/all');
    setPonies(res.data.data);
  }, []);

  const deletePony = (deletedPony) => {
    const filteredPonies = ponies.filter((pony) => pony.id !== deletedPony.id);
    setPonies(filteredPonies);
    setDeletedPony(deletedPony);
  };

  return (
    <main className="App flex justify-center flex-wrap overflow-hidden h-screen">
      <Header />
      <div className="flex flex-wrap w-2/3 h-5/6">
        <SelectedPony pony={selectedPony} />
        <DeletedPony pony={deletedPony} />
      </div>
      <PoniesList ponies={ponies} handleSelect={setSelectedPony} handleDelete={deletePony} />
    </main>
  );
}

export default App;
