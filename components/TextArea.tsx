import React from 'react';

export default function Input({ msg, text, onChange }) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-xs mb-1 ">{text}</h1>
        <p className="text-xs">{msg.length} / 20</p>
      </div>
      <div className="rounded-lg w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] flex item-center">
        <textarea
          maxLength={20}
          className="w-full rounded-lg py-1 px-1 text-sm outline-none"
          onChange={(e) => {
            onChange(e, msg);
          }}
        ></textarea>
      </div>
    </div>
  );
}
