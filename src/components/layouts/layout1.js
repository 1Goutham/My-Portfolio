export default function One() {
  return (
    <section className="bg-black h-[670px] lg:h-[750px] overflow-hidden">
      {/* Navbar */}
      <nav className="h-16 flex justify-between items-center px-8 pt-4">
        <img
          src="./images/portfoliologo.png"
          alt="logo"
          className="h-6 md:ms-8 lg:ms-8 mt-3"
        />
        <div className="hidden lg:flex space-x-10 text-white font-inter tracking-widest text-sm mt-3">
          <span className="font-normal hover:text-neutral-500 transition-all cursor-pointer">HOME</span>
          <span className="font-thin">|</span>
          <span className="font-normal hover:text-neutral-500 transition-all cursor-pointer">ABOUT ME</span>
          <span className="font-thin">|</span>
          <span className="font-normal hover:text-neutral-500 transition-all cursor-pointer">PROJECTS</span>
          <span className="font-thin">|</span>
          <span className="font-normal hover:text-neutral-500 transition-all cursor-pointer">RESUME</span>
        </div>
        <div className="pt-4 lg:pe-8">
          <button className="text-black bg-white font-semibold font-inter tracking-widest text-sm w-24 h-8 rounded">
            CONTACT
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row h-full items-center">
        {/* Image */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img
            src="./images/illustration.png"
            alt="My-photo"
            className="h-[500px] md:h-[700px] object-contain"
          />
        </div>

        {/* MainText - hidden on small screens */}
        <div className="w-full md:w-1/3 mt-10 md:mt-28">
          <div className="ps-20 pt-10 md:-translate-x-40 md:-translate-y-20">
            <div className="mt-10 lg:mt-28 px-4 lg:px-0">
              <h1 className="text-white font-anon text-sm sm:text-3xl lg:text-5xl mt-6 lg:mt-12">[Who Am I?]</h1>
              <div className="flex flex-col space-y-6 mt-6 sm:mt-8 lg:mt-10 lg:space-y-6 ps-2">
                <div>
                  <h1 className="text-white font-poppins text-[10px] sm:text-sm lg:text-2xl">Goutham G</h1>
                  <h1 className="text-white font-poppins font-thin text-[10px] sm:text-sm lg:text-base">
                    Fullstack <span className="text-gray-300">&</span> UI/UX Designer
                  </h1>
                </div>
                <div>
                  <h1 className="text-white font-poppins text-[10px] sm:text-sm lg:text-2xl">The Blend</h1>
                  <h1 className="text-white font-poppins font-thin text-[10px] sm:text-sm lg:text-base">
                    Bridging design to code<span className="text-gray-300">:)</span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-white font-poppins text-[10px] sm:text-sm lg:text-2xl">Growth Loop</h1>
                  <h1 className="text-white font-poppins font-thin text-[10px] sm:text-sm lg:text-base">
                    Constant Learning.<br />
                    Embracing new challenges.
                  </h1>
                </div>
              </div>
              <img src="./images/Logo2.png" alt="My-photo" className="ps-2 h-4 sm:h-5 lg:h-6 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
