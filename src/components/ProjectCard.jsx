function ProjectCard({title, description, technologies, link}) {
  return (
    <div className="project-card flex w-full max-w-sm flex-col gap-4 justify-between p-6 bg-neutral-950 rounded-lg shadow-lg border border-neutral-800 hover:border-orange-500 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-orange-500 font-bold capitalize text-xl">{title}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <line x1="9" x2="9" y1="3" y2="21"/>
          </svg>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs px-3 py-1 bg-neutral-900 text-orange-400 rounded-full border border-neutral-800">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 font-semibold text-sm flex items-center gap-2 transition-colors"
      >
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" x2="21" y1="14" y2="3"/>
        </svg>
      </a>
    </div>
  );
}

export default ProjectCard;
