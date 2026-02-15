"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { HiCheckCircle } from "react-icons/hi";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional</span> Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="glass-effect rounded-lg p-6 md:p-8 border-l-4 border-blue-500 hover:border-cyan-500 smooth-transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-slate-400">{exp.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-300 font-semibold">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start text-slate-300 text-sm"
                    >
                      <HiCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
