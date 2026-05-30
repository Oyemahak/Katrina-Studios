// src/components/Footer.jsx

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Katrina Studios</h3>
          <p>
            A private massage and wellness studio in Edmonton focused on
            relaxation, comfort, and affordable self-care.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <MapPin size={16} /> Edmonton, Alberta
          </p>
          <p>
            <Phone size={16} /> +1 308-920-8128
          </p>
          <p>
            <Mail size={16} /> Add email address
          </p>
        </div>

        <div>
          <h4>Social</h4>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/1Csb1VJQxm/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Katrina Studios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;