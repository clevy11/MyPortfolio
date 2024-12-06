import { GraduationCap, Languages, Trophy, User } from "lucide-react";

export const About = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-primary">About Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Background & Skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Profile</h3>
                <p className="text-gray-300">
                  A dedicated software engineer with a passion for creating efficient, scalable solutions. 
                  Experienced in full-stack development, mobile applications, and machine learning projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-gray-300">
                  Final year Software Engineering student at Adventist University of Central Africa, 
                  with a focus on modern software development practices and technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                <p className="text-gray-300">
                  Multilingual professional fluent in English, French, Kirundi, and Kinyarwanda, 
                  enabling effective communication across diverse teams and clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Interests & Activities</h3>
                <p className="text-gray-300">
                  Basketball enthusiast with a competitive spirit. Committed to continuous learning 
                  and staying updated with the latest technology trends.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Java", "C#", "C", "C++",
              "React", "Next.js", "Flutter",
              "TypeScript", "Python", "SQL",
              "Git", "Machine Learning"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-primary font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
