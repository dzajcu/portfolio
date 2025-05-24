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

  return (
    <section
      ref={container}
      className="relative"
      id="projects"
    >
      <TitleHeader
        title="Projects"
        sub="Here are some of my projects"
      />
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.08;
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
