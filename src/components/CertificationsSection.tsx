
export const CertificationsSection = () => {
  const certifications = [
    {
      title: "IBM – Data Science & AI Certification",
      icon: "🎓",
      status: "✅",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Google – Cloud & Analytics Professional",
      icon: "☁️",
      status: "✅",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Forage – Virtual Work Simulations (Multiple Companies)",
      icon: "💻",
      status: "✅",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "University of Michigan – Data Structures & Python Basics",
      icon: "🐍",
      status: "✅",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Coursera – Front-end Development",
      icon: "🌐",
      status: "✅",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "SWAYAM – Language Course (Offered by Forage)",
      icon: "📚",
      status: "✅",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🎓 Certifications
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Professional achievements and continuous learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-6 flex-1">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-600 dark:text-green-400 text-2xl">
                    {cert.status}
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    Verified
                  </span>
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
