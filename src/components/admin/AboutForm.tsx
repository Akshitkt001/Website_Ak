import React from 'react';
import { motion } from 'framer-motion';

const AboutForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Edit About Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., John Doe"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Short Bio</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="Write a brief bio about yourself..."
          ></textarea>
        </div>

        <div>
          <label className="block text-white mb-2">Location</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., New York, USA"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Website or Portfolio</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="https://yourportfolio.com"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Social Links</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., https://linkedin.com/in/johndoe"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save About Me
        </motion.button>
      </form>
    </div>
  );
};

export default AboutForm;
