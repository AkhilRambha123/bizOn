// src/components/Testimonials.jsx
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Small Business Owner",
    feedback:
      "BizON helped me launch my store on Amazon and Shopify effortlessly. Sales have been growing steadily!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Priya Singh",
    role: "Entrepreneur",
    feedback:
      "The support and guidance from BizON were exceptional. They made the process so easy and stress-free.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Aditya Verma",
    role: "E-commerce Seller",
    feedback:
      "Professional product listings and account setup saved me a ton of time. Highly recommend BizON!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative bg-slate-800 text-white py-12 px-6 overflow-hidden">
      {/* Background Blobs & Quote */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-24 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <Quote className="absolute top-8 right-8 w-20 h-20 text-indigo-500/20" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-slate-400 mt-2 text-base md:text-lg">
          Real feedback from entrepreneurs who trusted BizON
        </p>

        {/* Testimonial Slider */}
        <div className="mt-8 relative min-h-[180px] flex flex-col items-center">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (item, idx) =>
                idx === current && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center px-4"
                  >
                    <motion.img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mb-2 shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px rgba(99,102,241,0.6)",
                      }}
                    />
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-slate-200 italic max-w-xl">
                      "{item.feedback}"
                    </p>
                    <h4 className="mt-2 text-base md:text-lg font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="text-indigo-300 text-sm">{item.role}</p>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === idx ? "bg-indigo-500 scale-125" : "bg-indigo-500/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>


{/* CTA */}
        <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Online Business?
          </h2>
          <p className="text-white/90 mb-8">
            Let’s take your first step toward e-commerce success.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-slate-100 transition"
          >
            Get Started Today
          </button>
        </section>
        </>
  );
}
