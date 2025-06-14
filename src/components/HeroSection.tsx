
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Starry background */}
      <div className="absolute inset-0">
        {/* Generate random stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Rohan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer & DevOps Engineer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications and cloud infrastructure. 
            I love turning complex problems into elegant solutions.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Rohansaini1512"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rohansaini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rohan@example.com"
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
