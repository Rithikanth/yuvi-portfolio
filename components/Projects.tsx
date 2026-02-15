"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { HiExternalLink } from "react-icons/hi";

export default function Projects() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Notable <span className="gradient-text">Projects</span>
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
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-effect rounded-lg overflow-hidden hover:border-blue-500 border border-slate-700 smooth-transition group"
            >
              <div className="p-8">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 smooth-transition">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-slate-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-500 flex-shrink-0 mt-1">
                          ▸
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="mb-6 grid md:grid-cols-2 gap-4">
                    {Object.entries(project.metrics).map(
                      ([metric, value]) => (
                        <div
                          key={metric}
                          className="bg-slate-800/50 rounded p-4 border border-slate-700"
                        >
                          <p className="text-slate-400 text-sm">{metric}</p>
                          <p className="text-xl font-bold text-cyan-400">
                            {value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
