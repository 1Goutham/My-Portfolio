import ResponsiveImage from "../ResponsiveImage";

const BEHANCE_URL = "https://www.behance.net/gouthamgopinath1";
const LINKEDIN_URL = "https://www.linkedin.com/in/goutham-g-98a0ba253/";
const EMAIL = "gouthamgopinath.tsi@gmail.com";

const ABOUT_ITEMS = [
  {
    title: (
      <>
        Design <span className="text-base font-light">+</span> Dev
      </>
    ),
    text: (
      <>
        Design thinks. Dev builds.
        <br />
        Blending both to craft smart, simple, sleek.
      </>
    ),
  },
  {
    title: (
      <>
        Experience <span className="text-base font-light">+</span> Dev
      </>
    ),
    text: (
      <>
        Freelance Product Creator
        <br />
        Digital Engineer – DeepWeaver
      </>
    ),
  },
];

const contactLinkClass =
  "font-poppins text-sm tracking-wide text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:underline";

export default function Two() {
  return (
    <>
      {/* About */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-4 overflow-hidden bg-white text-black"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-24">
          <div>
            <h2 id="about-heading" className="font-anon text-3xl lg:text-5xl">
              [About Me!]
            </h2>

            <div className="mt-8 lg:mt-10">
              <h3 className="font-poppins text-xl lg:text-2xl">
                Hey, I’m <span className="text-2xl font-medium lg:text-3xl">Goutham</span>
              </h3>
              <p className="mt-3 max-w-md font-poppins text-base font-light leading-relaxed">
                – a fullstack dev with a creative edge. I believe good design makes
                you stay, great UX makes you move, and smart code makes it all
                possible.
              </p>
            </div>

            {ABOUT_ITEMS.map((item, i) => (
              <div key={i} className="mt-8">
                <h3 className="font-poppins text-xl font-medium lg:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-md font-poppins text-base font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

            <div className="mt-8">
              <h3 className="font-poppins text-xl font-medium lg:text-2xl">Core Stack</h3>
              <ResponsiveImage
                name="core-tools"
                alt="React, Next.js, Tailwind CSS, Node.js, MongoDB and Figma"
                sizes="300px"
                className="mt-4 h-10 w-auto lg:h-11"
              />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ResponsiveImage
              name="hand-drawn"
              alt="Hand-drawn pencil sketch of an anime character"
              sizes="(min-width: 1024px) 640px, (min-width: 640px) 520px, 90vw"
              className="h-[320px] w-auto max-w-full object-contain sm:h-[500px] lg:h-[620px]"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="scroll-mt-4 bg-black text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          <h2 id="projects-heading" className="text-center font-anon text-3xl lg:text-5xl">
            [Projects]
          </h2>

          <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <div className="flex justify-center">
              <ResponsiveImage
                name="project1"
                alt="RentFindr mobile app shown on a phone"
                sizes="(min-width: 1024px) 240px, 200px"
                className="h-[380px] w-auto object-contain lg:h-[460px]"
              />
            </div>
            <div className="flex justify-center">
              <ResponsiveImage
                name="project2"
                alt="Study-abroad consultancy website shown on a tablet"
                sizes="(min-width: 1024px) 700px, (min-width: 640px) 520px, 90vw"
                className="h-auto w-full max-w-[520px] object-contain lg:h-[600px] lg:w-auto lg:max-w-none"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:mt-16">
            <ResponsiveImage
              name="project3"
              alt="Fabric e-commerce landing page shown on a laptop"
              sizes="(min-width: 1024px) 800px, (min-width: 640px) 600px, 90vw"
              className="h-auto w-full max-w-[600px] object-contain lg:h-[480px] lg:w-auto lg:max-w-none"
            />
          </div>

          <div className="mt-12 flex justify-center lg:mt-14">
            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-8 font-poppins text-base text-black transition-all hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-12 md:text-lg"
            >
              View More
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div
          id="contact"
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-4 lg:grid-cols-2 lg:px-12 lg:pb-28 lg:pt-8"
        >
          <div className="flex justify-center">
            <ResponsiveImage
              name="gravestone"
              alt="Gravestone reading “I’m still working on my portfolio”"
              sizes="(min-width: 1024px) 600px, 360px"
              className="h-[240px] w-auto object-contain sm:h-[300px] lg:h-[400px]"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-anon text-3xl lg:text-4xl">[Reach Out]</h2>
            <p className="mt-4 font-poppins text-xl font-medium lg:text-2xl">
              Let’s connect and build
              <br className="hidden sm:inline" /> something meaningful, together.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-block font-poppins text-sm font-light text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
            >
              {EMAIL}
            </a>
            <ul className="mt-6 flex justify-center gap-6 lg:justify-start">
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
                  Behance
                </a>
              </li>
              <li>
                <a href="/GouthamGresume.pdf" download className={contactLinkClass}>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex min-h-16 items-center justify-center bg-white px-4 py-5 text-center">
        <p className="font-poppins text-xs font-medium tracking-widest text-black md:text-base">
          © {new Date().getFullYear()} Goutham Gopinath • Full Stack Developer &amp; Designer
        </p>
      </footer>
    </>
  );
}
