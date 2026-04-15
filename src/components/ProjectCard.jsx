function ProjectCard({title, description, technologies, link}) {
  return (
    <div className="group glass-panel flex w-full max-w-[400px] flex-col gap-5 justify-between p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 hover:border-cyan-500/30">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-slate-100 font-bold capitalize text-xl tracking-tight group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
          <div className="bg-slate-800/50 p-2 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <line x1="9" x2="9" y1="3" y2="21"/>
            </svg>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed border-b border-slate-700/50 pb-4 line-clamp-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map((tech, index) => (
            <span key={index} className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-colors w-max"
      >
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" x2="21" y1="14" y2="3"/>
        </svg>
      </a>
    </div>
  );
}

export default ProjectCard;
