import React from 'react';
import PonyCard from './ponyCard';

function DeletedPony({ pony }) {
  return (
    <div className="flex flex-wrap justify-center w-full h-3/6 mt-3">
      <h2 className="text-4xl font-bold w-full text-center"> Deleted pony </h2>
      <PonyCard pony={pony} />
    </div>
  );
}

export default DeletedPony;
