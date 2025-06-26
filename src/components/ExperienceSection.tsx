
export const ExperienceSection = () => {
  const experiences = [
    {
      emoji: "🤖",
      role: "AI Automation Intern",
      company: "Ribble Rewards",
      period: "May 2025 – July 2025",
      description: "Designed intelligent automation systems using Make.com, ChatGPT, Apollo, LinkedIn API, Google Sheets, and Gmail to improve marketing and outreach efficiency.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      emoji: "🐍",
      role: "Python Developer Intern",
      company: "NativeSoftTech",
      period: "Feb 2025 – April 2025",
      description: "Developed Python scripts for data processing and a Flask-based web app integrated with SQLite. Demonstrated strong API integration and debugging.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      emoji: "💻",
      role: "Web Developer Intern",
      company: "Octanet Services Pvt. Ltd.",
      period: "Aug 2024 – Oct 2024",
      description: "Created interactive features like a 3D landing page, Tic-Tac-Toe game, and a calculator. Practiced efficient code delivery, UI design, and performance tuning.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      emoji: "🎨",
      role: "Frontend Developer",
      company: "StickerHub",
      period: "June 2024 – Aug 2024",
      description: "Built front-end of an e-commerce website using HTML, CSS, JavaScript, and Bootstrap. Enhanced user experience with real-time feedback and responsive design.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      emoji: "📊",
      role: "Data Analyst Intern",
      company: "Mentorness",
      period: "June 2024 – July 2024",
      description: "Performed data analysis projects like hotel reservations and YouTube song trends. Created dashboards using Power BI/Tableau and presented findings clearly to stakeholders.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            📈 Experience Journey
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            My professional journey through diverse tech roles and impactful projects
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } group`}
              >
                {/* Enhanced Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 z-10 shadow-lg group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-1 bg-blue-500 rounded-full animate-pulse"></div>
                </div>

                {/* Enhanced Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:rotate-1 overflow-hidden`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl animate-bounce">{exp.emoji}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
                        {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
