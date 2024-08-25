import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Footer />
    </>
  )
}

export default App
