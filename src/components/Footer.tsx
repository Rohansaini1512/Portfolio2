import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
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
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Rohan Saini
            </div>
            <p className="text-gray-400 leading-relaxed">
              DevOps Engineer passionate about building scalable systems and cloud-native solutions. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rohansaini1512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-saini-9b3060257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sainirohan830@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://drive.google.com/file/d/1pDFE1Quwvz-RvcxU_rmwvZ6Pl4eudkU0/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://hashnode.com/@Rohansaini1512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rohansaini1512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Open Source
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  Back to Top <ArrowUp size={16} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Rohan Saini. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
