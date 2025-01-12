import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const SkillsForm = () => {
  const [skillItems, setSkillItems] = useState(['']);

  const addSkillItem = () => {
    setSkillItems([...skillItems, '']);
  };

  const removeSkillItem = (index: number) => {
    setSkillItems(skillItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Add New Skill Category</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Category Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="e.g., Frontend"
          />
        </div>
        
        <div>
          <label className="block text-white mb-2">Skills</label>
          {skillItems.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newItems = [...skillItems];
                  newItems[index] = e.target.value;
                  setSkillItems(newItems);
                }}
                className="flex-1 px-4 py-2 bg-blue-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Enter skill"
              />
              {skillItems.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkillItem(index)}
                  className="p-2 text-red-400 hover:text-red-300"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSkillItem}
            className="mt-2 flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <Plus size={20} />
            <span>Add Skill</span>
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Skill Category
        </motion.button>
      </form>
    </div>
  );
};

export default SkillsForm;