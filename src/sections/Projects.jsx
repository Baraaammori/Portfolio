import React, { useState, useMemo } from 'react';
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    title: "Baraa Tech Web Platform",
    description: "Bilingual full-stack platform featuring CMS-managed content and secure API architecture integrated with Supabase and PostgreSQL. Developed a role-based admin dashboard featuring granular permissions, comprehensive content workflows, and full-stack CRUD functionality.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "RBAC"],
    link: "https://github.com/Baraaammori/baraatech?authuser=0"
  },
  {
    title: "Company Ratings Platform",
    description: "Full-stack employee review platform with JWT authentication, RBAC (3 roles), and PostgreSQL database via Supabase. Implemented admin dashboard with analytics, email verification, password hashing, rate limiting, and audit logging.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
    link: "https://github.com/waledayoub-77/company_ratings/tree/ratehub.12"
  },
  {
    title: "Algorithms Game",
    description: "Educational game teaching BFS, A*, and Q-Learning algorithms through interactive mazes and challenges.",
    technologies: ["React", "JavaScript", "AI"],
    link: "https://ai-puzzle-maze.vercel.app"
  },
  {
    title: "ComfyUI Image Generator",
    description: "AI-powered image generation tool with web interface supporting multiple AI models and services.",
    technologies: ["Python", "FastAPI", "AI"],
    link: "https://github.com/Baraaammori/ComfyUI-ImageGenerator"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with city search and beautiful UI displaying current weather conditions.",
    technologies: ["React", "OpenWeather API", "CSS"],
    link: "https://github.com/Baraaammori/react-weather-app"
  },
  {
    title: "Recipe Finder App",
    description: "Search and discover recipes from around the world with clean component architecture and API integration.",
    technologies: ["React", "API", "CSS"],
    link: "https://github.com/Baraaammori/react-recipe-finder"
  }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Extract unique technologies for filters
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projectsData.forEach(p => p.technologies.forEach(t => techSet.add(t)));
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter(p => p.technologies.includes(activeFilter));
  }, [activeFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  // Reset pagination if filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Get current projects slice
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="projects" className="min-h-auto md:min-h-screen flex flex-col justify-center py-24 mb-12 relative">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-blue-900/5 to-transparent -z-10"></div>
      
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-100 mb-6 tracking-tight">Featured Projects</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10 px-4">
          A showcase of my recent full-stack applications, problem-solving capabilities, and focus on modern architecture.
        </p>
      </div>

      {/* Filter Section */}
      <div className="max-w-5xl mx-auto px-4 mb-12 flex flex-wrap justify-center gap-2">
        {allTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === tech 
                ? 'bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20' 
                : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-cyan-300'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto justify-items-center w-full min-h-[500px]">
        {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title} 
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))
        ) : (
           <p className="col-span-1 md:col-span-2 lg:col-span-3 text-slate-500 italic mt-10">No projects match the selected technology filter.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-full flex items-center justify-center transition-all ${currentPage === 1 ? 'text-slate-600 cursor-not-allowed' : 'text-cyan-400 bg-slate-800 hover:bg-slate-700'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full font-bold transition-all ${
                  currentPage === i + 1 
                    ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages ? 'text-slate-600 cursor-not-allowed' : 'text-cyan-400 bg-slate-800 hover:bg-slate-700'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      )}

    </section>
  );
}

export default Projects;
