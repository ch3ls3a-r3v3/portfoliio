import React from "react";
import { motion } from "framer-motion";
import "./App.css";  // Make sure App.css exists in /src

function App() {
  return (
    <div className="app-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>
    </div>
  );
}

export default App;

