import Navbar from './components/Navbar'
import Hero from './sections/HeroC'
import Services from './sections/Services'
import AboutMe from './sections/AboutMe'
import ContactMe from './sections/ContactMe'
import Footer from './components/Footer'
function App() {


  return (
    <div className="App bg-black overflow-x-hidden">
     <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
