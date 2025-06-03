const Button = ({
    text,
    className,
    type,
    isSuccess,
    isLoading,
    disabled,
    onClick,
}) => {
    const handleClick = () => {
        if (text === "Download CV") {
            const link = document.createElement("a");
            link.href = "./CV_Dawid_Zajac_EN.pdf";
            link.download = "CV_Dawid_Zajac_EN.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${
                className ?? ""
            } relative z-20 rounded-lg overflow-hidden ${
                isLoading || disabled || isSuccess ? "opacity-80" : "cursor-pointer"
            }`}
            disabled={isLoading || disabled || isSuccess}
        >
            <div className="px-2 py-3 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden group transition-colors duration-300">
                <div
                    className={`absolute -right-10 origin-center top-1/2 -translate-y-1/2 
        w-[120%] h-[120%] md:group-hover:size-10 group-hover:size-8 md:group-hover:right-10 group-hover:right-6
        rounded-full ${
            isSuccess ? "bg-green-300" : "bg-white-50/80"
        } transition-all duration-500 will-change-transform`}
                />
                <p className="uppercase md:text-md text-black transition-all duration-500 group-hover:text-white-50 md:group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 z-10">
                    {text}
                </p>
                <div className="size-10 rounded-full absolute md:right-10 right-6 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden z-10">
                    {isLoading ? (
                        <img
                            src="./assets/spinner.svg"
                            alt="loading"
                            className="size-5 text-black"
                        />
                    ) : (
                        <img
                            src={
                                isSuccess
                                    ? "./assets/check-mark.svg"
                                    : "./assets/arrow-down.svg"
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
