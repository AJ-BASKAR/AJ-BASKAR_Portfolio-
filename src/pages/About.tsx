
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const educationData = [
    {
      degree: "M.Sc Data Science",
      institution: "Bharathidasan University, Trichy",
      period: "2023 - 2025",
      status: "Completed",
      icon: "🎓"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "National College, Trichy",
      period: "2020 - 2023",
      status: "Completed",
      icon: "💻"
    }
  ];

  const languages = [
    { name: "Tamil", flag: "🏴󠁩󠁮󠁴󠁮󠁿", proficiency: "Native" },
    { name: "English", flag: "🇺🇸", proficiency: "Fluent" }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 dark:from-slate-900 dark:via-teal-900 dark:to-emerald-900 pt-20">
      <ParticleBackground />
      
      {/* Enhanced background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 left-20 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Enhanced Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                textShadow: [
                  '0 0 20px #00D9FF',
                  '0 0 40px #10B981',
                  '0 0 20px #00D9FF'
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              About Me
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
          </motion.div>

          {/* Enhanced Bio Section */}
          <motion.div variants={itemVariants} className="glass-effect rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity 
              }}
            />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl font-bold text-white mb-6"
                  animate={{
                    color: ['#ffffff', '#10B981', '#ffffff']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  My Journey
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                  whileInView={{
                    opacity: [0.7, 1],
                    x: [20, 0]
                  }}
                  transition={{ duration: 1 }}
                >
                  I aspire to join a reputed company as a fresher to enhance my skills and contribute to its success. 
                  My passion for data science drives me to continuously learn and explore new technologies that can 
                  transform raw data into meaningful insights.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                  whileInView={{
                    opacity: [0.7, 1],
                    x: [20, 0]
                  }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  I have completed my Master's in Data Science, where I built a strong foundation in machine learning algorithms, 
                  statistical analysis, and data visualization techniques. I’m passionate about leveraging data to solve real-world problems and
                   help organizations make informed,impactful decisions.

                </motion.p>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-dashed border-neon-blue/30"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border-4 border-dashed border-emerald-500/30"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border-2 border-dotted border-teal-400/30"
                  />
                  <motion.div 
                    className="absolute inset-12 rounded-full bg-gradient-to-br from-neon-blue/20 to-emerald-500/20 backdrop-blur-sm flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(16, 185, 129, 0.3)',
                        '0 0 40px rgba(0, 217, 255, 0.3)',
                        '0 0 20px rgba(16, 185, 129, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.span 
                      className="text-6xl"
                      animate={{
                        rotateY: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      👨‍💻
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h2 
              className="text-3xl font-bold text-center text-white mb-12"
              animate={{
                textShadow: [
                  '0 0 10px rgba(16, 185, 129, 0.5)',
                  '0 0 20px rgba(20, 184, 166, 0.8)',
                  '0 0 10px rgba(16, 185, 129, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Education Timeline
            </motion.h2>
            
            <div className="relative">
              {/* Enhanced timeline line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-emerald-500 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0, 217, 255, 0.5)',
                    '0 0 20px rgba(16, 185, 129, 0.8)',
                    '0 0 10px rgba(0, 217, 255, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="space-y-12">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5
                    }}
                    whileInView={{
                      x: [index % 2 === 0 ? -50 : 50, 0],
                      opacity: [0, 1]
                    }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div 
                        className="glass-effect rounded-2xl p-6 relative overflow-hidden"
                        whileHover={{
                          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
                          animate={{ 
                            opacity: [0, 0.3, 0],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center space-x-4 mb-4">
                            <motion.span 
                              className="text-3xl"
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: index * 0.5
                              }}
                            >
                              {edu.icon}
                            </motion.span>
                            <div>
                              <motion.h3 
                                className="text-xl font-bold text-white"
                                animate={{
                                  color: ['#ffffff', '#10B981', '#ffffff']
                                }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity,
                                  delay: index * 0.8
                                }}
                              >
                                {edu.degree}
                              </motion.h3>
                              <p className="text-neon-blue font-medium">{edu.institution}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">{edu.period}</span>
                            <motion.span 
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                edu.status === 'Completed' 
                                  ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                                  : 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30'
                              }`}
                              animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: index * 0.3
                              }}
                            >
                              {edu.status}
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced timeline dot */}
                    <motion.div 
                      className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-neon-blue to-emerald-500 rounded-full border-4 border-gray-900 z-10"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 0 10px rgba(0, 217, 255, 0.5)',
                          '0 0 20px rgba(16, 185, 129, 0.8)',
                          '0 0 10px rgba(0, 217, 255, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Languages */}
          <motion.div variants={itemVariants} className="glass-effect rounded-3xl p-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity 
              }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl font-bold text-center text-white mb-8"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(16, 185, 129, 0.5)',
                    '0 0 20px rgba(20, 184, 166, 0.8)',
                    '0 0 10px rgba(16, 185, 129, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Languages
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)'
                    }}
                    whileInView={{
                      y: [30, 0],
                      opacity: [0, 1],
                      rotateX: [90, 0]
                    }}
                    transition={{ 
                      duration: 1,
                      delay: index * 0.3
                    }}
                    className="glass-effect rounded-2xl p-6 text-center relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                      animate={{ 
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.8
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="text-4xl mb-4"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotateY: [0, 360]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        {lang.flag}
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-white mb-2"
                        animate={{
                          color: ['#ffffff', '#10B981', '#ffffff']
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 1.2
                        }}
                      >
                        {lang.name}
                      </motion.h3>
                      <motion.p 
                        className="text-neon-blue font-medium"
                        animate={{
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.8
                        }}
                      >
                        {lang.proficiency}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
