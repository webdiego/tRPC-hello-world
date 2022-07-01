import React from 'react';

export default function Input({ text, onChange }) {
  return (
    <div className="w-full">
      <h1 className="text-xs mb-1 ">{text}</h1>
      <div className="rounded-lg w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] flex item-center">
        <input
          maxLength={15}
          className="w-full rounded-md py-1 px-1 text-sm outline-none"
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
}
