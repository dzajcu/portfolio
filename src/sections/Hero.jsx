import Button from "../components/Button";
import { Lightbulb } from "../components/icons/Lightbulb";
import { Speed } from "../components/icons/Speed";
import { EmojiSmile } from "../components/icons/EmojiSmile";

const Hero = () => {
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

  return (
    <section
      id="hero"
      className="relative"
    >
      {/* LEFT: Text */}
      <div className="relative z-10 h-[100vh] flex xl:items-center items-start justify-center">
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
                        <div className="xl:size-12 md:size-10 size-9 md:p-1 rounded-full bg-white-50 text-black-200">
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
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12 relative z-20"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: Visual */}
        <div className="md:mr-20 opacity-80">
          <img
            src="/hero.png"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
