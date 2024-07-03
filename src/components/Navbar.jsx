import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Quiz Platform</Link>
        <button 
          className={`md:hidden block text-white ${isOpen ? 'hidden' : 'block'}`}
          onClick={toggleNavbar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <li className={`md:opacity-100 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
            <Link to="/" className="block md:inline-block py-2 px-4 hover:underline" onClick={toggleNavbar}>Home</Link>
          </li>
          <li className={`md:opacity-100 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isOpen ? '200ms' : '100ms' }}>
            <Link to="/create-quiz" className="block md:inline-block py-2 px-4 hover:underline" onClick={toggleNavbar}>Create Quiz</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
