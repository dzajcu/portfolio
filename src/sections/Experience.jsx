import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import Card from "../components/Card";

const TimelineDiv = ({ wrapperRef }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 80%", "end 70%"],
  });

  const rawHeight = useTransform(scrollYProgress, [0, 1], ["110%", "0%"]);
  const rawTop = useTransform(scrollYProgress, [0, 1], ["-5%", "100%"]);

  const height = useSpring(rawHeight, {
    stiffness: 100,
    damping: 20,
  });

  const top = useSpring(rawTop, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div
      ref={ref}
      className="timeline absolute z-30 w-14 md:w-28 bg-black-100 top-0"
      style={{ height, top }}
    />
  );
};

const Experience = () => {
  const expCards = [
    {
      review:
        "These studies shaped my mindset as an engineer and taught me how to learn effectively.",
      logoPath: "./student.png",
      title: "B.Sc. in Automation and Robotics",
      date: "2020 - 2024",
      responsibilities: [
        "Improved analytical thinking and structured problem-solving approaches.",
        "Learned how to research and apply technical knowledge in practice.",
        "Developed teamwork and communication skills through group projects.",
      ],
    },
    {      review:
        "This program is helping me gain deeper insight into AI, cloud solutions, and research-oriented problem solving.",
      logoPath: "./student.png",
      title: "M.Sc. in Automation and Information Systems",
      date: "2024 - Present",
      responsibilities: [
        "Exploring AI and machine learning concepts.",
        "Running experiments and analyzing model results.",
        "Exploring advanced engineering topics.",
      ],
    },
    {      work: true,
      review:
        "This role has deepened my ability to troubleshoot under pressure and maintain critical systems with reliability and precision.",
      logoPath: "./admin.png",
      title: "IT Administrator",
      date: "2023 – present",
      responsibilities: [
        "Managing Microsoft 365: Exchange, OneDrive, SharePoint.",
        "Handling Azure AD: users, groups, MFA, policies.",
        "Supporting users with hardware and software issues.",
        "Maintaining network: switches, Wi-Fi, VPN.",
        "Deploying devices with profiles and security settings.",
        "Monitoring systems and ensuring backups.",
        "Writing and updating internal IT documentation.",
        "Contacting vendors and external support teams.",
        "Automating tasks with scripts (e.g., PowerShell).",
      ],
    },
  ];

  const timelineWrapperRefs = useRef(
    Array(expCards.length)
      .fill()
      .map(() => ({ current: null })) // Create an array of refs for each card
  );

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education & Work Experience."
          sub="My Timeline Overwiew"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
              >
                <div className="xl:w-2/6 z-40">
                  <Card card={card}></Card>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div
                      className="absolute top-0 xl:left-[40%] md:left-10 left-5 h-full flex justify-center"
                      ref={(el) => {
                        if (
                          el &&
                          timelineWrapperRefs.current[expCards.indexOf(card)]
                        ) {
                          timelineWrapperRefs.current[
                            expCards.indexOf(card)
                          ].current = el;
                        }
                      }}
                    >
                      {/* <TimelineDiv
                        wrapperRef={
                          timelineWrapperRefs.current[expCards.indexOf(card)]
                        }
                      /> */}
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 bg-white-50/10">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50 text-sm">
                          {card.date}
                        </p>
                        <p className="text-[#839CB5] italic text-sm">
                          {`${card.work ? "Work" : "Education"} Experience`}
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-4 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-sm md:text-base">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
