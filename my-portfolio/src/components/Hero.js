import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}  // Start hidden & move up
        animate={{ opacity: 1, y: 0 }}    // Fade in & move to normal position
        transition={{ duration: 1 }}      // Smooth animation
      >
        Hi, I'm <span className="highlight">Chelsea</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Developer | React & Node.js
      </motion.h2>

      <motion.button
        className="cta"
        whileHover={{ scale: 1.1 }} // Button grows when hovered
        whileTap={{ scale: 0.95 }}  // Shrinks when clicked
      >
        View My Work
      </motion.button>
    </section>
  );
};

export default Hero;