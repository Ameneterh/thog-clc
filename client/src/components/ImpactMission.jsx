import React from "react";
import layinghands from "/layinghands.png";

export default function ImpactMission({ text }) {
  return (
    <div
      className="flex items-end justify-center w-full sm:w-80 p-4 shadow-lg rounded-xl h-96"
      style={{
        backgroundImage: `url(${layinghands})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col w-full bg-gray-300 dark:bg-slate-800 text-center p-2 rounded-lg">
        {text}
      </div>
    </div>
  );
}
