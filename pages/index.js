import React from "react";
import Guitar from "./Guitar";
import StringLabels from "./StringLabels";
import { useState } from "react";

const initialState = {
  tuning: [4, 11, 7, 2, 9, 4],
  scaleRoot: 0,
  interval: 0,
  typ: "three",
  scaleNotes: [0, 2, 4, 5, 7, 9, 11, 0],
  whole: [
    [0, 0, "blue"],
    [1, 0, "blue"],
    [3, 0, "blue"],
    [5, 0, "blue"],
    [7, 0, "blue"],
    [8, 0, "red"],
    [10, 0, "blue"],
    [12, 0, "blue"],
    [13, 0, "blue"],
    [15, 0, "blue"],
    [17, 0, "blue"],
    [19, 0, "blue"],
    [20, 0, "red"],
    [0, 1, "blue"],
    [1, 1, "red"],
    [3, 1, "blue"],
    [5, 1, "blue"],
    [6, 1, "blue"],
    [8, 1, "blue"],
    [10, 1, "blue"],
    [12, 1, "blue"],
    [13, 1, "red"],
    [15, 1, "blue"],
    [17, 1, "blue"],
    [18, 1, "blue"],
    [20, 1, "blue"],
    [0, 2, "blue"],
    [2, 2, "blue"],
    [4, 2, "blue"],
    [5, 2, "red"],
    [7, 2, "blue"],
    [9, 2, "blue"],
    [10, 2, "blue"],
    [12, 2, "blue"],
    [14, 2, "blue"],
    [16, 2, "blue"],
    [17, 2, "red"],
    [19, 2, "blue"],
    [0, 3, "blue"],
    [2, 3, "blue"],
    [3, 3, "blue"],
    [5, 3, "blue"],
    [7, 3, "blue"],
    [9, 3, "blue"],
    [10, 3, "red"],
    [12, 3, "blue"],
    [14, 3, "blue"],
    [15, 3, "blue"],
    [17, 3, "blue"],
    [19, 3, "blue"],
    [0, 4, "blue"],
    [2, 4, "blue"],
    [3, 4, "red"],
    [5, 4, "blue"],
    [7, 4, "blue"],
    [8, 4, "blue"],
    [10, 4, "blue"],
    [12, 4, "blue"],
    [14, 4, "blue"],
    [15, 4, "red"],
    [17, 4, "blue"],
    [19, 4, "blue"],
    [20, 4, "blue"],
    [0, 5, "blue"],
    [1, 5, "blue"],
    [3, 5, "blue"],
    [5, 5, "blue"],
    [7, 5, "blue"],
    [8, 5, "red"],
    [10, 5, "blue"],
    [12, 5, "blue"],
    [13, 5, "blue"],
    [15, 5, "blue"],
    [17, 5, "blue"],
    [19, 5, "blue"],
    [20, 5, "red"],
  ],
  pos: [
    [0, 0, "blue"],
    [1, 0, "blue"],
    [3, 0, "blue"],
    [5, 0, "blue"],
    [7, 0, "blue"],
    [8, 0, "red"],
    [10, 0, "blue"],
    [12, 0, "blue"],
    [13, 0, "blue"],
    [15, 0, "blue"],
    [17, 0, "blue"],
    [19, 0, "blue"],
    [20, 0, "red"],
    [0, 1, "blue"],
    [1, 1, "red"],
    [3, 1, "blue"],
    [5, 1, "blue"],
    [6, 1, "blue"],
    [8, 1, "blue"],
    [10, 1, "blue"],
    [12, 1, "blue"],
    [13, 1, "red"],
    [15, 1, "blue"],
    [17, 1, "blue"],
    [18, 1, "blue"],
    [20, 1, "blue"],
    [0, 2, "blue"],
    [2, 2, "blue"],
    [4, 2, "blue"],
    [5, 2, "red"],
    [7, 2, "blue"],
    [9, 2, "blue"],
    [10, 2, "blue"],
    [12, 2, "blue"],
    [14, 2, "blue"],
    [16, 2, "blue"],
    [17, 2, "red"],
    [19, 2, "blue"],
    [0, 3, "blue"],
    [2, 3, "blue"],
    [3, 3, "blue"],
    [5, 3, "blue"],
    [7, 3, "blue"],
    [9, 3, "blue"],
    [10, 3, "red"],
    [12, 3, "blue"],
    [14, 3, "blue"],
    [15, 3, "blue"],
    [17, 3, "blue"],
    [19, 3, "blue"],
    [0, 4, "blue"],
    [2, 4, "blue"],
    [3, 4, "red"],
    [5, 4, "blue"],
    [7, 4, "blue"],
    [8, 4, "blue"],
    [10, 4, "blue"],
    [12, 4, "blue"],
    [14, 4, "blue"],
    [15, 4, "red"],
    [17, 4, "blue"],
    [19, 4, "blue"],
    [20, 4, "blue"],
    [0, 5, "blue"],
    [1, 5, "blue"],
    [3, 5, "blue"],
    [5, 5, "blue"],
    [7, 5, "blue"],
    [8, 5, "red"],
    [10, 5, "blue"],
    [12, 5, "blue"],
    [13, 5, "blue"],
    [15, 5, "blue"],
    [17, 5, "blue"],
    [19, 5, "blue"],
    [20, 5, "red"],
  ],
};
const intervals = [
  ["major", [2, 2, 1, 2, 2, 2, 1]],
  ["naturalMinor", [2, 1, 2, 2, 1, 2, 2]],
  ["majorPentatonic", [2, 2, 3, 2, 3]],
  ["minorPentatonic", [3, 2, 2, 3, 2]],
  ["harmonicMinor", [2, 1, 2, 2, 1, 3, 1]],
  ["melodicMinorAscending", [2, 1, 2, 2, 2, 2, 1]],
  ["melodicMinorDescending", [2, 2, 1, 2, 2, 1, 2]],
  ["blues", [3, 2, 1, 1, 3, 2]],

  ["wholeTone", [2, 2, 2, 2, 2, 2]],
  ["chromatic", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
];

function getFretboardArray(tuning, scaleRoot, scaleNotes) {
  //const scaleNotes = [0, 2, 4, 5, 7, 9, 11]; // C major scale
  const fretboard = [];
  const strings = tuning.length;
  const frets = 21;

  for (let string = 0; string < strings; string++) {
    for (let fret = 0; fret < frets; fret++) {
      let note = (tuning[string] + fret) % 12;
      if (scaleNotes.includes(note)) {
        let color = note === scaleRoot ? "red" : "blue";
        fretboard.push([fret, string, color]);
      }
    }
  }

  return fretboard;
}

function positionFunc(startIndex, allNotes, typ) {
  let result = [];
  if (typ == "three") {
    for (let string = 0; string < 6; string++) {
      // Assuming a 6-string guitar
      let stringNotes = allNotes.filter((note) => note[1] === string);

      // Ensure that the start index and the next two positions are within the array length
      let extra = 0;
      if (string < 2) {
        extra = 1;
      }
      if (
        startIndex < stringNotes.length &&
        startIndex + 2 < stringNotes.length
      ) {
        result.push(
          ...stringNotes.slice(startIndex + extra, startIndex + extra + 3),
        );
      }
    }
  } else if (typ == "pena") {
    for (let string = 0; string < 6; string++) {
      // Assuming a 6-string guitar
      let stringNotes = allNotes.filter((note) => note[1] === string);

      // Ensure that the start index and the next two positions are within the array length
      let extra = 0;
      if (
        startIndex < stringNotes.length &&
        startIndex + 1 < stringNotes.length
      ) {
        result.push(
          ...stringNotes.slice(startIndex + extra, startIndex + extra + 2),
        );
      }
    }
  } else if (typ == "cage") {
    let stringNotes = allNotes.filter((note) => note[1] === 0);
    let first = stringNotes[startIndex][0];
    let last = first + 3;
    result = allNotes.filter(([f, s, c]) => {
      return f >= first && f <= last;
    });
  } else {
    result = allNotes;
  }

  return result;
}

const generateMajorScale = (root, inter) => {
  const majorScaleIntervals = inter; //[2, 2, 1, 2, 2, 2, 1]; // Whole, Whole, Half, Whole, Whole, Whole, Half
  let scaleNotes = [root];

  for (let i = 0; i < majorScaleIntervals.length; i++) {
    root = (root + majorScaleIntervals[i]) % 12;
    scaleNotes.push(root);
  }

  return scaleNotes;
};

const scales = [
  "C",
  "C#/D-",
  "D",
  "D#/E-",
  "E",
  "F",
  "F#/G-",
  "G",
  "G#/A-",
  "A",
  "A#/B-",
  "B",
];

const App = () => {
  // Example usage
  let tuning = [4, 11, 7, 2, 9, 4];
  let scaleRoot = 0; // C scale
  const [interval, setInterval] = useState(intervals[0][1]);
  const [scaleNotes, setScaleNotes] = useState(generateMajorScale(0, interval));
  //let whole = getFretboardArray(tuning, scaleRoot, scaleNotes);
  const [whole, setWhole] = useState(
    getFretboardArray(tuning, scaleRoot, scaleNotes),
  );
  const [s, setS] = useState(initialState);
  const [pos, setPos] = useState(whole);
  //const [pos, setPos] = useState(all);

  //t is tuning like [4, 11, 7, 2, 9, 4]
  //sR is scaleRoot an int
  //i is interval an int
  //p is an int position
  function update(t, sR, i, p) {
    let inter = intervals[i][1];
    let sN = generateMajorScale(sR, inter);
    let fA = getFretboardArray(t, sR, sN);
    let posit = positionFunc(p, fA, "all");
    let typ = "three";
    if (i == 2 || i == 3) {
      typ = "pena";
    } else if (i > 3 && i < 8) {
      typ = "cage";
    }
    let temp = {
      tuning: t,
      scaleRoot: sR,
      interval: i,
      scaleNotes: sN,
      whole: fA,
      pos: posit,
      typ: typ,
    };
    setS(temp);

    setPos(temp.pos);
  }

  function test(t, sR, i, p) {
    let inter = intervals[0][1];
    let sN = generateMajorScale(sR, inter);
    let fA = getFretboardArray(t, sR, sN);
    let posit = positionFunc(0, fA, "cage");

    let temp = {
      tuning: t,
      scaleRoot: sR,
      interval: i,
      scaleNotes: sN,
      whole: fA,
      pos: posit,
    };
    setS(temp);

    setPos(temp.pos);
  }

  function handler(a) {
    update(s.tuning, a, s.interval, -1);
  }
  function handler2(b) {
    setPos(positionFunc(b, s.whole, s.typ));
  }
  function handler3(c) {
    //alert(s.sR);
    //setInterval(intervals[c][1]);
    //setScaleNotes(generateMajorScale(0, interval));
    //setWhole(getFretboardArray(tuning, scaleRoot, scaleNotes));
    //setPos(getFretboardArray(tuning, scaleRoot, scaleNotes));
    update(s.tuning, s.scaleRoot, c, -1);
  }
  return (
    <>
      <div>
        <div className="p-4 border-black border-2 m-2 con">
          <Guitar fretMarkers={pos} />
        </div>
      </div>
      <details className="dropdown">
        <summary className="m-1 btn">Root</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button onClick={() => handler(0)}>{scales[0]}</button>
          </li>
          <li>
            <button onClick={() => handler(1)}>{scales[1]}</button>
          </li>
          <li>
            <button onClick={() => handler(2)}>{scales[2]}</button>
          </li>
          <li>
            <button onClick={() => handler(3)}>{scales[3]}</button>
          </li>
          <li>
            <button onClick={() => handler(5)}>{scales[4]}</button>
          </li>
          <li>
            <button onClick={() => handler(5)}>{scales[5]}</button>
          </li>
          <li>
            <button onClick={() => handler(6)}>{scales[6]}</button>
          </li>
          <li>
            <button onClick={() => handler(7)}>{scales[7]}</button>
          </li>
          <li>
            <button onClick={() => handler(8)}>{scales[8]}</button>
          </li>
          <li>
            <button onClick={() => handler(9)}>{scales[9]}</button>
          </li>
          <li>
            <button onClick={() => handler(10)}>{scales[10]}</button>
          </li>
          <li>
            <button onClick={() => handler(11)}>{scales[11]}</button>
          </li>
        </ul>
      </details>
      <details className="dropdown">
        <summary className="m-1 btn">Position</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {Array.from({ length: 7 }).map((_, i) => (
            <li>
              <button onClick={() => handler2(i)}>Position {i + 1}</button>
            </li>
          ))}
          <li>
            <button onClick={() => setPos(whole)}>all</button>
          </li>
        </ul>
      </details>
      <details className="dropdown">
        <summary className="m-1 btn">Scale</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {intervals.map((_, i) => (
            <li>
              <button onClick={() => handler3(i)}>{intervals[i][0]}</button>
            </li>
          ))}
        </ul>
      </details>
      <button
        onClick={() =>
          test(tuning, scaleRoot, 0, generateMajorScale(0, interval), -1)
        }
      >
        test
      </button>

      <div></div>
    </>
  );
};

export default App;
