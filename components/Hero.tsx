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

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-blue-400 font-semibold"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">{portfolioData.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-slate-300 mb-6"
            >
              {portfolioData.title} • {portfolioData.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl"
            >
              {portfolioData.description}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center gap-3 text-slate-300">
                <HiMail className="text-blue-400 text-xl" />
                <a href={portfolioData.socialLinks.email} className="hover:text-blue-400">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <HiPhone className="text-blue-400 text-xl" />
                <span>{portfolioData.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <HiLocationMarker className="text-blue-400 text-xl" />
                <span>{portfolioData.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                View My Work
                <HiArrowNarrowRight />
              </motion.button>
              <motion.a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Connect on LinkedIn
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Yuvaraj_S_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                Download Resume
                <HiDownload />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Block Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <motion.div
              className="glass-effect rounded-lg p-6 animate-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="font-mono text-sm">
                <div className="text-slate-400 mb-4">
                  &lt;DataEngineer&gt;
                </div>
                <div className="ml-4 space-y-3">
                  <div>
                    <span className="text-purple-400">expertise</span>
                    <span className="text-white">: [</span>
                  </div>
                  <div className="ml-4 space-y-2">
                    <div>
                      <span className="text-blue-400">"Azure Data Factory"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">"Databricks"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">"PySpark"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">"SQL Server"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">"Delta Lake"</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-white">],</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-purple-400">experience</span>
                    <span className="text-white">: </span>
                    <span className="text-orange-400">3+ years</span>
                  </div>
                </div>
                <div className="mt-4 text-slate-400">
                  &lt;/DataEngineer&gt;
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <div className="text-slate-400 text-sm text-center">
            Scroll down to explore more
            <div className="text-2xl">↓</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
