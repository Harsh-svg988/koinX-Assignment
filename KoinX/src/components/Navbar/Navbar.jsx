import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          KoinX
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/crypto-taxes" className="text-gray-700 hover:text-blue-600">
            Crypto Taxes
          </Link>
          <Link to="/free-tools" className="text-gray-700 hover:text-blue-600">
            Free Tools
          </Link>
          <Link to="/resource-center" className="text-gray-700 hover:text-blue-600">
            Resource Center
          </Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
