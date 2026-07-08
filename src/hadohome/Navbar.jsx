import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a0f1d] border-b border-white/5 sticky top-0 z-50">
      <div className="px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 border border-slate-500/50 rounded-md p-2 bg-slate-950/30">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
            <img
              src="https://hado.co.in/assets/hado_global_services_logo.jpg"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="hidden sm:block text-lg font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Hado Global Services
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-wider">
          <a
            href="#home"
            className="text-purple-500 hover:text-purple-400"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-white hover:text-slate-300 flex items-center gap-1"
          >
            Services
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>

          <a href="#about" className="text-white hover:text-slate-300">
            About
          </a>

          <Link
            to="/contact"
            className="text-white hover:text-cyan-400"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 text-sm text-white border border-white/20 rounded-full hover:bg-white/10"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-pink-500 text-white rounded-full"
          >
            Get Started
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-t border-white/10 px-6 py-5">
          <div className="flex flex-col gap-5 text-white font-medium">

            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              className="w-full border border-white/20 py-2 rounded-full"
            >
              Login
            </button>

            <button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              className="w-full py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}