// src/components/Hero.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Heart } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-shape shape-one"></div>
      <div className="hero-bg-shape shape-two"></div>

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="eyebrow">
            <MapPin size={16} />
            Edmonton Massage & Wellness Studio
          </span>

          <h1>
            Relax your body, refresh your mind, and feel beautifully restored.
          </h1>

          <p>
            Katrina Studios offers a private, calming, and affordable massage
            experience designed for relaxation, stress relief, and complete
            self-care.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn primary-btn">
              Book Appointment
            </Link>
            <Link to="/services" className="btn secondary-btn">
              View Services
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Private</strong>
              <span>Studio Setting</span>
            </div>
            <div>
              <strong>Affordable</strong>
              <span>Wellness Care</span>
            </div>
            <div>
              <strong>Relaxing</strong>
              <span>Calm Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="hero-card">
            <img src="/images/studio-room.jpg" alt="Katrina Studios massage room" />
          </div>

          <div className="floating-card top-card">
            <Star size={18} />
            <span>Premium calm atmosphere</span>
          </div>

          <div className="floating-card bottom-card">
            <Heart size={18} />
            <span>Personalized wellness sessions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;