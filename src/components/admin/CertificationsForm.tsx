import React from 'react';
import { motion } from 'framer-motion';

const CertificationsForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Add New Certification</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Certification Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., AWS Certified Solutions Architect"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Issuing Organization</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., Amazon Web Services"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Issue Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Expiration Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">Certificate Link</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., https://www.certificates.com/certificate-link"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Certification
        </motion.button>
      </form>
    </div>
  );
};

export default CertificationsForm;
