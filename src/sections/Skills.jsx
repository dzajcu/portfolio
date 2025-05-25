import { motion } from "framer-motion";

const Skills = () => {
  const CodeIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
    >
      <path
        d="M16 18L22 12L16 6M8 6L2 12L8 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ServerIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="9"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="15"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="6"
        cy="5"
        r="1"
        fill="currentColor"
      />
      <circle
        cx="6"
        cy="11"
        r="1"
        fill="currentColor"
      />
      <circle
        cx="6"
        cy="17"
        r="1"
        fill="currentColor"
      />
    </svg>
  );

  const DatabaseIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
    >
      <ellipse
        cx="12"
        cy="5"
        rx="9"
        ry="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const CloudIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
    >
      <path
        d="M18 10H16.74C16.24 6.67 13.35 4 9.86 4C6.93 4 4.54 6.14 4.07 9.03C1.78 9.24 0 11.16 0 13.5C0 16.02 2.02 18 4.5 18H18C20.49 18 22.5 16.02 22.5 13.5S20.49 9 18 9Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  const GitIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
    >
      <circle
        cx="6"
        cy="6"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="18"
        cy="6"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="18"
        cy="18"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 9V15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 6H15"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const skills = [
    {
      icon: CodeIcon,
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with JavaScript, React, HTML5, and CSS3 (SCSS).",
      technologies: ["JavaScript", "React", "HTML5", "CSS3/SCSS"],
    },
    {
      icon: ServerIcon,
      title: "Backend Development",
      description:
        "Creating robust server-side applications and APIs using Node.js and Express framework.",
      technologies: ["Node.js", "Express"],
    },
    {
      icon: DatabaseIcon,
      title: "Database Management",
      description:
        "Working with both NoSQL and SQL databases for efficient data storage and retrieval.",
      technologies: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications using cloud services and containerization.",
      technologies: ["AWS S3", "Docker"],
    },
    {
      icon: GitIcon,
      title: "Version Control & Languages",
      description:
        "Managing code versions and exploring additional programming languages.",
      technologies: ["Git", "Python", "SQL"],
    },
  ];

  return (
    <section
      id="skills"
      className="flex-center md:mt-40 mt-20 xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <div className="my-24 flex flex-col justify-start space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              staggerChildren: 0.5,
            }}
            viewport={{ once: true }}
            className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
          >
            {/* Description Card */}
            <div className="flex flex-col py-6 xl:p-6">
              <h2 className="text-4xl font-medium tracking-tight text-white">
                My Technical Skills
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent clash-grotesk tracking-normal">
                  & Expertise.
                </span>
              </h2>
              <p className="mt-2 tracking-tighter text-white-50">
                Here are the technologies and tools I work with to create
                exceptional digital experiences.
              </p>
            </div>

            {/* Skill Cards */}
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex flex-col items-start rounded-lg bg-white/5 p-14 transition duration-300 hover:-translate-y-1 hover:bg-white/10 group"
              >
                <div className="mb-4 p-3">
                  <skill.icon />
                </div>

                <h3 className="text-lg font-semibold  text-white mb-2">
                  {skill.title}
                </h3>

                <p className="text-sm  text-white-50 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/20 text-white px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
