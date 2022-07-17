import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="84" cy="50" r="10" fill="#0099e5">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.4629629629629629s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#e92786;#0099e5;#34bf49;#ff4c4c;#0099e5"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#e92786">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#b186f4">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.4629629629629629s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.4629629629629629s"
          ></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#3e90bf">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.9259259259259258s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.9259259259259258s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#0099e5">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.3888888888888888s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.8518518518518516s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.3888888888888888s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
