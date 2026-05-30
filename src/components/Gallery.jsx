// src/components/Gallery.jsx

import { motion } from "framer-motion";
import { galleryData } from "../data/galleryData";

function Gallery({ limit = 6 }) {
  const items = galleryData.slice(0, limit);

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Studio Gallery</span>
          <h2>A soft, warm, and peaceful space to unwind.</h2>
        </div>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <motion.div
              className="gallery-card"
              key={item.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;