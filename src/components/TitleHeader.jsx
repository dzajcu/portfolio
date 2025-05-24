const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 flex items-center gap-2 w-fit">
          <p className="text-xs md:text-sm font-semibold">✨ {sub}</p>
        </div>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default TitleHeader;
