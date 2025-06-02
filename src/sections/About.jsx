import TitleHeader from "../components/TitleHeader";

const About = () => {
  return (
    <section
      id="about"
      className=" px-5 md:px-10 md:mt-40 mt-20"
    >
      <div className="w-full h-full md:px-10 px-5 max-w-5xl">
        <TitleHeader
          title="My Description"
          sub="About Me"
        />
        <div className="mt-4">
          <p className="text-white-50 md:text-3xl text-xl leading-relaxed font-thin">
            I am a final-semester master's student of IT automation systems at
            Wrocław University of Science and Technology. I am characterized by
            strong analytical skills and pay close attention to detail and
            aesthetics. After 1.5 years of experience working as an IT
            administrator, I am now seeking an internship that aligns more
            closely with my interests and passions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
