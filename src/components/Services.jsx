// src/components/Services.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

function Services({ showAll = false }) {
  const services = showAll ? servicesData : servicesData.slice(0, 3);

  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Our Services</span>
          <h2>Massage treatments made for relaxation and body comfort.</h2>
          <p>
            Choose from calming, wellness-focused massage services in a private
            studio environment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-meta">
                  <span>{service.duration}</span>
                  <strong>{service.price}</strong>
                </div>
              </motion.article>
            );
          })}
        </div>

        {!showAll && (
          <div className="center section-action">
            <Link to="/services" className="btn primary-btn">
              Explore All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;