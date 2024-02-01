import Footer from './components/Footer.tsx'
import NavBar from './components/NavBar.tsx'
import Home from './screens/Home.tsx'
import About from './screens/About.tsx'
import Projects from './screens/Projects.tsx'
import References from './screens/References.tsx'
import Contact from './screens/Contact.tsx'

function App() {
  return (
    <div id="app">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <References />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
