import React from "react";

const FretMarkers = () => {
  const frets = [1, 3, 5, 7, 9, 12, 13, 15, 17, 19];
  return (
    <div className="flex">
      <div key={0} className="w-8 text-center invisible">
        1
      </div>

      {Array.from({ length: 21 }).map((_, index) => (
        <div
          key={index}
          className={`w-10 text-center ${
            frets.includes(index + 1) ? "visible" : "invisible"
          }`}
        >
          <article class="prose lg:prose-l">
            <h4>{index + 1}</h4>
          </article>
        </div>
      ))}
    </div>
  );
};

export default FretMarkers;
