import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import Scene3D from '@/components/3D/Scene3D';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const Home: React.FC = () => {
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = 'AJ-BAS.pdf';  // Make sure this file is in the "public" folder
  link.download = 'AJ_Baskar_Resume.pdf'; // This is the filename when downloaded
  link.setAttribute('target', '_blank');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const handleEmailContact = () => {
    window.location.href = 'mailto:ajbaskar433@gmail.com';
  };

  const handleGithubVisit = () => {
    window.open('https://github.com/AJ-BASKAR', '_blank');
  };

  const handleLinkedinVisit = () => {
    window.open('https://www.linkedin.com/in/baskar-aj', '_blank');
  };

  return (

    
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <ParticleBackground />
      
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-xl"
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="block text-white mb-2"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.8)',
                        '0 0 10px rgba(255,255,255,0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Hi, I'm
                  </motion.span>
                  <motion.span 
                    className="block gradient-text glow-text"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      textShadow: [
                        '0 0 20px #00D9FF',
                        '0 0 40px #B829FF',
                        '0 0 20px #00D9FF'
                      ]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    AJ Baskar
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                   DataScientist – simple, strong, and future-focused.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 lg:px-0"
                >
                 I specialize in turning messy datasets into meaningful insights and intelligent AI solutions — blending the art of analytics with the power of machine learning.
                </motion.p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 lg:px-0"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }} 
                  whileTap={{ scale: 0.9 }}
                  variants={pulseVariants}
                  animate="animate"
                >
                  <Button
                    onClick={handleDownloadResume}
                    size="lg"
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-lg shadow-lg shadow-neon-blue/25 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)'
                  }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link to="/projects">
                      🚀 View Projects
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex justify-center gap-4 px-4 lg:px-0"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={handleEmailContact}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={handleGithubVisit}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300"
                  >
                    <Github className="w-5 h-5 lg:w-6 lg:h-6" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={handleLinkedinVisit}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 px-4 lg:px-0"
              >
                {[
                  { value: "5+", label: "Technologies", color: "neon-blue", delay: 0 },
                  { value: "2+", label: "Years Learning", color: "neon-purple", delay: 0.5 },
                  { value: "1", label: "Major Project", color: "neon-green", delay: 1 }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    whileHover={{ 
                      scale: 1.2,
                      rotateY: 360
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, delay: stat.delay },
                      hover: { duration: 0.8 }
                    }}
                    className="text-center"
                  >
                    <motion.div 
                      className={`text-2xl lg:text-3xl font-bold text-${stat.color} mb-2`}
                      animate={{
                        textShadow: [
                          `0 0 10px var(--${stat.color})`,
                          `0 0 20px var(--${stat.color})`,
                          `0 0 10px var(--${stat.color})`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: stat.delay }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-xs lg:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative h-64 sm:h-80 lg:h-full lg:min-h-[400px] mt-8 lg:mt-0"
            >
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 217, 255, 0.3)',
                    '0 0 40px rgba(184, 41, 255, 0.3)',
                    '0 0 20px rgba(0, 217, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Scene3D type="brain" className="w-full h-full" />
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 bg-neon-blue/20 rounded-lg backdrop-blur-sm border border-neon-blue/30 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.3,
                  rotate: 180,
                  backgroundColor: 'rgba(0, 217, 255, 0.4)'
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-xl lg:text-2xl"
                >
                  ✨
                </motion.span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 25, 0],
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-4 left-4 w-12 h-12 lg:w-16 lg:h-16 bg-neon-purple/20 rounded-lg backdrop-blur-sm border border-neon-purple/30 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.3,
                  rotate: -180,
                  backgroundColor: 'rgba(184, 41, 255, 0.4)'
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl lg:text-2xl"
                >
                🦄
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden"
          whileHover={{
            borderColor: '#00D9FF',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
