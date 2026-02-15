"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowNarrowRight,
  HiDownload,
} from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Feel free to reach out and
            let's discuss how I can help with your data engineering needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <motion.a
            href={portfolioData.socialLinks.email}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-effect rounded-lg p-6 text-center hover:border-blue-500 border border-slate-700 smooth-transition"
          >
            <HiMail className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 text-sm break-all">
              {portfolioData.email}
            </p>
          </motion.a>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-lg p-6 text-center hover:border-cyan-500 border border-slate-700 smooth-transition"
          >
            <HiPhone className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-slate-400 text-sm">{portfolioData.phone}</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-lg p-6 text-center hover:border-green-500 border border-slate-700 smooth-transition"
          >
            <HiLocationMarker className="text-4xl text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-slate-400 text-sm">{portfolioData.location}</p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Follow My Work
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              LinkedIn
              <HiArrowNarrowRight />
            </motion.a>
            <motion.a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              GitHub
            </motion.a>
            <motion.a
              href={portfolioData.socialLinks.email}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Email Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Yuvaraj_S_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              Download Resume
              <HiDownload />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
