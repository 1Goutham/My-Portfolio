export default function Two(){
    return(
        <div>
        <div className="w-full flex flex-row">
            
            <div className="w-1/2 mt-4 lg:mt-10 ps-6 lg:ps-20">
                <h1 className="text-black font-anon text-lg lg:text-5xl">[About Me!]</h1>
                <div className="mt-1 lg:mt-10 lg:ps-3 ps-1">
                <h1 className="text-black font-poppins text-xs lg:text-2xl">Hey, I’m<span className="text-sm lg:text-3xl font-medium">  Goutham</span>  </h1>
                <div className="w-[200px] lg:w-[450px] text-justify">
                <h1 className="text-black font-poppins font-thin text-[8px] lg:text-base mt-0 lg:mt-3">- a fullstack dev with a creative edge. I believe good design makes you stay, great UX makes you move, and smart code makes it all possible.</h1>
                </div>
                </div>
                <div className="mt-1 lg:mt-6 lg:ps-3 ps-1">
                <h1 className="text-black font-medium font-poppins text-xs lg:text-2xl">Design <span className="text-[10px] lg:text-xl font-thin">+</span> Dev</h1>
                <div className="w-[450px] text-justify">
                <h1 className="text-black font-poppins font-thin text-[8px] lg:text-base mt-0 lg:mt-3">Design thinks. Dev builds.<br/>Blending both to craft smart, simple, sleek.</h1>
                </div>
                </div>
                <div className="mt-1 lg:mt-6 lg:ps-3 ps-1">
                <h1 className="text-black font-medium font-poppins text-xs lg:text-2xl">Experience <span className="text-xs font-thin">+</span> Dev</h1>
                <div className="w-[450px] text-justify">
                <h1 className="text-black font-poppins font-thin text-[8px] lg:text-base mt-0 lg:mt-3">Freelance Product Creator<br/>Digital Enigneer - DeepWeaver</h1>
                </div>
                </div>
                <div className="mt-1 lg:mt-6 lg:ps-3 ps-1">
                <h1 className="text-black font-medium font-poppins text-xs lg:text-2xl">Core Stack</h1>
                <img src="./images/core-tools.png" alt="My-photo" className="h-4 mt-1 lg:h-10 lg:mt-4"/>
                </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src="./images/Hand-drawn.png" alt="My-photo" className="h-[250px] lg:h-[650px] lg:object-contain"/>
            </div>
            
        </div>
    <div className="bg-black">
                <div className="w-full flex flex-row items-center">
                    <div className="w-1/2 flex justify-center pe-8 lg:pe-32 pb-32">
                    <img src="./images/project1.png" alt="My-photo" className="mt-7 h-[180px] lg:h-[450px] object-contain"/>
                    </div>
                    <div className="w-1/2 flex justify-center -translate-y-20 lg:-translate-y-32">
                    <img src="./images/project2.png" alt="My-photo" className="mt-4 h-[250px] lg:h-[700px] object-contain"/>
                    </div>
                </div>
                <div className="flex justify-center -translate-y-28 lg:-translate-y-16">
                    <h1 className="text-white font-anon text-sm lg:text-3xl mt-12">[Projects]</h1>
                </div>
                <div className="flex justify-center">
                    <img src="./images/project3.png" alt="My-photo" className="-translate-y-16 lg:mt-20 h-[200px] lg:h-[450px] object-contain"/>
                </div>
                <div className="flex justify-center -translate-y-16">
                <button className="bg-white text-black w-32 md:w-48 lg:w-48 mt-16 h-8 md:h-12 lg:h-12 flex items-center justify-center space-x-2 rounded-full">
                    <span className="text-sm md:text-lg lg:text-lg font-poppins">View More</span>
                    <img src="./images/downarrow2.png" alt="logo" className="h-1 md:h-2 lg:h-2" />
                </button>
                </div>
                <div className="className=w-full flex justify-center mt-10 -translate-y-16">
                <div className="w-1/2 flex flex-row justify-center">
                    <img src="./images/gravestone.png" alt="My-photo" className="mt-4 h-[300px] w-[140%] lg:h-[400px] object-contain ps-40"/>
                </div>
                <div className="w-1/2 flex flex-col mt-20 ps-10">
                    <h1 className="text-white font-anon text-lg lg:text-4xl mt-12">[Reach Out]</h1>
                    <h1 className="text-white font-poppins font-medium text-sm lg:text-2xl mt-3 ">Let’s connect and build<br/>something meaningful, together.</h1>
                    <h1 className="text-white font-poppins font-thin text-[10px] lg:text-base mt-3 ">gouthamgopinath.tsi@gmail.com</h1>
                </div>
                </div>

            </div>
            <footer className="bg-white h-16 flex justify-center items-center">
                <h1 className="text-black font-poppins font-medium tracking-widest text-xl">© 2025 Goutham Gopinath • Full Stack Developer & Designer</h1>
            </footer>
            </div>
    )
}