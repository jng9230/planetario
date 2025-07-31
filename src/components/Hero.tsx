import SPINNINGCUBEWRAPPER from './SpinningCube' 
import { Button } from './ui/button';
import "./styles/twinkling-lights.css"
import makeStars from "../lib/twinkling-stars"
import { useEffect } from 'react';

const HeroSection = () => {
    useEffect(() => {
        makeStars();
    }, [])
    return ( <>
        <div className="text-center sm:flex justify-between bg-transparent relative">
            <div className="sm:w-1/2 my-6 sm:my-auto bg-transparent space-y-6 z-50 ">
                <h1 className="text-5xl font-extrabold text-white ">ALL THINGS PLANETS </h1>
                <p className="text-gray-100 text-lg"> Buy, sell, trade. </p>
                <Button className="bg-green-500 transition duration-300 ease-in-out hover:bg-green-600 cursor-pointer text-lg">
                    Get started 
                </Button>
            </div>

            {/* TODO: stars shooting in the bg */}
            <div className="h-32 sm:h-96 z-50">
                <SPINNINGCUBEWRAPPER />
            </div>
            {/* <div className="twinkling-light">
            </div> */}
            <div className="twinkling-light-wrapper z-0">
            </div>
        </div>
        
    </> );
}
 
export default HeroSection;