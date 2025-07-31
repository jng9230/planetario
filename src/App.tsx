import { useState, useEffect } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Earth } from 'lucide-react'
import NavBar from './components/Nav'
import HeroSection from './components/Hero'
import SPINNINGCUBEWRAPPER from './components/SpinningCube'
import { ListingCardSkeleton } from './components/ListingCardSkeleton'
import { ListingCard } from './components/ListingCard'
import { data } from './utils/dummyData'
import type { Listing } from './utils/dummyData'
import ListingCardWrapper from './components/ListingCardWrapper'
import ListingCardSkeletonWrapper from './components/ListingCardSkeletonWrapper'

function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 second delay
    }, []);
    return (
    <>
        <div className="w-screen min-h-screen">
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
        <div className="bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {
                    isLoading ?
                        <ListingCardSkeletonWrapper/>
                    :
                        <ListingCardWrapper data={data}/>
                }
            </div>
        </div>
        </div>
      
    </>
  )
}

export default App
