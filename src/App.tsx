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
      <div className="w-screen h-screen bg-black">
        <div className="bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <NavBar/>
            </div>
        </div>
        <div className=" bg-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <HeroSection/>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
