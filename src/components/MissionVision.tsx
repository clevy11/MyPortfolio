import { Target, Lightbulb } from "lucide-react";

export const MissionVision = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-black/50 p-8 rounded-lg backdrop-blur-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To leverage my diverse programming expertise and multilingual abilities to create innovative, user-centric 
                software solutions that make a meaningful impact. I am committed to pushing the boundaries of technology 
                while maintaining a focus on scalability, efficiency, and accessibility.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-black/50 p-8 rounded-lg backdrop-blur-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">My Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become a leading innovator in software development, combining my passion for technology with my 
                multicultural background to bridge gaps and create solutions that transcend boundaries. I aspire to 
                contribute to groundbreaking projects that leverage AI, mobile technology, and web development to 
                solve real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};