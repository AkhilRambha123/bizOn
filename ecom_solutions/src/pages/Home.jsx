// src/pages/HomePage.jsx
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import HappyClientsSection from "../components/HappyClientsSection.jsx";
import TargetAudienceSection from "../components/TargetAudienceSection.jsx";
import EcommerceSection from "../components/EcommerceSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";
import VideosSection from "../components/VideosSection.jsx";

export default function Home() {
  return (
   <>

      {/* Indigo overlay for modern look */}
      <div className="fixed inset-0 bg-indigo-1000/60 -z-10"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <section id="services"> <Services /> </section>
        <WhyChooseUs />
        <HappyClientsSection />
        <TargetAudienceSection />
        <EcommerceSection />
        <section id="our-videos"> <VideosSection /> </section>
        <section id="testimonials"> <Testimonials /> </section>
        <Footer />
      </div>
   </>
  );
}
