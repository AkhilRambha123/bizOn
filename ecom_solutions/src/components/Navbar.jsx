import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-0 bg-navy/90 backdrop-blur z-50">
      <nav className="mx-auto max-w-7xl px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-white text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold">
            Bz
          </span>
          <span className="font-semibold text-lg">BizOn</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About Us</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>

          {/* Search */}
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white/10 border border-white/20 rounded-full px-4 py-1 outline-none"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy flex flex-col gap-4 px-6 pb-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white/10 border border-white/20 rounded px-3 py-1"
          />
        </div>
      )}
    </header>
  );
}
