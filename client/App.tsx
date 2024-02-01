import { Outlet } from 'react-router'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div id="app">
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
