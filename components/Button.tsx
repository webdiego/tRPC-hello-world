import React from 'react';

export default function Button({ onClick }) {
  return (
    <button
      className="rounded-lg text-white uppercase font-semibold px-4 py-2 bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]"
      onClick={onClick}
    >
      Add
    </button>
  );
}
