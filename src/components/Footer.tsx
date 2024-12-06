import { Github, Linkedin, Mail, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Buntu Levy Caleb</h3>
            <p className="text-gray-400 mb-4">
              Software Engineer specializing in full-stack development, mobile applications, 
              and machine learning solutions.
            </p>
            <p className="text-gray-400">
              Based in Kigali, Rwanda
            </p>
          </div>

        
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:Buntulevycaleb@gmail.com" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Buntulevycaleb@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+250792548195" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +250 792 548 195
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/clevy11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/caleb-levy-buntu-66a308321" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            {currentYear} Buntu Levy Caleb. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Software Engineer | Full-Stack Developer | Mobile App Developer
          </p>
        </div>
      </div>
    </footer>
  );
};