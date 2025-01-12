import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src="dist/assets/1727504151494 (1).jpeg"
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <User className="text-blue-500" size={24} />
              <p className="text-gray-300">Senior Associate at Genpact</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" size={24} />
              <p className="text-gray-300">tiwariakshitkumar@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500" size={24} />
              <p className="text-gray-300">Noida, India</p>
            </div>
            <p className="text-gray-300 mt-4">
              Experienced Software Engineer with expertise in building scalable applications
              and implementing complex systems. Passionate about AI/ML and cloud technologies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;