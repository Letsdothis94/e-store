import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer/Footer'
import Landing from './pages/landing/Landing'
import LandingBar from './pages/landing/LandingBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Landing />
      <LandingBar />
      <Footer />
    </>
  )
}

export default App
