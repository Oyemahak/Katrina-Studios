// src/pages/ServicesPage.jsx

import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import ContactCTA from "../components/ContactCTA";

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Katrina Studios</title>
        <meta
          name="description"
          content="Explore Katrina Studios massage services including relaxation massage, deep tissue massage, aromatherapy, hot stone massage, and wellness packages."
        />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Massage Services</span>
          <h1>Choose the massage experience your body needs today.</h1>
          <p>
            From gentle relaxation to deeper muscle care, Katrina Studios offers
            massage services designed for comfort, calm, and wellness.
          </p>
        </div>
      </section>

      <Services showAll />
      <Pricing />
      <ContactCTA />
    </>
  );
}

export default ServicesPage;