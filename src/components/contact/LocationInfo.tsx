
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationInfo: React.FC = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="flex items-center space-x-4 mb-4">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity 
          }}
          className="p-3 rounded-lg bg-gradient-to-r from-neon-orange to-neon-pink"
        >
          <MapPin className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="text-white font-medium">Trichy, Tamil Nadu, India</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">
        Available for remote work and open to relocation opportunities.
      </p>
    </div>
  );
};

export default LocationInfo;
