import MainText from "../elements/scrambled-text"
export default function One(){
    return(
        <section className="bg-black h-[360px] lg:h-screen overflow-hidden">
        <nav className="h-16 flex justify-between items-center px-8 pt-4">
                    <img src="./images/portfoliologo.png" alt="logo" className="h-3 lg:h-6 md:ms-8 lg:ms-8 mt-3"/>
                    <div  className=" hidden lg:flex  space-x-10 text-white font-inter tracking-widest text-sm mt-3 ">
                        <span className="font-normal hover:text-neutral-500 transition-all cursor-pointer">HOME</span>
                        <span className="font-thin ">|</span>
                        <span className="font-normal  hover:text-neutral-500 transition-all cursor-pointer">ABOUT ME</span>
                        <span className="font-thin ">|</span>
                        <span className="font-normal  hover:text-neutral-500 transition-all cursor-pointer">PROJECTS</span>
                        <span className="font-thin">|</span>
                        <span className="font-normal  hover:text-neutral-500 transition-all cursor-pointer">RESUME</span>
                    </div>
                    <div className="pt-4 lg:pe-8">
                        <button className="text-black bg-white font-semibold font-poppins tracking-widest text-[8px] h-6 w-16 lg:text-sm lg:w-24 lg:h-8 rounded">CONTACT</button>
                    </div>

        </nav>
        <div className="w-full flex flex-row h-full lg:items-center">
            <div className="w-full lg:w-2/3">
                <img src="./images/Myphoto.png" alt="My-photo" className=" w-[140%] sm:w-[86%] md:w-[75%] lg:w-[100%] max-w-[800px] object-cover mx-auto mt-4 -translate-x-10 "/>
            </div>
            <div className="w-full lg:w-1/3 lg:mt-20">
            <div className="lg:-translate-x-40 lg:translate-y-10 -translate-y-2 translate-x-10">
            <MainText/>
            </div>
            </div>
        </div>
         
        </section>
    )
}