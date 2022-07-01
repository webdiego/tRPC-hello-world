import React from 'react';

export default function Input({ msg, text, onChange }) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-xs mb-1 ">{text}</h1>
        <p className="text-xs">{msg.length} / 10</p>
      </div>
      <div className="rounded-lg w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] flex item-center">
        <textarea
          maxLength={10}
          className="w-full rounded-md py-1 px-1 text-sm outline-none"
          onChange={(e) => {
            if (msg.length < 10) onChange(e, msg);
          }}
        ></textarea>
      </div>
    </div>
  );
}
