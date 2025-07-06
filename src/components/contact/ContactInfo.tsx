
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
  color: string;
}

const ContactInfo: React.FC = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ajbaskar433@gmail.com',
      href: 'mailto:ajbaskar433@gmail.com',
      color: 'text-neon-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9659582688',
      href: 'tel:+919659582688',
      color: 'text-neon-purple'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'AJ-BASKAR',
      href: 'https://github.com/AJ-BASKAR',
      color: 'text-neon-green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'baskar-aj',
      href: 'https://www.linkedin.com/in/baskar-aj',
      color: 'text-neon-pink'
    }
  ];

  return (
    <div className="glass-effect rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        {contactInfo.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              x: 10
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: index * 0.5 
              }}
              className={`p-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 ${contact.color}`}
            >
              <contact.icon className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="text-gray-400 text-sm">{contact.label}</p>
              <p className="text-white font-medium group-hover:text-neon-blue transition-colors">
                {contact.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
