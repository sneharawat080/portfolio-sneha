
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            "Passionate about creating stunning user interfaces, automating processes with AI, 
            and analyzing data to drive insights. Always eager to learn and grow as a data enthusiast."
          </p>

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
