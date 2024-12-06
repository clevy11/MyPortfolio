import { Code2, Database, Home, Brain, Server, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Court Management System",
    description: "A comprehensive web application built with C# for efficient court case management and scheduling.",
    icon: Server,
    tech: ["C#", ".NET", "SQL Server"]
  },
  {
    title: "Smart Home Mobile App",
    description: "IoT-based Flutter application for monitoring home sensors, including light and vibration detection.",
    icon: Home,
    tech: ["Flutter", "IoT", "Firebase"]
  },
  {
    title: "Rice Factory MIS",
    description: "Management Information System for MS Rice Factory, streamlining operations and inventory management.",
    icon: Database,
    tech: ["Full Stack", "Database Design"]
  },
  {
    title: "Machine Learning Projects",
    description: "Developed ML models for breast cancer detection and police criminality prediction using advanced algorithms.",
    icon: Brain,
    tech: ["Python", "ML", "Data Science"]
  },
  {
    title: "Web Development",
    description: "Expert in creating responsive, modern web applications using React and Next.js frameworks.",
    icon: Code2,
    tech: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Mobile Development",
    description: "Specialized in cross-platform mobile app development using Flutter framework.",
    icon: Smartphone,
    tech: ["Flutter", "Dart", "Mobile UI"]
  }
];

export const Services = () => {
  return (
    <div className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary">Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects & Expertise
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            A showcase of my technical projects and areas of expertise in software development
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};