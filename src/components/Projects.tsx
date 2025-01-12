import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Custom Redis Implementation',
    description: 'Built a custom Redis-like in-memory database with support for basic data structures and persistence',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['C++', 'Redis', 'Data Structures', 'Systems Programming'],
    github: '#',
    demo: '#',
  },
  {
    title: 'EmotiBridge AI',
    description: 'AI-powered emotion recognition system for better human-computer interaction',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Search Engine',
    description: 'Advanced search engine with natural language processing capabilities',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2',
    tags: ['Python', 'ElasticSearch', 'NLP', 'Machine Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Oracle Apps Technical - GE Vernova',
    description: 'Enterprise-level technical solutions for GE Vernova using Oracle Applications',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    tags: ['Oracle', 'PL/SQL', 'ERP', 'Enterprise Solutions'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              options={{
                max: 25,
                scale: 1.05,
                speed: 1000,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-900/30 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.github}
                      className="text-white hover:text-blue-400"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.demo}
                      className="text-white hover:text-blue-400"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;