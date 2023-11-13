import FretStack from "./FretStack";
import StringLabels from "./StringLabels";
import FretMarkers from "./FretMarkers";

const Guitar = ({ fretMarkers }) => {
  const createFretData = (fretStackIndex) => {
    return Array.from({ length: 6 }, (_, fretIndex) => {
      const marker = fretMarkers.find(
        (marker) => marker[0] === fretStackIndex && marker[1] === fretIndex,
      );
      return marker ? [true, marker[2]] : [false];
    });
  };

  return (
    <>
      <div className="flex flex-col w-full w-full">
        <FretMarkers />
        <div className="flex">
          <StringLabels />
          <div className="relative w-6 overflow-clip">
            <div className="absolute right-0">
              <FretStack fretData={createFretData(0)} />
            </div>
          </div>
          {Array.from({ length: 21 }).map((_, index) => (
            <FretStack key={index + 1} fretData={createFretData(index + 1)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Guitar;
