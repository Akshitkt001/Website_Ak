import React from 'react';
import { motion } from 'framer-motion';

const ProjectsForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Project Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., AI-Based Web App"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="Describe the project and your role..."
          ></textarea>
        </div>

        <div>
          <label className="block text-white mb-2">Technologies Used</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., React, Node.js, Python"
          />
        </div>

        <div>
          <label className="block text-white mb-2">GitHub Link</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="https://github.com/yourusername/project"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Live Demo Link</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="https://project-live-demo.com"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Project
        </motion.button>
      </form>
    </div>
  );
};

export default ProjectsForm;
