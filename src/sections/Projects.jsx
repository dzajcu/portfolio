"use client";
import ProjectCard from "./ProjCard";
import { useScroll } from "framer-motion";
import { useRef } from "react";
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
    technologies: ["React", "ChakraUI", "MapTiler", "Node", "MongoDB", "Vite"],
    src: "Mapify.mp4",
    url: "",
  },
  {
    title: "Memory Game",
    description:
      "A simple browser-based memory game built with HTML, Tailwind CSS, and vanilla JavaScript.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    src: "Memory.mp4",
    url: "",
  },
  {
    title: "Memory Game",
    description:
      "A simple browser-based memory game built with HTML, Tailwind CSS, and vanilla JavaScript.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    src: "Memory.mp4",
    url: "",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative mt-10 sm:mt-16 md:mt-20 lg:mt-40 px-5 sm:px-4 md:px-8 lg:px-20"
      id="projects"
    >
      <TitleHeader title="Here are some of my projects." sub="Projects" />
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ProjectCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1.5]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
