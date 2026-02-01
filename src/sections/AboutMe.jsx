function AboutMe() {
  return (
    <section id="about-me" className="about-me-section bg-black py-12 my-15 px-4 sm:px-6 lg:px-8">
         <div>
        <h2 className="text-4xl capitalize font-bold text-center text-white mb-8">about me</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Junior full-stack web developer focused on building clean, user-friendly web applications, with experience in UI/UX principles and video editing.
        </p>         
    </div>  

    <div className="flex flex-col md:flex-row justify-center gap-10 items-center max-w-7xl mx-auto">
        <div className="img flex justify-center w-full md:w-[40%]">
            <img src="src\assets\baraa.webp" className="w-full max-w-md object-contain" alt="" />
        </div>
        <div className="description w-full md:w-[50%] flex flex-col gap-7 text-gray-400 text-justify leading-relaxed">
            <p>
                I’m a Computer Science student and aspiring full-stack web developer with a strong interest in building clean, functional, and user-focused web applications. I enjoy working across both frontend and backend, turning ideas and requirements into real, working products.
                I focus on writing clean, maintainable code and building well-structured applications using modern web technologies. I care about performance, reliability, and creating solutions that are practical, scalable, and easy to maintain over time.
                Through hands-on projects and structured learning, I continuously improve my technical skills and problem-solving abilities. My goal is to grow into a strong, well-rounded software engineer who builds reliable and impactful web solutions.
            </p>
              <div>
                <button className="bg-orange-500 hover:bg-orange-500 text-white font-bold hover:text-white px-6 md:px-9 py-2 rounded-lg transition text-sm md:text-base">
            Download CV
            </button>
              </div>
        </div>

    </div>




    </section>
  );
}

export default AboutMe;