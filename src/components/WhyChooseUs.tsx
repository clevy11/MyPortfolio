import { Brain, Globe2, Rocket, Users } from "lucide-react";

const strengths = [
  {
    title: "Technical Versatility",
    description: "Proficient in multiple programming languages and frameworks, from low-level C/C++ to modern web and mobile development with React and Flutter.",
    icon: Brain
  },
  {
    title: "Multicultural Communication",
    description: "Fluent in four languages (English, French, Kirundi, Kinyarwanda), enabling effective collaboration with diverse teams and clients worldwide.",
    icon: Globe2
  },
  {
    title: "Innovation & Growth Mindset",
    description: "Passionate about learning new technologies and applying them to solve real-world problems, as demonstrated in my machine learning and IoT projects.",
    icon: Rocket
  },
  {
    title: "Team Player & Leader",
    description: "Combines technical expertise with strong interpersonal skills, fostering collaborative environments and delivering successful project outcomes.",
    icon: Users
  }
];

export const WhyChooseUs = () => {
  return (
    <div className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary">Why Work With Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bringing Value Through Excellence
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            A dedicated software engineer combining technical expertise with a passion for innovation
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative bg-white/5 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-white">{strength.title}</h3>
                </div>
                <p className="mt-4 text-gray-300">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            "I believe in creating software that not only meets technical requirements but also 
            delivers real value to users. My diverse background and continuous learning approach 
            enable me to bring fresh perspectives to every project."
          </p>
        </div>
      </div>
    </div>
  );
};