import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="highlight">Your Name</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Developer
      </motion.h2>

      <motion.button
        className="cta"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.button>
    </section>
  );
};

export default Hero;
