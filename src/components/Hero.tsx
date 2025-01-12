import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.h1 
          className="text-6xl font-bold text-white mb-8"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Akshit Kumar Tiwari
        </motion.h1>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="mailto:tiwariakshitkumar@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="w-8 h-8 hover:glow" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/akshit-kumar-tiwari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8 hover:glow" />
          </motion.a>
          <motion.a
            href="https://github.com/Akshitkt001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="w-8 h-8 hover:glow" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;