import { Rocket, DollarSign, Package, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Rocket,
    title: "Hassle-free Setup",
    text: "Get your store running quickly with easy-to-follow steps, perfect for beginners.",
  },
  {
    icon: DollarSign,
    title: "Affordable Plans",
    text: "Choose a plan that fits your budget while getting maximum value and support.",
  },
  {
    icon: Package,
    title: "Professional Listings",
    text: "Optimized product listings to boost visibility and drive more sales.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    text: "Our team provides guidance and support whenever you need assistance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" },
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <p className="text-slate-400 mt-3">
          Empowering entrepreneurs with the tools and guidance they need to succeed online
        </p>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer transition-all duration-300"
            >
              <motion.div
                className="p-4 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md flex-shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <item.icon className="w-8 h-8" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-slate-300 mt-1">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
