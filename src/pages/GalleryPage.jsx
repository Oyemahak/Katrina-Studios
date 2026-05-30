// src/pages/ContactPage.jsx

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Katrina Studios</title>
        <meta
          name="description"
          content="Contact Katrina Studios in Edmonton to book a private massage and wellness session."
        />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Book Appointment</span>
          <h1>Ready to relax? Text Katrina Studios today.</h1>
          <p>
            Send a normal text message to ask about availability, pricing,
            services, or booking a private massage session.
          </p>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-grid">
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <h2>Contact Details</h2>

            <div className="contact-item">
              <MapPin />
              <div>
                <strong>Location</strong>
                <span>Edmonton, Alberta</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone />
              <div>
                <strong>Phone / Text</strong>
                <span>+1 308-920-8128</span>
              </div>
            </div>

            <div className="contact-item">
              <MessageCircle />
              <div>
                <strong>Booking Method</strong>
                <span>Normal text messages only</span>
              </div>
            </div>

            <div className="contact-item">
              <Mail />
              <div>
                <strong>Email</strong>
                <span>Add email address</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="sms:+13089208128">
                <MessageCircle />
                Text Now
              </a>

              <a href="tel:+13089208128">
                <Phone />
                Call
              </a>

              <a
                href="https://www.facebook.com/share/1Csb1VJQxm/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
                Facebook
              </a>

              <a href="/">
                <FaInstagram />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div>
              <label>Phone</label>
              <input type="tel" placeholder="Your phone number" />
            </div>

            <div>
              <label>Preferred Session</label>
              <select>
                <option>30 Minute Massage - $100</option>
                <option>60 Minute Massage - $130</option>
                <option>90 Minute Massage - $160</option>
                <option>120 Minute Massage - $190</option>
                <option>All Night Massage - $270</option>
              </select>
            </div>

            <div>
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Tell us your preferred date, time, and session length"
              ></textarea>
            </div>

            <a
              className="btn primary-btn"
              href="sms:+13089208128?body=Hi Katrina Studios, I would like to book a massage session."
            >
              Send Text Message
            </a>
          </motion.form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;