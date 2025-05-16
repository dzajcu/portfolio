"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "../components/Card";

const ProjectCard = ({
  i,
  title,
  description,
  technologies,
  src,
  url,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const cardData = {
    review: description,
  };
  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-[20vh] mt-32"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 35}px)`,
        }}
        className="relative flex flex-col h-auto w-[90%] max-w-[900px] origin-top"
      >
        <Card card={cardData}>
          <div className="flex flex-col h-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white-100">
              {title}
            </h2>

            <div className="flex flex-col md:flex-row h-full gap-6 md:gap-8">
              <div className="w-full md:w-[45%] flex flex-col justify-between order-2 md:order-1">
                <div className="flex flex-wrap gap-2 mt-4">
                  {technologies.map((tech, index) => (
                    <span
                      key={`tech_${index}`}
                      className="bg-black-300 text-white-100 px-3 py-1 bg-black-200  rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 w-fit">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 text-white-50 hover:text-white transition group p-2"
                  >
                    View Project
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition group-hover:translate-x-2 duration-300 text-white-50 group-hover:text-white"
                    >
                      <path
                        d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative w-full md:w-[55%] h-[180px] md:h-[200px] overflow-hidden rounded-lg order-1 md:order-2">
                <motion.div
                  className="w-full h-full"
                  style={{ scale: imageScale }}
                >
                  <img
                    src={`/${src}`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
