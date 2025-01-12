import React from 'react';
import { motion } from 'framer-motion';

const ExperienceForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Add New Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Job Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., Senior Software Engineer"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Company</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., Tech Corp"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Start Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            />
          </div>
          <div>
            <label className="block text-white mb-2">End Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="Describe your role and achievements..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Experience
        </motion.button>
      </form>
    </div>
  );
};

export default ExperienceForm;