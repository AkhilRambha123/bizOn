import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TargetAudienceSection from "./components/TargetAudienceSection.jsx";
import EcommerceSection from "./components/EcommerceSection.jsx";
import HappyClientsSection from "./components/HappyClientsSection.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { AnimatePresence } from "framer-motion";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Home from "./pages/Home.jsx";

// function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services />
//       <WhyChooseUs />
//       <HappyClientsSection />
//       <TargetAudienceSection />
//       <EcommerceSection />
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }

export default function App() {
  return (

    <AnimatePresence mode="wait">
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUs />} />

        {/* Services Page */}
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </AnimatePresence>
  );
}
