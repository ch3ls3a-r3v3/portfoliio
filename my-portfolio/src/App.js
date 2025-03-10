import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure you have App.css for styling

function App() {
  return (
    <div className="portfolio-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to my portfolio! Here are some of my projects.
      </motion.p>

      <motion.div
        className="project-image"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="your-image-url.jpg" alt="Portfolio project" />
      </motion.div>
    </div>
  );
}

export default App;

