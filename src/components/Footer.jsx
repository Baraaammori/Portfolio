import { Mail, Phone } from "lucide-react";
import SocialIcons from "./hero/SocialIcons";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black bg-gradient-to-r uppercase from-cyan-400 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform inline-block cursor-pointer">
            Baraa
          </h2>
        </div>
        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <a href="#hero" className="text-slate-400 font-medium hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="text-slate-400 font-medium hover:text-cyan-400 transition-colors">About</a>
          <a href="#services" className="text-slate-400 font-medium hover:text-cyan-400 transition-colors">Services</a>
          <a href="#projects" className="text-slate-400 font-medium hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="text-slate-400 font-medium hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
        <div className="flex justify-center mb-8">
          <SocialIcons />
        </div>
        <div className="flex justify-center gap-8 mb-8 flex-wrap text-sm text-slate-400">
          <a href="mailto:baraaammori2004@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail size={18} />
            baraaammori2004@gmail.com
          </a>
          <a href="tel:+96181629778" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone size={18} />
            +961 81 629 778
          </a>
        </div>
        <div className="border-t border-slate-800/60 pt-6">
          <p className="text-center text-sm text-slate-500">
            Designed by @baraaammori Full Stack Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;