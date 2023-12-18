import Home from './screens/Home.tsx'
import About from './screens/About.tsx'
import Projects from './screens/Projects.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Contact from './screens/Contact.tsx'
import References from './screens/References.tsx'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <References/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
