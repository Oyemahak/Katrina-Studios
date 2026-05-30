// src/pages/About.jsx

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Leaf, ShieldCheck } from "lucide-react";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Katrina Studios</title>
        <meta
          name="description"
          content="Learn more about Katrina Studios, a private massage and wellness studio in Edmonton."
        />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">About Us</span>
          <h1>Comfort, care, and calm in one private wellness space.</h1>
          <p>
            Katrina Studios was created for clients who want a relaxing,
            welcoming, and affordable massage experience in Edmonton.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-page-grid">
          <motion.div
            className="about-page-image"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <img src="/images/studio-room.jpg" alt="Katrina Studios room" />
          </motion.div>

          <motion.div
            className="section-content"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <h2>A studio built around relaxation and personal attention.</h2>
            <p>
              Every massage session is designed to help clients slow down,
              release stress, and feel more comfortable in their body. The
              studio atmosphere is soft, warm, and private so clients can enjoy
              a peaceful experience from start to finish.
            </p>

            <div className="value-grid">
              <div>
                <Heart />
                <h3>Personal Care</h3>
                <p>Sessions are focused on comfort, relaxation, and trust.</p>
              </div>
              <div>
                <Leaf />
                <h3>Calm Energy</h3>
                <p>A quiet environment designed for peaceful self-care.</p>
              </div>
              <div>
                <ShieldCheck />
                <h3>Private Studio</h3>
                <p>Clean, comfortable, and professional studio experience.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;