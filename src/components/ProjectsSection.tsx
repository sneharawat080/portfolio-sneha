
export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Automation System",
      status: "ACTIVE",
      tags: ["AI Automation", "API Integration"],
      tech: ["Make.com", "Apollo", "LinkedIn API", "JS", "Gmail"],
      description: "Automated investor outreach via email sequencing and data parsing."
    },
    {
      title: "Competitive Intelligence Automation",
      status: "ACTIVE",
      tags: ["Python", "Data Scraping"],
      tech: ["Python", "Google Sheets", "Data Scraping"],
      description: "Scraped social content for competitor tracking, alerting, and content trends."
    },
    {
      title: "Machine Learning GUI",
      status: "ACTIVE",
      tags: ["ML", "Web App"],
      tech: ["Python", "Streamlit", "Scikit-learn"],
      description: "Upload CSVs, apply ML models like SVM, KNN, visualize results."
    },
    {
      title: "StickerHub Website",
      status: "ACTIVE",
      tags: ["Web Dev", "E-commerce"],
      tech: ["HTML", "CSS", "JS"],
      description: "E-commerce site for custom device skins and sticker products."
    },
    {
      title: "YouTube Songs Analysis",
      status: "ACTIVE",
      tags: ["Data Analysis", "Visualization"],
      tech: ["Power BI", "Excel"],
      description: "Dashboard showcasing engagement trends, seasonality, and top content."
    },
    {
      title: "Mario Math Game",
      status: "ACTIVE",
      tags: ["Game Dev", "Web Dev"],
      tech: ["HTML5 Canvas", "JS", "CSS"],
      description: "Fun game to practice math via Mario-themed gameplay."
    },
    {
      title: "Python Error Detector",
      status: "ACTIVE",
      tags: ["ML", "NLP"],
      tech: ["Python", "ML", "NLP"],
      description: "Identifies and explains Python syntax and logic errors in uploaded scripts."
    },
    {
      title: "Sales Forecasting Dashboard",
      status: "ACTIVE",
      tags: ["Data Analysis", "Forecasting"],
      tech: ["Python", "Power BI", "Excel"],
      description: "Built for trend analysis and predictive sales insights."
    },
    {
      title: "IoT Blind Assistance Stick",
      status: "ACTIVE",
      tags: ["IoT", "Hardware"],
      tech: ["Arduino Uno", "Sensors", "C++"],
      description: "Navigation stick with ultrasonic sensor feedback for the visually impaired."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            📂 Project Archive
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                ➤ {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
