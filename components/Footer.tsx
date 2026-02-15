"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-slate-700 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-2xl font-bold gradient-text mb-2">YS</h3>
            <p className="text-slate-400 text-sm">
              Senior Data Engineer • Azure • Databricks
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 smooth-transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 smooth-transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 smooth-transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 smooth-transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h4 className="text-white font-semibold mb-4">Highlights</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>📊 100+ ETL Pipelines Built</p>
              <p>☁️ 3+ Years Cloud Experience</p>
              <p>🏆 Multiple Awards</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Yuvaraj S. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Crafted with Next.js • Tailwind CSS • Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
