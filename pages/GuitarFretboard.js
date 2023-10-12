// GuitarFretboard.js
import React from "react";
import Fret from "./Fret";

const GuitarFretboard = ({ children }) => {
  return (
    <div className="flex">
      {[...Array(22)].map((_, index) => (
        <Fret key={index} />
      ))}
      <div className="absolute w-full h-full ">
        {/* Render strings */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-1 " style={{ top: `${index * 20}%` }} />
        ))}
        {children}
      </div>
    </div>
  );
};

export default GuitarFretboard;
