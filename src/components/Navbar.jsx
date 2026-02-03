function Navbar() {
  return (
    <nav className="bg-black  text-white shadow-lg px-4 sm:px-6 lg:px-8">
      <div className="ml-4 md:ml-20">
        <div className="flex items-center justify-between h-16">
          <h1 className="inline-block text-2xl md:text-3xl font-bold font-mono uppercase bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" >Baraa</h1>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className=" text-gray-300 hover:text-orange-500 transition">Home</a></li>
            <li><a href="#about-me" className=" text-gray-300 hover:text-orange-500 transition">About</a></li>
            <li><a href="#services" className=" text-gray-300 hover:text-orange-500 transition">Services</a></li>
            <li><a href="#projects" className=" text-gray-300 hover:text-orange-500 transition">Projects</a></li>
            <li><a href="#contact" className=" text-gray-300 hover:text-orange-500 transition">Contact</a></li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-500 hover:text-white px-6 md:px-9 py-2 rounded-lg transition text-sm md:text-base">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;