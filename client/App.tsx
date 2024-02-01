import { Outlet } from 'react-router'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
