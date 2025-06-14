
import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project idea, want to discuss DevOps best practices, 
                or just want to say hello, I'd love to hear from you. I'm currently open 
                to new opportunities and exciting collaborations.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:sainirohan830@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-200">
                      Email Me
                    </div>
                    <div className="text-gray-400 text-sm">sainirohan830@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan-saini-9b3060257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <Linkedin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                      LinkedIn
                    </div>
                    <div className="text-gray-400 text-sm">Connect with me professionally</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Rohansaini1512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg">
                    <Github className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-green-400 transition-colors duration-200">
                      GitHub
                    </div>
                    <div className="text-gray-400 text-sm">Check out my code</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-2xl border border-purple-500/20">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://drive.google.com/file/d/1pDFE1Quwvz-RvcxU_rmwvZ6Pl4eudkU0/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm"
                >
                  📄 Download Resume
                </a>
                <a
                  href="https://hashnode.com/@Rohansaini1512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  📝 Read My Blog
                </a>
                <a
                  href="https://github.com/Rohansaini1512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200 text-sm"
                >
                  💻 GitHub Projects
                </a>
                <a
                  href="https://www.linkedin.com/in/rohan-saini-9b3060257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm"
                >
                  🔗 LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
