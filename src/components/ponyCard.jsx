import React from 'react';

function PonyCard({ pony, handleSelect, handleDelete, allowDelete }) {
  return (
    <div className="border w-72 flex flex-wrap p-7 justify-center mt-4">
      <h3 className="text-2xl font-bold">{pony.name}</h3>
      {allowDelete && <span onClick={() => handleDelete(pony)}>x</span>}
      <img src={pony.image[0]} alt={pony.name} onClick={() => handleSelect(pony)} />
    </div>
  );
}

export default PonyCard;
