
import { useState } from 'react';

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap(category => 
      category.skills.map(skill => ({ skill, category: category.title, color: category.color }))
    );
  };

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return getAllSkills();
    }
    const category = skillCategories[selectedCategory];
    return category.skills.map(skill => ({ skill, category: category.title, color: category.color }));
  };

  const filteredSkills = getFilteredSkills();

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

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Skills
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredSkills.map((item, index) => (
            <div
              key={`${item.skill}-${index}`}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.skill}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {item.category}
                </span>
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
