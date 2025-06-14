import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Learning Management System",
      category: "Full Stack | Web Application",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "CSS"],
      description: "A comprehensive Learning Management System web application that allows students and instructors to manage courses, assignments, and educational content efficiently.",
      problem: "Built to streamline educational processes with user authentication, course management, and interactive learning features.",
      github: "https://github.com/Rohansaini1512/Learning-Managment-system",
      live: null,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Social Media Backend API",
      category: "Backend | Database | Security",
      techStack: ["NestJS", "MongoDB", "JWT", "Docker", "AWS S3", "Redis"],
      description: "RESTful API for LGBTQ+ social media platform with advanced authentication, real-time messaging, and content moderation features.",
      problem: "Implemented secure user authentication and scalable message queuing for real-time features.",
      github: "https://github.com/404-GS-IIIT-Kota/404-GS-Qissa",
      live: null,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Live Streaming Infrastructure",
      category: "Backend | DevOps | Monitoring",
      techStack: ["NestJS", "Docker", "Grafana", "Redis", "WebRTC", "NGINX"],
      description: "High-performance live streaming server with real-time monitoring and analytics. Supports multiple stream formats and adaptive bitrate streaming.",
      problem: "Solved latency issues and built comprehensive monitoring dashboard for stream health.",
      github: "https://github.com/yourusername/streaming-server",
      live: "https://stream-demo.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Smart Task Manager",
      category: "Full Stack | AI Integration | Cloud",
      techStack: ["React", "Node.js", "Auth0", "Gemini API", "AWS Lambda", "DynamoDB"],
      description: "AI-powered personal task manager with intelligent prioritization, deadline prediction, and automated scheduling suggestions.",
      problem: "Used Gemini API to provide contextual task insights and productivity recommendations.",
      github: "https://github.com/yourusername/smart-tasks",
      live: "https://tasks-demo.com",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of my key projects showcasing expertise in cloud infrastructure, 
            backend development, and DevOps automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-2xl`}></div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-purple-400 font-medium">
                    {project.category}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">Impact & Learning:</h4>
                  <p className="text-gray-400 text-sm">
                    {project.problem}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex-1 justify-center"
                    >
                      <ArrowUp size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Rohansaini1512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
