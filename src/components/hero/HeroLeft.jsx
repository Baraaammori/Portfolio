import React from "react";
import SocialIcons from "./SocialIcons";

function  HeroLeft() {
    return (
        <div className="flex-1 max-w-4xl h-screen flex flex-col justify-center gap-4 md:gap-8 ml-4 md:ml-20 relative px-4 md:px-0">
           <div className="background clip-star rotate-45 w-130 h-130 bg-neutral-900 rounded-full absolute opacity-5 bg-orange-400 blur-3xl z-0"></div>
           
           <div className="relative z-10">
            <p className="capitalize text-gray-500 text-base md:text-xl">hi i am </p>
           <p className="capitalize text-gray-400 text-xl md:text-3xl font-bold">Baraa Ammori</p>
           </div>
           <p className="capitalize text-orange-500 text-3xl md:text-6xl font-bold relative z-10">Full Stack Developer</p>
           <div className="icons relative z-10">
            <SocialIcons />
           </div>
           
           <div className="buttons h-auto md:h-10 flex flex-col md:flex-row gap-3 md:gap-4 relative z-10">
            <button className="bg-orange-500 text-white border border-none rounded-lg px-6 md:px-8 py-2 text-sm md:text-base">Hire Me</button>
            <button className="bg-black text-white border rounded-lg px-6 md:px-7 py-2 text-sm md:text-base">Download CV</button>
           </div>

           <div className="info bg-zinc-900 opacity-70 flex flex-col md:flex-row border rounded-lg gap-4 md:gap-6 mt-4 md:mt-8 w-full md:w-xl relative z-10">
            <div className="experience  rounded-lg p-4 md:p-6 flex-1 flex flex-col items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-orange-500">1+</h3>
                <p className="text-gray-300 text-sm md:text-base mt-2">Experiences</p>
            </div>

            <div className="projects  rounded-lg p-4 md:p-6 flex-1 flex flex-col items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-orange-500">5+</h3>
                <p className="text-gray-300 text-sm md:text-base mt-2">Project done</p>
            </div>
            
            <div className="satisfied  rounded-lg p-4 md:p-6 flex-1 flex flex-col items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-orange-500">5+</h3>
                <p className="text-gray-300 text-sm md:text-base mt-2">Happy Clients</p>
            </div>  
           </div>

        </div>
    );

}

export default HeroLeft;