// src/components/Services.jsx
import { useState, useEffect } from "react";
import { Store, Package, TrendingUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "./ContactFormModal";

// Import platform icons
import { SiAmazon, SiFlipkart } from "react-icons/si";

const services = [
  {
    title: "Amazon/Flipkart Account Setup",
    description: "We help you get started quickly with hassle-free account setup.",
    details: [
      "Seller registration & KYC verification",
      "GST linking & account activation",
      "Brand registry assistance",
      "Account ready to sell within days",
    ],
    icons: [SiAmazon, SiFlipkart], // multiple icons for first card
  },
  {
    title: "Shopify Store Creation",
    description: "Launch a beautiful, conversion-optimized Shopify store.",
    details: [
      "Theme selection & customization",
      "Product uploads & storefront setup",
      "Payment & shipping integration",
      "Professional, business-ready design",
    ],
    icon: Store,
  },
  {
    title: "Product Listing & Management",
    description: "Manage your inventory with ease across platforms.",
    details: [
      "SEO-optimized titles, descriptions, images",
      "Inventory & pricing management",
      "Category mapping for visibility",
      "Smooth, automated operations",
    ],
    icon: Package,
  },
  {
    title: "Marketing & Growth Support",
    description: "Grow your business with targeted digital marketing.",
    details: [
      "Marketplace ads & promotions",
      "Discount campaigns",
      "Account health monitoring",
      "Scalable growth strategies",
    ],
    icon: TrendingUp,
  },
];

// Modal animation variants
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Services() {
  const [active, setActive] = useState(null); // active service modal
  const [formOpen, setFormOpen] = useState(false); // Get Started form modal
  const [iconIndex, setIconIndex] = useState(0); // cycling icons for first card

  // Auto-cycle first card icons
  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % services[0].icons.length);
    }, 1500); // every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Lock scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = active !== null || formOpen ? "hidden" : "auto";
  }, [active, formOpen]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">What We Do</h2>
          <p className="text-slate-400 mt-2">
            Services tailored to help your business grow online
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // Determine icon for first card
            let Icon = service.icon;
            if (index === 0) Icon = service.icons[iconIndex];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700 shadow-lg cursor-pointer overflow-hidden"
                onClick={() => setActive(index)}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)",
                }}
              >
                <div>
                  <div className="p-4 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md w-fit">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  <p className="text-slate-400 mt-2">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {active !== null && !formOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{services[active].title}</h3>
                <button
                  onClick={() => setActive(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <motion.ul
                className="mt-4 space-y-3 text-slate-300 list-disc list-inside"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                key={active}
              >
                {services[active].details.map((item, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => {
                    setFormOpen(true);
                    setActive(null);
                  }}
                  className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {formOpen && (
          <ContactFormModal
            isOpen={formOpen}
            onClose={() => setFormOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
