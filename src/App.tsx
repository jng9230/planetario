import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Earth } from 'lucide-react'
import NavBar from './components/Nav'
import HeroSection from './components/Hero'
import SPINNINGCUBEWRAPPER from './components/SpinningCube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen">
            <NavBar/>
            <HeroSection/>
            {/* <SPINNINGCUBEWRAPPER/> */}
      </div>
      
    </>
  )
}

export default App
