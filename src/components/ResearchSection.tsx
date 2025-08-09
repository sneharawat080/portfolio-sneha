
export const ResearchSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🔬 Research Papers
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">📘</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  AI-Driven Framework for Real-Time Gravitational Wave Anomaly Detection and Predictive Cosmic Event Forecasting
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 text-sm font-medium px-3 py-1 rounded-full">
                    IN PROGRESS
                  </span>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                    2025
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Abstract
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Explores the revolutionary role of AI and ML in analyzing astronomical data 
                  for exoplanet detection and cosmic exploration.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ML Integration",
                    "Data Frameworks",
                    "Astrophysical Challenges",
                    "Exploration Models"
                  ].map((area, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
