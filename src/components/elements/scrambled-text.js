import ScrambledText from "./scrambledtext"
export default function MainText(){
    return(
            <div className="mt-28">
            <h1 className="text-white font-anon text-base lg:text-5xl mt-12">[Who Am I?]</h1>
            <div className="-translate-y-10 -translate-x-7 lg:-translate-y-20 lg:-translate-x-20">
            <ScrambledText
            className="scrambled-text-demo"
            radius={10}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            >
                <div className="mt-10 w-full">
                <h1 className="text-white font-poppins text-[10px] lg:text-2xl">Goutham G</h1>
                <h1 className="text-white font-poppins font-thin text-[10px] lg:text-base">Fullstack <span className="text-gray-300">&</span> UI/UX Designer</h1>
                </div>
                <div className="mt-2 lg:mt-6">
                <h1 className="text-white font-poppins  text-[10px] lg:text-2xl">The Blend</h1>
                <h1 className="text-white font-poppins font-thin text-[10px] lg:text-base">Bridging design to code<span className="text-gray-300">:)</span></h1>
                </div>
                <div className="mt-2 lg:mt-6">
                <h1 className="text-white font-poppins  text-[10px] lg:text-2xl">Growth Loop</h1>
                <h1 className="text-white font-poppins font-thin text-[10px] lg:text-base">Constant Learning.<br/>Embracing new challenges.</h1>
                </div>
                <img src="./images/Logo2.png" alt="My-photo" className="h-3 lg:h-6 mt-2 lg:mt-6"/>
                </ScrambledText>
            </div>
            </div>
        
    )
}