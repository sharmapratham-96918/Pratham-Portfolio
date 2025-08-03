import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-indigo-600">Pratham Sharma</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-slate-700 hover:text-indigo-600">About</a>
            <a href="#projects" className="text-slate-700 hover:text-indigo-600">Projects</a>
            <a href="#experience" className="text-slate-700 hover:text-indigo-600">Experience</a>
            <a href="#contact" className="text-slate-700 hover:text-indigo-600">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#about" className="block py-2 text-slate-700 hover:text-indigo-600">About</a>
          <a href="#projects" className="block py-2 text-slate-700 hover:text-indigo-600">Projects</a>
          <a href="#experience" className="block py-2 text-slate-700 hover:text-indigo-600">Experience</a>
          <a href="#contact" className="block py-2 text-slate-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
