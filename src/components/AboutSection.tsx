
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate DevOps and backend engineer currently studying at IIIT Kota, where I serve as 
                Technical Secretary and GDSC Cloud Lead. My journey in technology is driven by a deep fascination 
                with cloud-native architectures and scalable system design.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building robust backend systems, implementing CI/CD pipelines, and deploying 
                applications on cloud platforms. My experience spans from microservices architecture to 
                container orchestration with Kubernetes.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Current Roles</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Technical Secretary @ IIIT Kota
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  GDSC Cloud Lead
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Open Source Contributor
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Core Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-purple-400 font-medium">DevOps & Cloud</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Docker & Kubernetes</li>
                    <li>• AWS (EC2, S3, EKS)</li>
                    <li>• Jenkins & GitHub Actions</li>
                    <li>• Terraform & Helm</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-medium">Development</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Node.js & NestJS</li>
                    <li>• React & TypeScript</li>
                    <li>• Java & Spring Boot</li>
                    <li>• MongoDB & MySQL</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Fun Fact</h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not architecting cloud solutions or debugging pipelines, you'll find me exploring 
                the latest DevOps tools, contributing to open-source projects, or sharing knowledge through 
                technical blogs. I believe the best way to learn is by building and teaching others! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
