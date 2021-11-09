import React from 'react';
import PonyCard from './ponyCard';

function PoniesList({ ponies, handleSelect, handleDelete }) {
  return (
    <div className="w-1/3 flex justify-center flex-wrap border-l overflow-y-auto h-5/6">
      <h2 className="text-4xl font-bold w-full text-center">Ponies</h2>
      {ponies.map((pony) => {
        return <PonyCard key={pony.id} pony={pony} handleSelect={handleSelect} handleDelete={handleDelete} allowDelete={true} />;
      })}
    </div>
  );
}

export default PoniesList;
