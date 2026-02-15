"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { HiStar, HiAcademicCap } from "react-icons/hi";

export default function Awards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="awards" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </motion.div>

        {/* Awards */}
        <div className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {portfolioData.awards.map((award) => (
              <motion.div
                key={award.id}
                variants={itemVariants}
                className="glass-effect rounded-lg p-6 border-t-2 border-t-yellow-500 hover:border-t-cyan-500 smooth-transition"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <HiStar className="text-yellow-500 text-3xl flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {award.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">
                      {award.year}
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-effect rounded-lg p-6 border-l-4 border-l-green-500 hover:border-l-cyan-500 smooth-transition flex items-start gap-4"
              >
                <HiAcademicCap className="text-green-500 text-3xl flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  <p className="text-cyan-400 text-sm mt-1">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
