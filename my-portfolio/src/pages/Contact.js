import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <form>
        <motion.input
          type="text"
          placeholder="Your Name"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button whileHover={{ scale: 1.1 }}>
          Send Message
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <form>
        <motion.input
          type="text"
          placeholder="Your Name"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button whileHover={{ scale: 1.1 }}>
          Send Message
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
