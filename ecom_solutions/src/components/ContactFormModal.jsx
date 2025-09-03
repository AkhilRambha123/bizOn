import { motion } from "framer-motion";

export default function ContactFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-slate-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-slate-300 rounded-lg px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-slate-300 rounded-lg px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-slate-500 hover:text-slate-700"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
