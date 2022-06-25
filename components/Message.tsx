import React from 'react';

export default function Message({ flag, message, name, feeling }) {
  return (
    <>
      <div
        className="h-[120px]  flex flex-col items-center justify-start bg-white 
        rounded-lg border shadow-md px-4 pt-4
    hover:bg-gray-100 border-gray-300 opacity-75 hover:opacity-100 cursor-pointer w-[260px] "
      >
        <div className="w-full flex space-x-4 h-full">
          <div className="min-w-1/6 flex flex-col justify-between p">
            <p className="w-full text-4xl ">{flag}</p>

            <div className="flex items-center text-lg text-gray-700 ">
              <span className=" font-semibold text-xs py-2">Feel: </span> {feeling}
            </div>
          </div>

          <div className="flex flex-col justify-between items-start w-full h-full">
            <h5 className="text-xs  tracking-tight text-gray-900 leading-5 overflow-auto ">
              {message}
            </h5>

            <p className="self-end text-gray-700 p-2 text-xs">
              <span className="font-semibold ">By:</span> {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
