import { Monitor, Code, Database, Server, Layers, Workflow } from "lucide-react";

const iconsMap = {
  Monitor: Monitor,
  Code: Code,
  Database: Database,
  Server: Server,
  Layers: Layers,
  Workflow: Workflow
};

function Card({title , description, iconName = "Monitor"}) {
  const IconComponent = iconsMap[iconName] || Monitor;

  return (
    <div className="group glass-panel flex w-full max-w-sm items-center flex-col gap-5 justify-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 hover:border-cyan-500/30 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-800/80 p-3 shadow-inner shadow-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors flex items-center justify-center text-cyan-400 group-hover:text-cyan-300">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-slate-100 font-bold capitalize text-xl tracking-tight group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default Card;