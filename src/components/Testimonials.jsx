// src/components/Testimonials.jsx

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialsData } from "../data/testimonialsData";

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Client Experience</span>
          <h2>Designed to feel calm, comfortable, and welcoming.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((review, index) => (
            <motion.div
              className="testimonial-card"
              key={review.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>“{review.text}”</p>
              <strong>{review.name}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;