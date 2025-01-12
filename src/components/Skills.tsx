import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Plus, Shield, Cpu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code2 size={24} />,
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      items: ['Node.js', 'Python', 'Java', 'GraphQL'],
    },
    {
      category: 'Database',
      icon: <Database size={24} />,
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Oracle'],
    },
    {
      category: 'DevOps',
      icon: <Globe size={24} />,
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD','Oracle Fusion'],
    },
      {
      category: 'Buiness Policies',
      icon: <Shield size={24} />,
      items: ['Procure to Pay', 'Order to Cash', 'Agile','Data privacy and security','Compliance with industry regulations'],
    },
     {
      category: 'Generative AI',
      icon: <Cpu size={24} />,
      items: ['RAG', 'Transformer', 'RLHF', 'LSTM', 'Diffusion Models'],
    },
     {
      category: 'Open source Tools',
      icon: <Settings size={24} />,
      items: ['GPT', 'BERT','TensorFlow', 'PyTorch', 'OpenAI'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
          <Link 
            to="/admin/skills"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} />
            <span>Add Skill</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
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
                className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                <div className="text-blue-500 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;