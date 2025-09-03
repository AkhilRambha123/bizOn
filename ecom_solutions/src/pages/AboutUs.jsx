import { Users, Target, Award, Building, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsImage from "../assets/images/AboutUs.avif";
import { motion } from "framer-motion";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function AboutUs() {
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
        {/* Hero Section */}
        <section className="relative py-16 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            BizOn is dedicated to empowering entrepreneurs by making online business setup{" "}
            <span className="text-indigo-400 font-semibold">simple</span>,{" "}
            <span className="text-purple-400 font-semibold">affordable</span>, and{" "}
            <span className="text-indigo-400 font-semibold">scalable</span>.
          </p>
        </section>

        {/* About Section with Background Image */}
        <section className="relative bg-cover bg-center py-20 px-6" style={{ backgroundImage: `url(${AboutUsImage})` }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-5xl mx-auto bg-indigo-900/90 p-10 rounded-2xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              About <span className="text-indigo-400">Our Company</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              At BizOn, we help individuals and small businesses launch their e-commerce journey.
              From setting up accounts on Amazon, Flipkart, and Shopify to guiding you with product listings,
              GST linking, and branding — we’ve got you covered.
            </p>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Our mission is to remove the complexity of starting an online business, so you can focus on growth,
              profits, and scaling your dreams into reality.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative bg-slate-50 text-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative"
            >
             
              {/* Vision */}
              <div className="mb-10 flex items-start gap-5">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Eye className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Our Vision</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    To be the most trusted partner for entrepreneurs by making
                    online business setup seamless, affordable, and scalable.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="mb-10 flex items-start gap-5">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Target className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Our Mission</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    Empower individuals and small businesses with the tools,
                    guidance, and strategies they need to succeed in competitive
                    marketplaces like Amazon, Flipkart, Meesho, and Shopify.
                  </p>
                </div>
              </div>

              {/* Goal */}
              <div className="flex items-start gap-5">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Award className="w-7 h-7 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Our Goal</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    To help 10,000+ entrepreneurs launch and scale their e-commerce
                    businesses globally, while keeping operations efficient and customer-focused.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="E-commerce team"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://wallpaperaccess.com/full/5146365.jpg"
                  alt="Business strategy"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=400&q=80"
                  alt="Teamwork"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80"
                  alt="Growth chart"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-gradient-to-r from-indigo-600/10 to-purple-600/10 py-6">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <Users className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
              <h3 className="text-4xl font-bold">1150</h3>
              <p className="text-slate-400">Happy Clients</p>
            </div>
            <div>
              <Building className="w-10 h-10 text-purple-400 mx-auto mb-2" />
              <h3 className="text-4xl font-bold">5362</h3>
              <p className="text-slate-400">Products Sold</p>
            </div>
            <div>
              <Target className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-slate-400">Years Experience</p>
            </div>
            <div>
              <Award className="w-10 h-10 text-purple-400 mx-auto mb-2" />
              <h3 className="text-4xl font-bold">4.9/5</h3>
              <p className="text-slate-400">Average Rating</p>
            </div>
          </div>
        </section>
      </motion.div>

      <Footer />
    </>
  );
}
