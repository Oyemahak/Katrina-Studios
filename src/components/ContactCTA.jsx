// src/components/ContactCTA.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span>Ready to relax?</span>
          <h2>Book your private massage session in Edmonton.</h2>
          <p>
            Take a break from stress and give your body the comfort it deserves.
          </p>
          <Link to="/contact" className="btn light-btn">
            Contact Katrina Studios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;