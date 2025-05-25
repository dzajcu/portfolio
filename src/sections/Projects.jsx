"use client";
import ProjectCard from "./ProjCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import TitleHeader from "../components/TitleHeader";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS, featuring interactive animations and a clean, modern design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    src: "hero.png",
    url: "",
  },
  {
    title: "Mapify",
    description:
      "A mapping application that allows users to create and share custom maps with various markers and routes.",
    technologies: ["React", "MapTiler", "Node", "MongoDB"],
    src: "hero.png",
    url: "",
  },
  {
    title: "Mapify",
    description:
      "A mapping application that allows users to create and share custom maps with various markers and routes.",
    technologies: ["React", "MapTiler", "Node", "MongoDB"],
    src: "hero.png",
    url: "",
  },
  {
    title: "Mapify",
    description:
      "A mapping application that allows users to create and share custom maps with various markers and routes.",
    technologies: ["React", "MapTiler", "Node", "MongoDB"],
    src: "hero.png",
    url: "",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Adjust the scroll configuration if needed
  useEffect(() => {
    // You can add responsive behavior here if needed
    // For example, adjusting animations based on screen size
  }, []);
  return (
    <section
      ref={container}
      className="relative mt-10 sm:mt-16 md:mt-20 lg:mt-40 px-2 sm:px-4 md:px-8 lg:px-20"
      id="projects"
    >
      <TitleHeader
        title="Here are some of my projects."
        sub="Projects"
      />
      {projects.map((project, i) => {
        // Adjust scaling for different screen sizes
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ProjectCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
