import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';




interface SkillCardProps {
  title: string;
  skills: string[];
  color: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, color, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden h-full bg-slate-800/30 dark:bg-slate-900/30 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:to-blue-500/10 before:blur-3xl before:rounded-2xl"
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.9, delay: index * 0.3, ease: 'easeOut' }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.04 }}
    >
      <motion.div className="relative z-10 p-6 md:p-8 h-full">
        <motion.h3
          className={`text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r ${color} bg-clip-text text-transparent animate-pulse`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h3>

        <motion.div className="space-y-4">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              className="group flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-md hover:shadow-cyan-500/30 hover:backdrop-blur-2xl hover:bg-white/20 transition duration-300 ease-in-out hover:ring-1 hover:ring-cyan-400/30"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: skillIndex * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-white font-medium tracking-wide"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: skillIndex * 0.15 }}
              >
                {skill}
              </motion.span>

              <motion.div
                className="w-24 h-2 bg-white/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '6rem' }}
                transition={{ duration: 1.2, delay: skillIndex * 0.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${80 + Math.random() * 20}%` }}
                  transition={{ duration: 1.6, delay: skillIndex * 0.25 + 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQLite', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
    },
    
    {
      title: 'Visualization & BI',
      skills: ['Power BI', 'Excel', 'Matplotlib', 'Seaborn'],
      color: 'from-orange-500 to-red-500',
    },

{
      title: 'Tools & Technologies',
      skills: [
        'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
        'Scikit-learn', 'TensorFlow', 'LSTM',
        'Firebase', 'Git', 'Docker', 'AWS'
      ],
      color: 'from-purple-500 to-pink-500',
    },


    {
      title: 'Web & Deployment',
      skills: ['Streamlit','Django', 'Flask', 'Heroku', 'Render', 'Git', 'GitHub', 'Jupyter Notebook', 'Docker'],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    // <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 pt-20">
    //   <ParticleBackground />

      <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
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
            ease: "easeOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient"
            
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full animate-pulse mb-6"
            animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          <motion.p
            className="text-slate-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A comprehensive overview of my technical skills and areas of expertise.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              color={category.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
