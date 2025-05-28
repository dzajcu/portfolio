import Button from "../components/Button";
import { Lightbulb } from "../components/icons/Lightbulb";
import { Speed } from "../components/icons/Speed";
import { EmojiSmile } from "../components/icons/EmojiSmile";
import SocialIcons from "../components/SocialIcons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY < 100;
      setShowScrollDown(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = [
    {
      text: "Dawid",
      icon: <EmojiSmile />,
    },
    {
      text: "creative",
      icon: <Lightbulb />,
    },
    {
      text: "efficient",
      icon: <Speed />,
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
      <div className="relative z-10 md:h-dvh h-[80vh] flex items-center justify-center">
        <header className="flex flex-col max-w-3xl md:px-20 px-5 max-md:mt-60">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center md:text-[60px] text-[30px]  relative z-10 pointer-events-none">
              <h1>
                I'm
                <span className="absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] overflow-hidden inline-block flex-col transition ease-[cubic-bezier(0.71, 0.03, 0.34, 1)]">
                  <span className="flex flex-col wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2 "
                      >
                        <div className="xl:size-12 md:size-10 size-9 p-1 rounded-full bg-white-50/10 text-white-200 ">
                          {word.icon}
                        </div>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="font-thin">
                — making the web <br />a bit better...
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-20 pointer-events-none font-thin">
              ...and fueled by coffee and code.
            </p>

            <Button
              text="Download CV"
              className="md:w-68 md:h-16 w-60 h-12 relative z-20"
              id="counter"
            />
            <div className="mt-4 z-30 flex gap-6 items-center">
              <div className="relative w-40 md:w-32 h-px bg-gradient-to-r from-white-50/00 to-blue-50/80"></div>
              <SocialIcons iconSize="4" />
            </div>
          </div>
        </header>
        <motion.div
          className="absolute top-[50%] md:top-[50%] left-30 md:left-[50%] translate-y-[-50%] opacity-50 max-w-xs md:max-w-xl"
          style={{ y }}
        >
          <img
            src="/hero2.png"
            alt="hero"
          />
        </motion.div>
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
