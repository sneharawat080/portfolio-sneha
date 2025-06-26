
import { ArrowRight, Github, Linkedin, Contact, Sparkles, Mail } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-50 dark:bg-purple-900/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Simple decoration */}
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            SNEHA RAWAT
          </h1>
          
          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">AI Automation Intern</span> · 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> Web Developer</span> · 
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> Data Analyst</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="group relative flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>View Projects</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-10 py-5 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Contact Me</span>
              <Contact className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/sneharawat080"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-8 h-8 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/sneha-rawat"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-8 h-8 transition-transform duration-300" />
            </a>
            <a
              href="mailto:sneharawat080@gmail.com"
              className="group p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail className="w-8 h-8 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
