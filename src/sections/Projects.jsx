import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="min-h-auto md:min-h-screen flex flex-col justify-center bg-black py-12 md:py-0 mb-12">
      <div>
        <h2 className="text-4xl font-bold text-center text-white mb-8">Projects</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Explore my recent work and personal projects showcasing my skills in web development and problem-solving.
        </p>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto justify-items-center">
        
        <ProjectCard 
          title="Algorithms Game" 
          description="Educational game teaching BFS, A*, and Q-Learning algorithms through interactive mazes and challenges."
          technologies={["React", "JavaScript", "AI"]}
          link="https://ai-puzzle-maze.vercel.app"
        />
        
        <ProjectCard 
          title="Recipe Finder App" 
          description="Search and discover recipes from around the world with clean component architecture and API integration."
          technologies={["React", "API", "CSS"]}
          link="https://github.com/Baraaammori/react-recipe-finder"
        />
        
        <ProjectCard 
          title="Weather App" 
          description="Real-time weather application with city search and beautiful UI displaying current weather conditions."
          technologies={["React", "OpenWeather API", "CSS"]}
          link="https://github.com/Baraaammori/react-weather-app"
        />
        
        <ProjectCard 
          title="Contact Manager" 
          description="Full CRUD application for managing contacts with search functionality and local storage persistence."
          technologies={["React", "LocalStorage", "CSS"]}
          link="https://github.com/Baraaammori/react-contact-manager"
        />
        
        <ProjectCard 
          title="ComfyUI Image Generator" 
          description="AI-powered image generation tool with web interface supporting multiple AI models and services."
          technologies={["Python", "FastAPI", "AI"]}
          link="https://github.com/Baraaammori/ComfyUI-ImageGenerator"
        />
        
        <ProjectCard 
          title="Healthcare Landing Page" 
          description="Modern landing page for healthcare services with doctor search and elegant responsive design."
          technologies={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Baraaammori/frontend_demo"
        />

      </div>
    </section>
  );
}

export default Projects;
