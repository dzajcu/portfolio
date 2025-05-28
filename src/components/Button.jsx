const Button = ({ text, className, type, isSuccess, isLoading, disabled }) => {
  return (
    <button
      type={type}
      className={`${className ?? ""} relative z-20 ${
        isLoading || disabled || isSuccess ? "opacity-80" : "cursor-pointer"
      }`}
      disabled={isLoading || disabled || isSuccess}
    >
      <div className="px-2 py-3 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden group transition-colors duration-300">
        <div
          className={`absolute -right-10 origin-center top-1/2 -translate-y-1/2 
        w-[120%] h-[120%] group-hover:size-10 group-hover:right-10
        rounded-full ${
          isSuccess ? "bg-green-300" : "bg-white-50/80"
        } transition-all duration-500`}
        />
        <p className="uppercase md:text-md text-black transition-all duration-500 group-hover:text-white-50 group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">
          {text}
        </p>
        <div
          className={`$ size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden"`}
        >
          {isLoading ? (
            <img
              src="../assets/spinner.svg"
              alt="loading"
              className="size-5 text-black"
            />
          ) : (
            <img
              src={
                isSuccess
                  ? "../assets/check-mark.svg"
                  : "../assets/arrow-down.svg"
              }
              alt={isSuccess ? "check" : "arrow"}
              className={`size-5 ${
                isSuccess
                  ? "translate-y-0"
                  : "xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0"
              } transition-all duration-500`}
            />
          )}
        </div>
      </div>
    </button>
  );
};

export default Button;
