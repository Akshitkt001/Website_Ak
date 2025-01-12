import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-blue-900/50 backdrop-blur-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white flex items-center gap-2 hover:text-blue-400">
            <ArrowLeft size={20} />
            <span>Back to Site</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-white hover:text-blue-400">
              <Home size={20} />
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;