
export const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">✨</span>
                SYSTEM INFO
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate technologist and data enthusiast with expertise spanning AI automation, 
                front-end development, and data analytics. Currently revolutionizing business 
                processes through intelligent automation systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🌐 Multilingual</h4>
                <p className="text-blue-700 dark:text-blue-300">English · Hindi · German</p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🔍 Current Focus</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• AI-powered automation</li>
                  <li>• Data visualization</li>
                  <li>• Front-end development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-700">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                <span className="text-2xl mr-3">💡</span>
                Mission Statement
              </h3>
              <blockquote className="text-purple-700 dark:text-purple-300 italic text-lg leading-relaxed">
                "Transforming complex data into actionable insights while automating the future, 
                one algorithm at a time."
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Internships</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">9+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
