import SPINNINGCUBEWRAPPER from './SpinningCube' 

const HeroSection = () => {
    return ( <>
        <div className="text-center md:flex justify-center bg-transparent relative">
            <div className="md:w-1/2 my-auto z-50 bg-transparent">
                <h1 className="text-7xl">ALL THINGS PLANETS </h1>
                <p className="text-gray-600"> Buy, sell, trade planets. </p>
            </div>

            {/* TODO: stars shooting in the bg */}
            <div className="h-96">
                <SPINNINGCUBEWRAPPER />
            </div>
        </div>
        
    </> );
}
 
export default HeroSection;