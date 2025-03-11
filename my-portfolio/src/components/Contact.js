import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <form>
        <motion.input type="text" placeholder="Your Name" whileFocus={{ scale: 1.05 }} />
        <motion.input type="email" placeholder="Your Email" whileFocus={{ scale: 1.05 }} />
        <motion.textarea placeholder="Your Message" whileFocus={{ scale: 1.05 }} />
        <motion.button whileHover={{ scale: 1.1 }}>Send</motion.button>
      </form>
    </section>
  );
};

export default Contact;
