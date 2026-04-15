function AboutMe() {
  return (
    <section id="about" className="about-me-section py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/5 to-transparent -z-10"></div>
        <div>
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-100 mb-6 tracking-tight">About Me</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16 px-4">
            Junior full-stack web developer focused on building clean, user-friendly web applications, with experience in UI/UX principles and scalable architectures.
        </p>         
    </div>  

    <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-20 items-center max-w-7xl mx-auto mt-8">
        <div className="img flex justify-center w-full md:w-[45%] relative">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-2xl transform rotate-3"></div>
            
            {/* Terminal Window Mockup */}
            <div className="w-full relative z-10 glass-panel border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl shadow-cyan-900/30 font-mono text-sm">
                <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-4 text-xs text-slate-400">guest@baraa-server:~</span>
                </div>
                <div className="p-5 bg-slate-900/90 text-slate-300 min-h-[250px] flex flex-col gap-2">
                    <p><span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> whoami</p>
                    <p className="text-slate-400">baraa_ammori</p>
                    
                    <p className="mt-2"><span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> current_status</p>
                    <p className="text-blue-300">Building scalable web solutions...</p>
                    
                    <p className="mt-2"><span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> systemctl status dev-drive</p>
                    <p className="text-green-400">● dev-drive.service - Developer Drive</p>
                    <p className="text-slate-400 pl-4">Loaded: loaded (/etc/systemd/...)</p>
                    <p className="text-slate-400 pl-4">Active: <span className="text-green-400 font-bold">active (running)</span> since {new Date().getFullYear()}</p>
                    
                    <p className="mt-4 flex items-center"><span className="text-green-400">➜</span> <span className="text-cyan-400 ml-1">~</span> <span className="w-2 h-4 bg-slate-300 ml-2 animate-pulse"></span></p>
                </div>
            </div>
            
        </div>
        <div className="description w-full md:w-[50%] flex flex-col gap-7 text-slate-300 text-justify leading-relaxed">
            <p className="text-lg font-light">
                I’m a Computer Science student and aspiring full-stack web developer with a strong interest in building clean, functional, and user-focused web applications. I enjoy working across both frontend and backend, turning complex requirements into seamless digital products.
            </p>
            <p className="text-lg font-light text-slate-400">
                I focus on writing clean, maintainable code and building well-structured applications using modern web technologies like <span className="text-cyan-400 font-medium">React, Next.js, Node.js</span>, and <span className="text-blue-400 font-medium">PostgreSQL</span>. I care strongly about performance, reliability, and creating scalable solutions that outlast trends.
            </p>
              <div className="mt-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                  Download CV
                </button>
              </div>
        </div>

    </div>

    </section>
  );
}

export default AboutMe;