import Navbar from './components/Navbar'
import Hero from './sections/HeroC'
import Services from './sections/Services'
import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import ContactMe from './sections/ContactMe'
import Footer from './components/Footer'
function App() {


  return (
    <div className="App min-h-screen">
     <Navbar />
      <div className="flex flex-col gap-8 md:gap-0">
        <Hero />
        <Services />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  )
}

export default App
