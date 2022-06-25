import React from 'react';

export default function Message({ flag, message, name }) {
  return (
    <div
      className="h-[120px] flex flex-col items-center justify-start bg-white 
        rounded-lg border shadow-md px-4 pt-4
    hover:bg-gray-100 border-gray-700 cursor-pointer w-[260px] "
    >
      <div className="w-full flex space-x-4 h-full">
        <div className="min-w-1/6">
          <p className="w-full text-4xl ">{flag}</p>
        </div>

        <div className="flex flex-col justify-between items-start w-full h-full">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 leading-5 ">
            {message}
          </h5>
          <p className="text-right self-end text-sm text-gray-700 p-2">
            <span className="font-semibold">By:</span> {name}
          </p>
        </div>
      </div>
    </div>
  );
}
