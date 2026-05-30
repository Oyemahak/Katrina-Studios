// src/pages/Home.jsx

import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>Katrina Studios | Massage & Wellness Studio in Edmonton</title>
        <meta
          name="description"
          content="Katrina Studios is a private massage and wellness studio in Edmonton offering relaxing, affordable, and professional massage services."
        />
      </Helmet>

      <Hero />
      <AboutPreview />
      <Services />
      <Pricing />
      <Gallery limit={6} />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

export default Home;