import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 py-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold text-2xl">Hello, I'm</h2>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Buntu Levy Caleb
              </h1>
              <h2 className="text-2xl text-primary/90">Software Engineer & Full-Stack Developer</h2>
            </div>
            
            <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              A passionate developer specializing in web, mobile, and software development. 
              Fluent in multiple programming languages including Java, C#, React, Next.js, and Flutter. 
              Currently completing my Software Engineering degree at Adventist University of Central Africa.
            </p>
            <p className="mt-2 text-base text-gray-300 sm:mx-auto sm:mt-3 sm:max-w-xl sm:text-lg lg:mx-0">
              Based in Kigali, Rwanda
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="px-6 py-2" onClick={() => window.location.href = 'mailto:Buntulevycaleb@gmail.com'}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border-white/10"
                onClick={() => window.open('https://github.com/clevy11', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border-white/10"
                onClick={() => window.open('https://www.linkedin.com/in/caleb-levy-buntu-66a308321', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Java", "C#", "React", "Next.js", "Flutter", "Machine Learning"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-lg opacity-75 animate-pulse" />
              <img 
                src="./public/IMG_6367.jpg" 
                alt="Buntu Levy Caleb"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};