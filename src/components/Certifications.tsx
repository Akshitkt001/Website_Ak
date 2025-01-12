import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    date: '2024',
  },
  {
    title: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: '2024',
  },
  {
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    issuer: 'Oracle',
    date: '2024',
  },
   {
    title: 'Oracle Cloud Infrastructure for Sunbird Ed Specialty',
    issuer: 'Oracle',
    date: '2024',
  },
  {
    title: 'Fabric Analytics Engineer Associate',
    issuer: 'Microsoft',
    date: '2024',
  },
  {
    title: 'Collaboration Tools and Methods',
    issuer: 'Genpact',
    date: '2024',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{cert.title}</h3>
              <div className="text-center">
                <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;