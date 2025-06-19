export default function Two() {
  return (
    <div className="overflow-hidden">
      {/* About Section */}
      <div className="w-full flex flex-row lg:flex-row ps-10 lg:ps-20">
        <div className="w-full lg:w-1/2 mt-8">
          <h1 className="text-black font-anon text-3xl lg:text-5xl">[About Me!]</h1>

          <div className="sm:mt-4 lg:mt-10">
            <h1 className="text-black font-poppins text-xl lg:text-2xl">
              Hey, I’m <span className="text-2xl lg:text-3xl font-medium">Goutham</span>
            </h1>
            <p className="text-black font-poppins font-thin text-base mt-3 text-justify max-w-md">
              - a fullstack dev with a creative edge. I believe good design makes you stay, great UX makes you move, and smart code makes it all possible.
            </p>
          </div>

          <div className="mt-6">
            <h1 className="text-black font-medium font-poppins text-xl lg:text-2xl">
              Design <span className="text-base font-thin">+</span> Dev
            </h1>
            <p className="text-black font-poppins font-thin text-base mt-3 text-justify max-w-md">
              Design thinks. Dev builds.<br />
              Blending both to craft smart, simple, sleek.
            </p>
          </div>

          <div className="mt-6">
            <h1 className="text-black font-medium font-poppins text-xl lg:text-2xl">
              Experience <span className="text-base font-thin">+</span> Dev
            </h1>
            <p className="text-black font-poppins font-thin text-base mt-3 text-justify max-w-md">
              Freelance Product Creator<br />Digital Engineer - DeepWeaver
            </p>
          </div>

          <div className="mt-6">
            <h1 className="text-black font-medium font-poppins text-xl lg:text-2xl">Core Stack</h1>
            <img src="./images/core-tools.png" alt="core stack" className="h-10 mt-4" />
          </div>
        </div>

        <div className="w-1/2 lg:w-1/2 flex justify-end lg:mt-0">
          <img src="./images/Hand-drawn.png" alt="My-drawing" className="h-[300px] sm:h-[550px] lg:h-[650px] w-auto max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none mx-auto lg:object-contain lg:ps-10"/>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-black px-6">
        <div className="w-full flex flex-row lg:flex-row items-center justify-center pt-16">
          <div className="w-full lg:w-1/2 flex justify-center pb-8 lg:pb-32">
            <img src="./images/project1.png" alt="project1" className="h-[350px] lg:h-[450px] object-contain" />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center -translate-y-10 lg:-translate-y-32">
            <img src="./images/project2.png" alt="project2" className="h-[500px] lg:h-[700px] object-contain" />
          </div>
        </div>

        <div className="flex justify-center -translate-y-8 lg:-translate-y-16">
          <h1 className="text-white font-anon text-2xl lg:text-3xl mt-12">[Projects]</h1>
        </div>

        <div className="flex justify-center">
          <img src="./images/project3.png" alt="project3" className="h-[300px] lg:h-[450px] object-contain" />
        </div>

        <div className="flex justify-center">
          <button className="bg-white text-black w-40 md:w-48 mt-12 h-10 md:h-12 flex items-center justify-center space-x-2 rounded-full">
            <span className="text-base md:text-lg font-poppins">View More</span>
            <img src="./images/downarrow2.png" alt="arrow" className="h-2" />
          </button>
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-row lg:flex-row items-center justify-center mt-20">
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <img src="./images/gravestone.png" alt="gravestone" className="h-[300px] lg:h-[400px] object-contain" />
          </div>
          <div className="w-full lg:w-1/2 px-6 lg:px-10 text-left lg:text-left">
            <h1 className="text-white font-anon text-3xl lg:text-4xl">[Reach Out]</h1>
            <h1 className="text-white font-poppins font-medium text-xl lg:text-2xl mt-3">
              Let’s connect and build<br />something meaningful, together.
            </h1>
            <p className="text-white font-poppins font-thin text-xs mt-3">gouthamgopinath.tsi@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white h-16 flex justify-center items-center px-4 text-center">
        <h1 className="text-black font-poppins font-medium tracking-widest text-xs md:text-lg">
          © 2025 Goutham Gopinath • Full Stack Developer & Designer
        </h1>
      </footer>
    </div>
  );
}
