import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ToolsAndPlatforms from './components/ToolsAndPlatforms';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <header>
        <Navbar />
      </header>
      
      <main>
        <Hero />
        <Skills />
        <ToolsAndPlatforms />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <About />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
