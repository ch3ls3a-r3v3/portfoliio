import { motion } from "framer-motion";

const projects = [
  { title: "AI Chatbot", tech: "React, GPT-4", image: "/ai-chatbot.png" },
  { title: "Crypto Tracker", tech: "Next.js, Binance API", image: "/crypto.png" },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Work</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px cyan" }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



