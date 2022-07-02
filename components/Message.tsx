import React from 'react';
import { format } from 'date-fns';
export default function Message({ flag, message, name, feeling, createdAt, nationality }) {
  const [showNationality, setShowNationality] = React.useState<boolean>(false);

  return (
    <>
      <div
        className="relative bg-white 
        rounded-lg border shadow-md px-4 py-2
    hover:bg-gray-100 border-gray-300 opacity-75 hover:opacity-100 cursor-pointer w-[250px] "
        onClick={() => setShowNationality(!showNationality)}
      >
        <div className="w-full flex flex-col justify-between  h-full space-y-5">
          <div className="flex flex-row items-center w-full h-full ">
            <div>
              <p className=" text-3xl mr-2">{flag}</p>
            </div>
            <h3 className="text-xs  text-gray-900">{message}</h3>
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
        {showNationality && (
          <div
            className="absolute top-0 left-0 
            bg-gradient-to-r from-purple-400 via-cyan-600 to-[#ff0080]
           rounded-lg border shadow-md px-4 py-2 text-xl
         border-gray-300  w-[250px] h-full flex justify-center items-center font-plastic text-white"
          >
            {nationality}
          </div>
        )}
      </div>
    </>
  );
}
