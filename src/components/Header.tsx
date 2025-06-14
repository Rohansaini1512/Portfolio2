
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Rohansaini1512" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rohan-saini-9b3060257/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sainirohan830@gmail.com"
               className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-800">
              <a href="https://github.com/Rohansaini1512" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rohan-saini-9b3060257/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sainirohan830@gmail.com"
                 className="text-gray-300 hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
