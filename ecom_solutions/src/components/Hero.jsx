import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "./ContactFormModal"; // import your modal component

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 min-h-screen gap-10 overflow-hidden relative">
      {/* Left Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-slate-400">We are creative team.</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
          Start Selling Online with Ease
        </h1>
        <p className="text-slate-400 mt-4">
          We help entrepreneurs and small businesses create and manage their online stores on Amazon, Flipkart, Meesho, Shopify, and more.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#services"
            className="text-slate-200 hover:text-white flex items-center gap-2"
          >
            Book a Free Consultation
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
          >
            Get Started Today
          </button>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="bg-indigo-500/20 w-72 h-72 rounded-full flex items-center justify-center">
          <img
            src="https://miro.medium.com/max/915/0*l9jKAGAU0bEJqpRS"
            className="w-72 h-72 rounded-full"
            alt="Hero Illustration"
          />
        </div>
      </motion.div>

      {/* Modal */}      <AnimatePresence>
        {isModalOpen && (
          <ContactFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
