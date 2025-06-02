const Card = ({ card }) => {
  return (
    <div className="border border-white-50/20 bg-black-100 rounded-xl p-6 md:p-10 mb-5 transition duration-300 hover:border-white-50/50">
      <div className="flex items-center gap-1 mb-2"></div>
      <div className="mb-2">
        <p className="text-white-50 text-sm md:text-base">{card.review}</p>
      </div>
    </div>
  );
};

export default Card;
