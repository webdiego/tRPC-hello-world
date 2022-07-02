import React from 'react';
import { format } from 'date-fns';
export default function Message({ flag, message, name, feeling, createdAt }) {
  return (
    <>
      <div
        className=" bg-white 
        rounded-lg border shadow-md px-4 py-2
    hover:bg-gray-100 border-gray-300 opacity-75 hover:opacity-100 cursor-pointer w-[300px] "
      >
        <div className="w-full flex flex-col justify-between  h-full space-y-5">
          <div className="flex flex-row items-start w-full h-full ">
            <p className=" text-4xl mr-2">{flag}</p>
            <h3 className="text-xs  tracking-tight text-gray-900 leading-5  ">{message}</h3>
          </div>

          <div className="w-full flex items-start justify-between text-gray-700 text-base">
            <p className="text-lg">
              <span className=" font-semibold  text-xs">Feel: </span> {feeling}
            </p>
            <p className="text-xs self-center">
              <span className="font-semibold ">By:</span> {name}
            </p>
            <p className="text-xs self-center">
              <span className="font-semibold ">At:</span> {format(new Date(createdAt), 'd-MMM-yy')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
