import Button from "../components/Button";
import { Lightbulb } from "../components/icons/Lightbulb";
import { Speed } from "../components/icons/Speed";
import { EmojiSmile } from "../components/icons/EmojiSmile";
import SocialIcons from "../components/SocialIcons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 150]);
  const [showScrollDown, setShowScrollDown] = useState(true);

  // Efekt obsługujący znikanie przycisku "Scroll Down" przy przewijaniu
  useEffect(() => {
    const handleScroll = () => {
      // Ukryj przycisk, gdy przewinięcie jest większe niż 100px
      const shouldShow = window.scrollY < 100;
      setShowScrollDown(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    // Sprawdź stan początkowy
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = [
    {
      text: "fast",
      icon: <Speed />,
    },
    {
      text: "creative",
      icon: <Lightbulb />,
    },
    {
      text: "user-friendly",
      icon: <EmojiSmile />,
    },
  ];
  const handleScrollToDiscover = () => {
    const aboutSection = document.querySelector("#about");
    if (!aboutSection) return;

    const navbar = document.querySelector("header");
    const navbarHeight = navbar ? navbar.offsetHeight + 20 : 100;
    const elementPosition = aboutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative h-screen"
    >
      {/* LEFT: Text */}
      <div className="relative z-10 md:h-dvh h-[80vh] flex items-center justify-center">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1>
                I build{" "}
                <span className="absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden inline-block flex-col transition ease-[cubic-bezier(0.71, 0.03, 0.34, 1)]">
                  <span className="flex flex-col wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <div className="xl:size-12 md:size-10 size-9 p-1 rounded-full bg-white-50 text-black-200">
                          {word.icon}
                        </div>
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>things on the Web .</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-20 pointer-events-none font-thin">
              Hi, I'm Dawid, a passionate software engineer with a knack for
              crafting innovative solutions. I specialize in web development,
              creating seamless user experiences.
            </p>

            <Button
              text="my resume"
              className="md:w-80 md:h-16 w-60 h-12 relative z-20"
              id="counter"
            />
            <div className="mt-4 z-30 flex gap-6 items-center">
              <div className="relative w-40 md:w-32 h-px bg-gradient-to-r from-white-50/00 to-blue-50/80"></div>
              <SocialIcons iconSize="4" />
            </div>
          </div>
        </header>
        <motion.div
          className="hidden xl:inline-block md:mr-20 opacity-80 max-w-sm"
          style={{ y }}
        >
          <img
            src="/hero.png"
            alt="hero"
          />
        </motion.div>{" "}
      </div>
      <div
        onClick={handleScrollToDiscover}
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-opacity duration-300 ${
          showScrollDown ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white-50/50 text-xs">Scroll Down</p>
          <div className="w-8 h-8 rounded-full flex-center animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-white-50/50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
