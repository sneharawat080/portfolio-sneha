
export const ExperienceSection = () => {
  const experiences = [
    {
      emoji: "🤖",
      role: "AI Automation Intern",
      company: "Ribble Rewards",
      period: "May 2025 – July 2025",
      description: "Designed intelligent automation systems using Make.com, ChatGPT, Apollo, LinkedIn API, Google Sheets, and Gmail to improve marketing and outreach efficiency."
    },
    {
      emoji: "🐍",
      role: "Python Developer Intern",
      company: "NativeSoftTech",
      period: "Feb 2025 – April 2025",
      description: "Developed Python scripts for data processing and a Flask-based web app integrated with SQLite. Demonstrated strong API integration and debugging."
    },
    {
      emoji: "💻",
      role: "Web Developer Intern",
      company: "Octanet Services Pvt. Ltd.",
      period: "Aug 2024 – Oct 2024",
      description: "Created interactive features like a 3D landing page, Tic-Tac-Toe game, and a calculator. Practiced efficient code delivery, UI design, and performance tuning."
    },
    {
      emoji: "🎨",
      role: "Frontend Developer",
      company: "StickerHub",
      period: "June 2024 – Aug 2024",
      description: "Built front-end of an e-commerce website using HTML, CSS, JavaScript, and Bootstrap. Enhanced user experience with real-time feedback and responsive design."
    },
    {
      emoji: "📊",
      role: "Data Analyst Intern",
      company: "Mentorness",
      period: "June 2024 – July 2024",
      description: "Performed data analysis projects like hotel reservations and YouTube song trends. Created dashboards using Power BI/Tableau and presented findings clearly to stakeholders."
    },
    {
      emoji: "🌐",
      role: "Web Developer",
      company: "CoderOne",
      period: "June 2024 – August 2024",
      description: "Completed full-stack web development training and contributed to a learning platform project. Balanced personal learning with team-based deliverables."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            📈 Experience Log
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{exp.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                      {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
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
