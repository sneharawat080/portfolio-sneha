
export const CertificationsSection = () => {
  const certifications = [
    {
      title: "IBM – Data Science & AI Certification",
      icon: "🎓",
      status: "✅"
    },
    {
      title: "Google – Cloud & Analytics Professional",
      icon: "☁️",
      status: "✅"
    },
    {
      title: "IITs – Advanced Programming Concepts",
      icon: "💻",
      status: "✅"
    },
    {
      title: "University of Michigan – Data Structures & Python Basics",
      icon: "🐍",
      status: "✅"
    },
    {
      title: "Coursera – Front-end Development",
      icon: "🌐",
      status: "✅"
    },
    {
      title: "Forage – Virtual Work Experience Programs",
      icon: "💼",
      status: "✅"
    },
    {
      title: "Accenture, Tata – Data Analytics & Business Insight",
      icon: "📊",
      status: "✅"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🎓 Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{cert.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <span className="text-green-600 dark:text-green-400 text-2xl">
                    {cert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
