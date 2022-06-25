import React from 'react';

export default function Button({ onClick }) {
  return (
    <div className="w-full">
      <button
        className="w-full rounded-lg text-white  font-semibold px-4 py-2 bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]"
        onClick={onClick}
      >
        <div className="w-full flex justify-center items-center">
          <p>Send</p>
          <svg
            className="ml-2 transition-all ease-out duration-800 hover:rotate-[25deg]"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <title>send</title>
            <g
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              fill="none"
              stroke="#fff"
            >
              <polyline points="22,2 7,14 7,21 10.6,16.7 "></polyline>{' '}
              <polygon points="2,10 22,2 18,22 "></polygon>
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
}
