import Navbar from './components/Navbar'
import Hero from './sections/HeroC'
import Services from './sections/Services'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import ContactMe from './sections/ContactMe'
import Footer from './components/Footer'
function App() {


  return (
    <div className="App bg-black overflow-x-hidden">
     <Navbar />
      <div className="flex flex-col gap-8 md:gap-0">
        <Hero />
        <Services />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  )
}

export default App
