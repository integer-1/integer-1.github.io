import Home from './screens/Home.tsx'
import About from './screens/About.tsx'
import Projects from './screens/Projects.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Contact from './components/Contact.tsx'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
