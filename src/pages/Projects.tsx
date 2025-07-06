'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';

const projects = [
  {
    title: 'Resume Screening System',
    description: 'Built an NLP-based tool to screen resumes based on job descriptions.',
    techStack: ['Python', 'Streamlit', 'NLTK', 'Sklearn'],
    link: 'https://github.com/your-profile/ATS',
    icon: '📚',
  },
  {
    title: 'AI Healthcare Recommender',
    description: 'Predicts diseases and suggests treatments based on symptoms.',
    techStack: ['Python', 'Streamlit', 'Scikit-learn'],
    link: 'https://github.com/your-profile/ai-healthcare-recommender',
    icon: '💊',
  },
  {
    title: 'Student Marks Portal',
    description: 'Web app for internal marks & attendance management.',
    techStack: ['Django', 'MySQL', 'Tailwind'],
    link: 'https://github.com/your-profile/student-marks-portal',
    icon: '📝',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-purple-900 via-black to-gray-900 pt-20 overflow-hidden">
      <ParticleBackground />

      {/* Background Parallax Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 1 + 0.5;
          return (
            <motion.div
              key={`bg-star-${i}`}
              className="absolute bg-white/30 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Foreground Animated Stars */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const duration = Math.random() * 6 + 4;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={`fg-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${size * 4}px rgba(255,255,255,0.6)`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
                y: [`0px`, `${Math.random() * 20 - 10}px`],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Shooting Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full z-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            x: [0, 300],
            y: [0, 150],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 10 + 5,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Mist overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0 pointer-events-none" />

      {/* Gradient Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay opacity-30 blur-[120px] animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-overlay opacity-30 blur-[120px] animate-pulse z-0" />

      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.div variants={item} className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              My Projects
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mx-auto rounded-full animate-pulse mb-6"
              animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              A selection of work combining creativity and code.
            </p>
          </motion.div>

          {/* Project Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl group hover:shadow-purple-500/30 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-lg pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col space-y-3">
                  <motion.div
                    className="text-4xl w-14 h-14 flex items-center justify-center bg-white/10 text-white rounded-xl border border-white/20 shadow-inner"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: 'spring', damping: 10 }}
                    title={project.title}
                  >
                    {project.icon || '📦'}
                  </motion.div>

                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>

                  <p className="text-gray-300 text-sm">{project.description}</p>

                  {project.techStack && (
                    <div className="text-gray-400 text-sm">
                      <strong>Tech:</strong> {project.techStack.join(', ')}
                    </div>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-cyan-400 hover:underline text-sm mt-2"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
