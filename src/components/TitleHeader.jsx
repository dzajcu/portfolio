const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default TitleHeader;
