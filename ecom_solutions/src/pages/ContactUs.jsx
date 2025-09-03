import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  return (
    <>
      <Navbar />

    <div className="relative w-full min-h-screen bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/images/contact-bg.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 md:px-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-6xl font-bold mb-4 text-center"
        >
          Get in Touch with BizON
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg mb-12 text-center max-w-2xl"
        >
          We’d love to hear from you! Whether you have a question, suggestion, or
          want to collaborate, drop us a message.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 text-white placeholder-gray-200 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 text-white placeholder-gray-200 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 text-white placeholder-gray-200 transition"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg mt-2 transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transform transition">
              <FaPhone className="text-indigo-500 text-2xl" />
              <span className="text-white text-lg">+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transform transition">
              <FaEnvelope className="text-indigo-500 text-2xl" />
              <span className="text-white text-lg">contact@bizon.com</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transform transition">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl" />
              <span className="text-white text-lg">123 Business Street, India</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optional floating shapes animation */}
      <motion.div
        className="absolute w-32 h-32 bg-indigo-500 rounded-full opacity-30 top-10 left-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute w-40 h-40 bg-pink-500 rounded-full opacity-20 bottom-20 right-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
    </div>

    <Footer />
    </>
  );
}
