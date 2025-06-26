
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
      color: "blue",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Tools",
      skills: ["Power BI", "Tableau", "Excel", "SQLite"],
      color: "green",
      icon: "📊",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Dev Tools",
      skills: ["Git/GitHub", "Flask", "Make.com", "Appify", "Arduino", "Socket.io", "Swing"],
      color: "purple",
      icon: "🛠️",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Design Tools",
      skills: ["Canva", "UI/UX", "Prompt Writing"],
      color: "pink",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Domains",
      skills: ["AI/ML", "Web Development", "IoT", "Data Analysis", "API Integration", "Automation", "Version Control"],
      color: "orange",
      icon: "🚀",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Critical Thinking", "Adaptability"],
      color: "indigo",
      icon: "🧠",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50",
      green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/50",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800/50",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/50",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🛠️ Skills Arsenal
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${getColorClasses(category.color)} hover:scale-110 transition-all duration-200 cursor-default shadow-md hover:shadow-lg`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
