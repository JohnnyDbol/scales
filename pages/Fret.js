const Fret = ({ showDot }) => {
  const showBlueDot = showDot[0] && showDot[1] === "blue";
  const showRedDot = showDot[0] && showDot[1] === "red";

  return (
    <div className="w-10 h-4 border-x-2 border-gray-400 bg-gray-300 relative flex items-center justify-center">
      <div className="w-full border-t border-white"></div>
      {showBlueDot && (
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full "></div>
      )}
      {showRedDot && (
        <div className="absolute w-3 h-3 bg-red-400 rounded-full"></div>
      )}
    </div>
  );
};

export default Fret;
