import Button from "../components/Button";
import { Lightbulb } from "../components/icons/Lightbulb";
import { Speed } from "../components/icons/Speed";
import { EmojiSmile } from "../components/icons/EmojiSmile";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 150]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

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

            <p className="text-white-50 md:text-xl relative z-20 pointer-events-none">
              Hi, I'm Dawid, a passionate software engineer with a knack for
              crafting innovative solutions. I specialize in web development,
              creating seamless user experiences.
            </p>

            <Button
              text="my resume"
              className="md:w-80 md:h-16 w-60 h-12 relative z-20"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: Visual */}
        <motion.div
          className="hidden xl:inline-block md:mr-20 opacity-80 max-w-sm"
          style={{ y }}
        >
          <img
            src="/hero.png"
            alt="hero"
          />
        </motion.div>
      </div>

      <motion.div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-opacity duration-500 z-10 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={handleScrollToDiscover}
      >
        <p className="text-white-50 text-sm tracking-wider">
          SCROLL TO DISCOVER
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9 3C9.9 2.50294 9.49706 2.1 9 2.1C8.50294 2.1 8.1 2.50294 8.1 3L9.9 3ZM8.3636 16.6364C8.71508 16.9879 9.28492 16.9879 9.6364 16.6364L15.364 10.9088C15.7154 10.5574 15.7154 9.98751 15.364 9.63604C15.0125 9.28457 14.4426 9.28457 14.0912 9.63604L9 14.7272L3.90883 9.63604C3.55736 9.28457 2.98751 9.28457 2.63604 9.63604C2.28457 9.98751 2.28457 10.5574 2.63604 10.9088L8.3636 16.6364ZM8.1 3L8.1 16L9.9 16L9.9 3L8.1 3Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
