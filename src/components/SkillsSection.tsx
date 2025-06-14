
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
        { name: "Bash", level: 85 }
      ]
    },
    {
      title: "DevOps & Cloud",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS", level: 90 },
        { name: "Jenkins", level: 80 },
        { name: "GitHub Actions", level: 90 },
        { name: "Terraform", level: 75 },
        { name: "Helm", level: 70 },
        { name: "Grafana", level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 95 },
        { name: "NestJS", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 75 }
      ]
    },
    {
      title: "Databases & Storage",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 85 },
        { name: "AWS S3", level: 90 },
        { name: "DynamoDB", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Jira", level: 80 },
        { name: "Slack", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development and DevOps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 p-6"
            >
              <div className={`h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-6`}></div>
              
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
