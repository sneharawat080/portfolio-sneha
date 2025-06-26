
import { Github, Linkedin, Mail, ArrowRight, Contact } from 'lucide-react';

export const Footer = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            "Passionate about creating stunning user interfaces, automating processes with AI, 
            and analyzing data to drive insights. Always eager to learn and grow as a data enthusiast."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Contact Me
              <Contact className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/sneharawat080"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sneha-rawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sneharawat080@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Sneha Rawat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
