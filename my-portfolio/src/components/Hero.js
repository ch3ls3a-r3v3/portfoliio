import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span>Chelsea</span></h1>
        <h2>Junior Full Stack Developer</h2>
        <p>Building modern web experiences with React & Node.js.</p>
        <motion.button whileHover={{ scale: 1.1 }}>View My Work</motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

