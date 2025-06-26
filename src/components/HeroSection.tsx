
import { ArrowRight, Github, Linkedin, Contact, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Sparkle decoration */}
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
            SNEHA RAWAT
          </h1>
          
          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">AI Automation Intern</span> · 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"> Web Developer</span> · 
              <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-bold"> Data Analyst</span> · 
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold"> Creative Technologist</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>View Projects</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 border-3 border-gradient-to-r from-blue-600 to-purple-600 bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white/20 px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-blue-600"
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
              className="group p-4 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/sneha-rawat"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
