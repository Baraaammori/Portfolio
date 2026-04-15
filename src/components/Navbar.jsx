function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 shadow-lg px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <h1 className="inline-block text-2xl md:text-3xl font-black font-sans uppercase tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
            Baraa
          </h1>
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-slate-300 hover:text-cyan-400 text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 md:px-8 py-2.5 rounded-full font-medium shadow-lg shadow-cyan-500/20 transform hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;