import React from "react";
import SocialIcons from "./SocialIcons";

function HeroLeft() {
    return (
        <div className="flex-1 w-full max-w-4xl min-h-screen flex flex-col justify-center gap-6 md:gap-10 relative px-4 md:px-8 pt-10 md:pt-20">
           {/* Abstract Glow Effects */}
           <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen animate-pulse"></div>
           <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
           
           <div className="relative z-10 flex flex-col gap-2 relative">
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md w-max mb-4">
                 <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                 <p className="uppercase text-cyan-300 text-xs md:text-sm font-semibold tracking-wider">Available for work</p>
             </div>
             <p className="capitalize text-slate-400 text-lg md:text-2xl font-light">hi, i am </p>
             <h2 className="capitalize text-slate-100 text-4xl md:text-6xl font-black tracking-tight">Baraa Ammori</h2>
             <h3 className="capitalize text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl md:text-5xl font-bold mt-2">Full Stack Developer</h3>
           </div>
           
           <p className="text-slate-400 max-w-lg text-sm md:text-base leading-relaxed hidden sm:block relative z-10">
             I architect and build scalable web platforms using modern technologies. Passionate about creating seamless user experiences and robust backend systems.
           </p>
           
           <div className="icons relative z-10 mt-2">
            <SocialIcons />
           </div>
           
           <div className="buttons flex flex-col sm:flex-row gap-4 relative z-10 mt-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20 border-none rounded-full px-8 py-3 text-sm md:text-base font-semibold transform hover:-translate-y-1 transition-all duration-300">
                Explore My Work
            </button>
            <button className="glass-panel text-white hover:bg-slate-700/50 rounded-full px-8 py-3 text-sm md:text-base font-semibold transform hover:-translate-y-1 transition-all duration-300">
                Download CV
            </button>
           </div>

           <div className="info glass-panel rounded-2xl flex flex-row flex-wrap border border-slate-700/50 gap-4 mt-8 w-full md:max-w-2xl relative z-10 divide-x divide-slate-700/50">
            <div className="experience p-4 md:p-6 flex-1 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/5 transition-colors rounded-l-2xl">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">1+</h3>
                <p className="text-slate-400 text-xs md:text-sm mt-2 font-medium tracking-wide uppercase">Years Experience</p>
            </div>

            <div className="projects p-4 md:p-6 flex-1 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/5 transition-colors">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">5+</h3>
                <p className="text-slate-400 text-xs md:text-sm mt-2 font-medium tracking-wide uppercase">Projects Done</p>
            </div>
            
            <div className="satisfied p-4 md:p-6 flex-1 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/5 transition-colors rounded-r-2xl">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">5+</h3>
                <p className="text-slate-400 text-xs md:text-sm mt-2 font-medium tracking-wide uppercase">Happy Clients</p>
            </div>  
           </div>

        </div>
    );
}

export default HeroLeft;