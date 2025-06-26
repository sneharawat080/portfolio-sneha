
import { useState } from 'react';

export const SkillsSection = () => {
  const skillCategories = {
    programming: {
      title: 'Programming',
      icon: '💻',
      skills: ['Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    dataTools: {
      title: 'Data Tools',
      icon: '📊',
      skills: ['Power BI', 'Excel', 'SQLite'],
      color: 'from-green-500 to-emerald-500'
    },
    devTools: {
      title: 'Dev Tools',
      icon: '🛠️',
      skills: ['Git/GitHub', 'Flask', 'Make.com', 'Appify', 'Arduino', 'Socket.io', 'Swing'],
      color: 'from-purple-500 to-violet-500'
    },
    designTools: {
      title: 'Design Tools',
      icon: '🎨',
      skills: ['Canva', 'UI/UX', 'Prompt Writing'],
      color: 'from-pink-500 to-rose-500'
    },
    domains: {
      title: 'Domains',
      icon: '🌐',
      skills: ['AI/ML', 'Web Development', 'IoT', 'Data Analysis', 'API Integration', 'Automation', 'Version Control'],
      color: 'from-yellow-500 to-orange-500'
    },
    softSkills: {
      title: 'Soft Skills',
      icon: '🤝',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Critical Thinking', 'Adaptability', 'Time Management'],
      color: 'from-indigo-500 to-purple-500'
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            🛠️ Technical Arsenal
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning development, design, and data science
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
