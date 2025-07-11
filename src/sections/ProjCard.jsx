import { useTransform, useScroll, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const ProjectCard = ({
  i,
  title,
  description,
  technologies,
  url,
  progress,
  range,
  targetScale,
  src,
}) => {
  const container = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(container, { margin: "-10% 0px -10% 0px" });
  const isVideo = src && src.toLowerCase().endsWith(".mp4");

  useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  useEffect(() => {
    if (videoRef.current && isVideo) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, isVideo]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-[20vh] mt-16 md:mt-32 will-change-transform"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col h-auto w-fit origin-top"
      >
        {" "}
        <div className="relative w-[90vw] sm:w-[95%] md:w-[700px] lg:w-[800px] h-[200px] sm:h-[250px] md:h-[375px] overflow-hidden rounded-lg group border-[0.5px] border-white-50/30">
          {isVideo ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover will-change-transform"
              loop
              muted
              playsInline
              autoPlay
            >
              <source
                src={src}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover will-change-transform"
            />
          )}
          <div
            className="absolute inset-0 bg-black/70 md:opacity-0 opacity-80 transition-all duration-300 
            md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 will-change-transform"
          >
            {!isVideo && (
              <div className="absolute right-4 top-4 md:top-6 md:right-6 bg-blue-500/90 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold z-10">
                Work in Progress
              </div>
            )}
            <div className="flex flex-col h-full p-3 sm:p-4 md:p-6 justify-between">
              <div className="md:translate-y-4 transition-transform duration-300 md:group-hover:translate-y-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-white">
                  {title}
                </h2>
                <p className="text-white-100 text-xs sm:text-base md:text-lg">
                  {description}
                </p>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 md:translate-y-4 transition-transform duration-300 md:group-hover:translate-y-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={`tech_${index}`}
                      className="bg-white/20 text-white px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white opacity-75 hover:opacity-100 transition w-fit text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
