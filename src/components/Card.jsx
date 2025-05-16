const Card = ({ card, children, className = "" }) => {
  return (
    <div
      className={`border border-black-50 bg-black-100 rounded-xl p-6 md:p-8 lg:p-10 transition hover:border-white-50 ${className}`}
    >
      {card.review && (
        <div className="mb-5">
          <p className="text-white-50 text-base md:text-lg">{card.review}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
