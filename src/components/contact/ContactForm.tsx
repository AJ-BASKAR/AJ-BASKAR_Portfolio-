
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"
        animate={{ 
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity 
        }}
      />
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
        
        {isSubmitted && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="mb-6 p-4 bg-neon-green/20 border border-neon-green/30 rounded-lg"
          >
            <p className="text-neon-green font-medium">Message sent successfully! 🎉</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="space-y-2"
          >
            <Label htmlFor="name" className="text-gray-300">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-gray-800/50 border-gray-600 text-white focus:border-neon-blue transition-all duration-300"
              placeholder="Your full name"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="space-y-2"
          >
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-gray-800/50 border-gray-600 text-white focus:border-neon-purple transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="space-y-2"
          >
            <Label htmlFor="message" className="text-gray-300">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="bg-gray-800/50 border-gray-600 text-white focus:border-neon-green transition-all duration-300 resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-neon-blue/25"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
