const StringLabels = () => {
  const stringNames = ["E", "B", "G", "D", "A", "E"]; // Standard tuning labels

  return (
    <div className="flex flex-col items-center ">
      {stringNames.map((name, index) => (
        <div key={index} className="h-1.5 mb-2.5 w-4">
          <article class="prose lg:prose-l">
            <h4>{name}</h4>
          </article>
        </div>
      ))}
    </div>
  );
};

export default StringLabels;
