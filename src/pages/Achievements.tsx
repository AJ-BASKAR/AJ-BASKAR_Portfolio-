// src/components/Achievements.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  AlignCenterVertical as CertificateIcon,
  Star,
} from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      title: "NPTEL Big Data",
      issuer: "NPTEL",
      period: "(Aug–Oct 2024)",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Foundation of Cloud IoT Edge ML",
      issuer: "NPTEL",
      period: "(Feb–Apr 2024)",
      icon: Star,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "HackerRank Python",
      issuer: "HackerRank",
      period: "2025",
      icon: CertificateIcon,
      color: "from-green-500 to-teal-500",
    },
  ];

  const achievements = [
    "M.Sc. Data Science",
    "Bachelor of Computer Applications",
    "Successfully completed Machine Learning Internship at CodSoft",
    "Developed and deployed multiple ML projects with real-world applications",
    "Built real-time Resume Screening system",
    "Proficient in multiple programming languages and data science tools",
    "Strong foundation in problem-solving and analytical thinking",
    "Experience with cloud deployment platforms (Heroku, Render, Streamlit Cloud)",
    "Expertise in data visualization and business intelligence tools",
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* 🌠 Shooting Stars Background (Option 2) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(6)].map((_, i) => {
          const delay = Math.random() * 10 + 3;
          return (
            <motion.div
              key={`shooting-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                x: [0, -300],
                y: [0, 300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* 🌟 Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent dark:text-cyan-400 dark:bg-none">
            Achievements & Certifications
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Recognition of excellence and continuous learning in data science and technology
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 🎓 Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <CertificateIcon className="text-cyan-400 mr-3" size={28} />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-slate-100 dark:bg-slate-800/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 shadow-xl"
                >
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center mr-4`}
                    >
                      <cert.icon size={24} className="text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                          {cert.issuer}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {cert.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🏆 Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <Trophy className="text-cyan-400 mr-3" size={28} />
              Key Achievements
            </h3>

            <div className="bg-slate-100 dark:bg-slate-800/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start group cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                    />
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
