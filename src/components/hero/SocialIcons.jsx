import { Instagram, Linkedin, Dribbble, Github } from "lucide-react";

export default function SocialIcons() {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/baraa_ammori1?igsh=b2c0aHFsNGp0dGtt&utm_source=qr" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/baraa-ammori/" },
    { Icon: Dribbble, href: "#" },
    { Icon: Github, href: "https://github.com/Baraaammori" }
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center
                     rounded-full border border-slate-700
                     text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10
                     transition-all duration-300"
        >
          <item.Icon size={18} />
        </a>
      ))}
    </div>
  );
}

