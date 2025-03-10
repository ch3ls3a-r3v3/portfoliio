import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full-Stack Developer | Cybersecurity Analyst | Tech Enthusiast
      </motion.p>
      <motion.a
        href="/projects"
        className="cta-button"
        whileHover={{ scale: 1.1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
