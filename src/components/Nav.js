import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-400 text-black">
      <div>
        <Link to="/" className="font-bold text-lg">My Portfolio</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/about" className="text-black hover:text-gray-400">About</Link>
        <Link to="/projects" className="text-black hover:text-gray-400">Projects</Link>
        <Link to="/contact" className="text-black hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
};
export default Nav;