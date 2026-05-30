// src/components/AboutPreview.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Smile } from "lucide-react";

function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container about-grid">
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img
            src="/images/katrina-profile.jpg"
            alt="Katrina Studios wellness lifestyle"
            className="about-main-img"
          />
          <div className="about-badge">
            <span>Edmonton</span>
            <strong>Massage Studio</strong>
          </div>
        </motion.div>

        <motion.div
          className="section-content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-kicker">About Katrina Studios</span>
          <h2>A peaceful space created for comfort, privacy, and relaxation.</h2>
          <p>
            Katrina Studios is designed for clients who want a calm escape from
            daily stress. Every session focuses on creating a comfortable,
            private, and soothing experience.
          </p>

          <div className="feature-list">
            <div>
              <Leaf />
              <span>Relaxing wellness-focused treatments</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Clean, private, and comfortable studio</span>
            </div>
            <div>
              <Smile />
              <span>Friendly service with affordable pricing</span>
            </div>
          </div>

          <Link to="/about" className="text-link">
            Learn more about the studio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;