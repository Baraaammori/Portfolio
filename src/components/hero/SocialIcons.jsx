import { Instagram, Linkedin, Dribbble, Github } from "lucide-react";

export default function SocialIcons() {
  const socialLinks = [
    { Icon: Instagram, href: "#" },
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
                     rounded-full border border-white/30
                     text-white hover:border-orange-500 hover:text-orange-500
                     transition"
        >
          <item.Icon size={18} />
        </a>
      ))}
    </div>
  );
}

