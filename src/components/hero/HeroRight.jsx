function HeroRight() {
    return (
        <div className="hidden md:flex flex-1 relative h-full items-center justify-center mt-20 w-full">
            <div className="relative w-full max-w-lg perspective-1000">
                <div className="relative z-10 glass-panel border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 transform rotate-[-5deg] hover:rotate-[0deg] transition-transform duration-700">
                    {/* Mac OS Header */}
                    <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="ml-4 text-xs text-slate-400 font-mono tracking-wider">developer_profile.jsx</span>
                    </div>
                    {/* Code Body */}
                    <div className="p-6 bg-slate-900/90 font-mono text-sm shadow-inner">
                        <div className="flex flex-col gap-2 opacity-90">
                            <p><span className="text-pink-400">import</span> <span className="text-cyan-300">SoftwareEngineer</span> <span className="text-pink-400">from</span> <span className="text-amber-300">'@baraa/core'</span>;</p>
                            <p className="mt-4"><span className="text-blue-400">const</span> <span className="text-cyan-300">profile</span> <span className="text-pink-400">=</span> {'{'}</p>
                            <div className="pl-6 flex flex-col gap-1 border-l border-slate-700/50 ml-2">
                                <p><span className="text-slate-300">name:</span> <span className="text-green-300">'Baraa Ammori'</span>,</p>
                                <p><span className="text-slate-300">role:</span> <span className="text-green-300">'Full Stack Developer'</span>,</p>
                                <p><span className="text-slate-300">skills:</span> <span className="text-pink-400">[</span></p>
                                <div className="pl-6 flex gap-2 flex-wrap">
                                    <span className="text-amber-300">'React'</span>,
                                    <span className="text-amber-300">'Next.js'</span>,
                                    <span className="text-amber-300">'Node.js'</span>,
                                    <span className="text-amber-300">'PostgreSQL'</span>,
                                    <span className="text-amber-300">'Tailwind CSS'</span>
                                </div>
                                <p><span className="text-pink-400">]</span>,</p>
                                <p><span className="text-slate-300">focus:</span> <span className="text-green-300">'Building scalable web platforms'</span></p>
                            </div>
                            <p>{'}'};</p>
                            <p className="mt-4"><span className="text-pink-400">export default</span> <span className="text-cyan-300">profile</span>;</p>
                        </div>
                    </div>
                </div>
                {/* Abstract geometric accents */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-600/20 backdrop-blur-xl border border-white/10 rounded-lg transform rotate-45 animate-pulse"></div>
            </div>
        </div>
    );
}

export default HeroRight;