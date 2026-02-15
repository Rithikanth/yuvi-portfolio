"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 glass-effect border-b border-slate-700"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            YS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ color: "#3b82f6" }}
                className="text-slate-300 hover:text-blue-400 smooth-transition"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <motion.a
              href="/resume.pdf"
              download="Yuvaraj_S_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
              title="Download Resume"
            >
              <HiDownload className="text-lg" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download="Yuvaraj_S_Resume.pdf"
              className="block btn-secondary flex items-center gap-2 w-fit"
              onClick={() => setIsOpen(false)}
            >
              <HiDownload /> Download Resume
            </a>
            <a href="#contact" className="block btn-primary" onClick={() => setIsOpen(false)}>
              Get In Touch
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
