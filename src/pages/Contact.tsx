import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationInfo from '@/components/contact/LocationInfo';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 dark:from-gray-900 dark:via-rose-900 dark:to-purple-900 pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Get in Touch
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"
              animate={{ 
                scaleX: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              Ready to collaborate or discuss opportunities? Drop me a message and let's connect!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <ContactInfo />
              <LocationInfo />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm text-gray-400 dark:text-gray-500"
        >
          © {new Date().getFullYear()} AJ-Baskar🦄. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
};

export default Contact;
