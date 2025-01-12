import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'Senior Associate',
    company: 'Genpact India Pvt. Ltd.',
    duration: '2024 - Present',
    description: 'Worked as an Oracle App Technical Consultant on the GE Vernova Project, specializing in Oracle EBS and Fusion Cloud integrations, customizations, and technical solutions to optimize business processes.',
  },
  {
    title: 'Data Automation and Analysis Intern',
    company: 'Springer Capital',
    duration: '2024 - 2024',
    description: 'Developed efficient data solutions and collaborative tools using Power Platform, SharePoint, Power BI, and React, enhancing accessibility, visualization, and team productivity.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Experience</h2>
          <Link 
            to="/admin/experience"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} />
            <span>Add Experience</span>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="mb-8 ml-12 relative"
            >
              <div className="absolute -left-16 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transform transition-all duration-500 hover:scale-125 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <BriefcaseIcon className="text-white" size={16} />
              </div>
              <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-gray-400">{exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;