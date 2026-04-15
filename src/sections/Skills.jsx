import React from 'react';
import { Layers, Database, Code2, Server, Terminal, Wrench, Languages, Cpu } from 'lucide-react';

const skillsData = [
  {
    title: "Frontend",
    icon: <Layers className="text-cyan-400" size={32} strokeWidth={1.5} />,
    items: ["React.js", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Vite", "TanStack Query", "Zustand", "Responsive Design"]
  },
  {
    title: "Backend",
    icon: <Server className="text-blue-400" size={32} strokeWidth={1.5} />,
    items: ["Node.js", "Express.js", "NestJS", "Python", "Flask", "Django", "FastAPI", "REST API Design"]
  },
  {
    title: "Languages",
    icon: <Code2 className="text-purple-400" size={32} strokeWidth={1.5} />,
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP"]
  },
  {
    title: "Databases",
    icon: <Database className="text-emerald-400" size={32} strokeWidth={1.5} />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Local Storage API"]
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="text-amber-400" size={32} strokeWidth={1.5} />,
    items: ["Git & GitHub", "npm", "CI/CD (Vercel, Render)", "VS Code"]
  },
  {
    title: "Architecture",
    icon: <Wrench className="text-rose-400" size={32} strokeWidth={1.5} />,
    items: ["JWT Authentication", "RBAC", "SSR/CSR/SSG", "SOLID Principles", "Clean Architecture", "MVC", "Agile/Scrum"]
  },
  {
    title: "Specialized",
    icon: <Cpu className="text-pink-400" size={32} strokeWidth={1.5} />,
    items: ["AI Integration (Models & APIs)", "Component-Based Architecture", "Algorithm Design"]
  }
];

function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-100 mb-6 tracking-tight">Technical Skills</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto px-4">
          A comprehensive breakdown of the tools, languages, and architectures I use to bring ideas to reality.
        </p>         
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {skillsData.map((category, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-3xl hover:-translate-y-2 hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 p-3 shadow-inner shadow-cyan-500/20 group-hover:bg-slate-700/80 transition-colors flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 rounded-lg group-hover:border-slate-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
