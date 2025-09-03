import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactFormModal from "../components/ContactFormModal";
import {
  ShoppingCart,
  Store,
  Package,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: "easeIn" } },
};

const services = [
  {
    title: "Amazon/Flipkart Account Setup",
    description:
      "We handle registration, KYC, GST linking, and account activation, so you can start selling quickly.",
    img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/sale_0-sixteen_nine.jpg?size=948:533",
    icon: ShoppingCart,
  },
  {
    title: "Shopify Store Creation",
    description:
      "Custom storefronts designed to maximize conversions and build brand trust.",
    img: "https://thaka.bing.com/th/id/OIP.alntR3VyVuDe2wJGLxfRdgHaEY?w=310&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    icon: Store,
  },
  {
    title: "Product Listing & Management",
    description:
      "SEO-rich listings, inventory syncing, and smooth operations across platforms.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    icon: Package,
  },
  {
    title: "Marketing & Growth Support",
    description:
      "Data-driven ads, promotions, and account health monitoring to help you scale.",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
    icon: TrendingUp,
  },
];

const steps = [
  "Register your account with us",
  "Complete KYC & GST linking",
  "Set up your storefront and product listings",
  "Start selling & grow with our expert support",
];

const whyChoose = [
  "Expert guidance with 1000+ businesses launched",
  "End-to-end support from setup to growth",
  "Affordable and transparent pricing",
  "Proven success with top e-commerce platforms",
];

const fallbackImg =
  "https://via.placeholder.com/600x400/1e293b/ffffff?text=Service+Image";

export default function ServicesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Navbar />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-slate-900 text-white"
      >
        {/* Hero */}
        <section className="relative py-24 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            From setup to scaling — BizOn provides end-to-end solutions to help
            you launch, grow, and succeed in e-commerce.
          </p>
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/60 border border-slate-700 shadow-xl"
              >
                <img
                  src={srv.img}
                  alt={srv.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = fallbackImg)}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{srv.title}</h3>
                  </div>
                  <p className="text-slate-300 mt-3">{srv.description}</p>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-block mt-4 px-5 py-2 rounded-full bg-white text-indigo-600 font-semibold shadow hover:bg-slate-100 transition"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </section>

       {/* Why Choose Our Services */}
<section className="relative bg-slate-900 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
      Why Choose Our Services?
    </h2>

    <div className="space-y-28">
      {[
        {
          title: "Expert Guidance",
          desc: "We don’t just provide services, we partner with you to build long-term growth strategies. Our experts have scaled multiple e-commerce businesses successfully.",
          points: [
            "One-on-one strategy sessions",
            "Tailored solutions for your niche",
            "Proven frameworks & tools",
          ],
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
        },
        {
          title: "Affordable & Transparent Plans",
          desc: "We believe in fair pricing and complete transparency. You pay only for what you need, with no hidden charges.",
          points: [
            "Flexible packages for startups & enterprises",
            "Clear pricing structure",
            "High ROI-driven services",
          ],
          img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=60",
        },
        {
          title: "Ongoing Support & Growth",
          desc: "Your success doesn’t stop at launch — and neither does ours. We provide continuous support and insights to help you scale sustainably.",
          points: [
            "Dedicated account manager",
            "Regular performance reviews",
            "24/7 customer support",
          ],
          img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=60",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className={`grid md:grid-cols-2 gap-12 items-center ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-2xl shadow-2xl w-[380px] h-[240px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <h3 className="text-3xl font-semibold text-indigo-400">
              {item.title}
            </h3>
            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            <ul className="space-y-2 text-slate-400">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Subtle background accents */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full -z-10"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
</section>



{/* How It Works */}
<section className="bg-slate-950 py-20 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      How It Works
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-between relative">
      {[
        {
          title: "Consultation",
          desc: "We understand your goals and requirements.",
          icon: "💬",
        },
        {
          title: "Account Setup",
          desc: "Register, verify, and prepare your seller accounts.",
          icon: "📝",
        },
        {
          title: "Store Design",
          desc: "Build your storefront with listings & branding.",
          icon: "🛍️",
        },
        {
          title: "Growth & Marketing",
          desc: "Launch ads, track sales, and scale your business.",
          icon: "📈",
        },
      ].map((step, idx, arr) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
          className="flex flex-col items-center text-center w-full md:w-1/4 relative"
        >
          {/* Step Circle */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white text-2xl font-bold shadow-lg">
            {step.icon}
          </div>

          {/* Title + Description */}
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="text-slate-400 mt-2 text-sm">{step.desc}</p>

          {/* Arrow (only if not last step) */}
          {idx < arr.length - 1 && (
            <div className="hidden md:block absolute top-8 right-[-12%] w-[24%] h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500">
              <div className="absolute -right-3 -top-[6px] rotate-0 text-indigo-400">
                ➝
              </div>
            </div>
          )}
        </motion.div>
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
      </motion.div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      <Footer />
    </>
  );
}
