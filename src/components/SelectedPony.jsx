import React from 'react';
import PonyCard from './ponyCard';

function SelectedPony({ pony }) {
  return (
    <div className="flex flex-wrap justify-center w-full pb-3 border-b">
      <h2 className="text-4xl font-bold w-full text-center"> Selected pony </h2>
      <PonyCard pony={pony} />
    </div>
  );
}

export default SelectedPony;
