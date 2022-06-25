import React from 'react';

export default function Input({ onChange }) {
  return (
    <div className="rounded-xl w-full bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]">
      <input className="rounded-lg px-2 py-2  text-2xl outline-none" onChange={onChange}></input>
    </div>
  );
}
