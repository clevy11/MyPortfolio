import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary">Get In Touch</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Me
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <a 
              href="mailto:Buntulevycaleb@gmail.com"
              className="relative block bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-4 text-xl font-medium text-white">Email</h3>
              </div>
              <p className="text-gray-300">Buntulevycaleb@gmail.com</p>
            </a>
          </div>

          {/* Phone */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <a 
              href="tel:+250792548195"
              className="relative block bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-4 text-xl font-medium text-white">Phone</h3>
              </div>
              <p className="text-gray-300">+250 792 548 195</p>
            </a>
          </div>

          {/* Location */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-4 text-xl font-medium text-white">Location</h3>
              </div>
              <p className="text-gray-300">Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-6">
          <a 
            href="https://github.com/clevy11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300"
          >
            <Github className="h-6 w-6 text-primary" />
          </a>
          <a 
            href="https://www.linkedin.com/in/caleb-levy-buntu-66a308321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300">
            Available for freelance opportunities and full-time positions.
            <br />
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};
