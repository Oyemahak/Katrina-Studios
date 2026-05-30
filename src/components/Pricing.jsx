// src/components/Pricing.jsx

import { motion } from "framer-motion";
import { Clock, Moon, Sparkles } from "lucide-react";

function Pricing() {
  const pricing = [
    {
      icon: Clock,
      title: "30 Minute Massage",
      price: "$100",
      text: "A quick relaxation session for stress relief and body comfort.",
    },
    {
      icon: Sparkles,
      title: "60 Minute Massage",
      price: "$130",
      text: "A balanced full session designed for relaxation and wellness care.",
    },
    {
      icon: Sparkles,
      title: "90 Minute Massage",
      price: "$160",
      text: "A deeper session for full-body relaxation and longer comfort.",
    },
    {
      icon: Sparkles,
      title: "120 Minute Massage",
      price: "$190",
      text: "An extended massage experience for complete relaxation and reset.",
    },
    {
      icon: Moon,
      title: "All Night Massage",
      price: "$270",
      text: "An extended overnight relaxation package. Text for availability.",
    },
  ];

  return (
    <section className="section pricing-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Massage Pricing</span>
          <h2>Simple, clear pricing for every relaxation session.</h2>
          <p>
            Choose the session length that fits your schedule and relaxation
            needs.
          </p>
        </div>

        <div className="pricing-grid pricing-grid-large">
          {pricing.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className={index === 2 ? "pricing-card featured-price" : "pricing-card"}
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Icon size={30} />
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="pricing-note">
          For booking and availability, please send a normal text message to{" "}
          <a href="sms:+13089208128">+1 308-920-8128</a>.
        </p>
      </div>
    </section>
  );
}

export default Pricing;