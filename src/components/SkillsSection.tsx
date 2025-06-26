
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
      color: "blue"
    },
    {
      title: "Data Tools",
      skills: ["Power BI", "Tableau", "Excel", "SQLite"],
      color: "green"
    },
    {
      title: "Dev Tools",
      skills: ["Git/GitHub", "Flask", "Make.com", "Appify", "Arduino", "Socket.io", "Swing"],
      color: "purple"
    },
    {
      title: "Design Tools",
      skills: ["Canva", "UI/UX", "Prompt Writing"],
      color: "pink"
    },
    {
      title: "Domains",
      skills: ["AI/ML", "Web Development", "IoT", "Data Analysis", "API Integration", "Automation", "Version Control"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🛠️ Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(category.color)} hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
