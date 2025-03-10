import React from "React";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="container">
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>My Portfolio</h1>
        <p>Freelance Full-Stack Developer & IT Support</p>
      </motion.header>

      <section className="about">
        <h2>About Me</h2>
        <p>Hi, I'm a tech-savvy problem solver skilled in web development, IT support, and cybersecurity.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <p>Check out some of my work below.</p>
        {/* Add your project links here */}
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
      </section>
    </div>
  );
}

export default App;
