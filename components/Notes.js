const Notes = ({ notes }) => {
  return (
    <>
      {notes.map(([string, fret, color], index) => (
        <div
          key={index}
          className={`absolute w-4 h-4 rounded-full bg-${color}-500`}
          style={{ top: `${(string - 1) * 20}%`, left: `${fret * 50}px` }}
        />
      ))}
    </>
  );
};

export default Notes;
