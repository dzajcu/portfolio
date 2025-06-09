import { motion } from "framer-motion";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 flex items-center gap-2 w-fit">
          <p className="text-xs md:text-sm font-semibold">✨ {sub}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="font-semibold md:text-5xl text-3xl">{title}</h1>
      </motion.div>
    </div>
  );
};

export default TitleHeader;
