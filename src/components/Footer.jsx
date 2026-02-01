import { Mail, Phone } from "lucide-react";
import SocialIcons from "./hero/SocialIcons";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r uppercase from-orange-400 to-red-500 bg-clip-text text-transparent">
            Baraa
          </h2>
        </div>
        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <a href="#hero" className="text-gray-300 hover:text-orange-500 transition">Home</a>
          <a href="#services" className="text-gray-300 hover:text-orange-500 transition">Services</a>
          <a href="#about" className="text-gray-300 hover:text-orange-500 transition">About me</a>
          <a href="#portfolio" className="text-gray-300 hover:text-orange-500 transition">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-orange-500 transition">Contact me</a>
        </nav>
        <div className="flex justify-center mb-8">
          <SocialIcons />
        </div>
        <div className="flex justify-center gap-8 mb-8 flex-wrap text-sm text-gray-400">
          <a href="mailto:baraaammori2004@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition">
            <Mail size={18} />
            baraaammori2004@gmail.com
          </a>
          <a href="tel:+96181629778" className="flex items-center gap-2 hover:text-orange-500 transition">
            <Phone size={18} />
            +961 81 629 778
          </a>
        </div>
        <div className="border-t border-zinc-900 pt-6">
          <p className="text-center text-sm text-gray-500">
            Designed by @baraaammori Full Stack Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;