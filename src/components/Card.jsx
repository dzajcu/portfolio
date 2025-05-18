const Card = ({ card, children }) => {
  return (
    <div className="border border-black bg-black-100 rounded-xl p-10 mb-5 transition hover:border-white-50">
      <div className="flex items-center gap-1 mb-5"></div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
