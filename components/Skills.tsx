"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technical</span> Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glass-effect rounded-lg p-6 hover:border-blue-500 border border-slate-700 smooth-transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {category}
              </h3>
              <div className="space-y-2">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 text-slate-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass-effect rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">Expertise Level</h4>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Cloud Data Engineering (Azure)</li>
                <li>✓ ETL/ELT Pipeline Development</li>
                <li>✓ Big Data Technologies</li>
                <li>✓ Database Architecture & Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-3">Specializations</h4>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Data Warehouse Design</li>
                <li>✓ Lakehouse Architecture</li>
                <li>✓ Real-time Data Processing</li>
                <li>✓ Pipeline Monitoring & Optimization</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
