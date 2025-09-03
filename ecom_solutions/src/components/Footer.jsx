import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / About */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-yellow-500">BizON</h1>
          <p className="text-gray-400">
            Helping you kickstart and grow your ecommerce business with ease and automation.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-indigo-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-indigo-500 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-500 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>

          {/* Home page sections */}
          <HashLink smooth to="/#services" className="hover:text-indigo-500 transition-colors">
            Features
          </HashLink>
          <HashLink smooth to="/#our-videos" className="hover:text-indigo-500 transition-colors">
            Our Videos
          </HashLink>
          <HashLink smooth to="/#testimonials" className="hover:text-indigo-500 transition-colors">
            Testimonials
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-indigo-500 transition-colors">
            Contact
          </HashLink>

          {/* Full pages */}
          <HashLink smooth to="/about" className="hover:text-indigo-500 transition-colors">
            About Us
          </HashLink>
          <HashLink smooth to="/services" className="hover:text-indigo-500 transition-colors">
            Services Page
          </HashLink>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: support@bizon.com</p>
          <p className="text-gray-400">Phone: +91 12345 67890</p>
          <p className="text-gray-400">Address: 123, Ecommerce Street, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} BizON. All rights reserved.
      </div>
    </footer>
  );
}
