import React from "react";
import Fret from "./Fret"; // assuming Fret is in the same directory

const FretStack = ({ fretData }) => {
  return (
    <div className="flex flex-col bg-brown">
      {fretData.map((data, index) => (
        <Fret key={index} showDot={data} />
      ))}
    </div>
  );
};

export default FretStack;
