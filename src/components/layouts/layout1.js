import { useEffect, useState } from "react";
import ResponsiveImage from "../ResponsiveImage";
import { imagePath } from "../../images";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "RESUME", href: "/GouthamGresume.pdf", download: true },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/goutham-g-98a0ba253/";

const navLinkClass =
  "font-poppins tracking-widest text-sm text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="relative z-20">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12"
      >
        <a href="#home" className="flex items-center" aria-label="Goutham G – home">
          <img
            src={imagePath("portfoliologo.png")}
            alt=""
            width={241}
            height={140}
            className="h-7 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} className="flex items-center gap-8">
              {i > 0 && <span aria-hidden="true" className="text-white/30">|</span>}
              <a href={link.href} download={link.download} className={navLinkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded bg-white px-5 font-poppins text-sm font-semibold tracking-widest text-black transition-all hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            CONTACT
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-black px-6 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                download={link.download}
                onClick={() => setOpen(false)}
                className={`${navLinkClass} block border-b border-white/10 py-4`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

const HERO_ITEMS = [
  {
    title: "Goutham G",
    text: (
      <>
        Fullstack <span className="text-neutral-400">&amp;</span> UI/UX Designer
      </>
    ),
  },
  {
    title: "The Blend",
    text: (
      <>
        Bridging design to code<span className="text-neutral-400">:)</span>
      </>
    ),
  },
  {
    title: "Growth Loop",
    text: (
      <>
        Constant Learning.
        <br />
        Embracing new challenges.
      </>
    ),
  },
];

export default function One() {
  return (
    <div id="home" className="bg-black text-white">
      <Navbar />

      <section
        aria-labelledby="hero-heading"
        className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-x-12 px-6 pt-8 md:grid-cols-[3fr_2fr] md:pt-4 lg:px-12"
      >
        {/* Portrait — the artwork is cut flat at the shoulders, so it is pinned
            to the bottom edge of the black section on every breakpoint. */}
        <div className="order-2 flex justify-center md:order-1 md:justify-start lg:justify-center">
          <ResponsiveImage
            name="illustration"
            alt="Painted portrait of Goutham smiling"
            priority
            sizes="(min-width: 1024px) 660px, (min-width: 768px) 560px, (min-width: 640px) 480px, 380px"
            className="mt-10 h-[380px] w-auto object-contain object-bottom sm:h-[480px] md:mt-0 md:h-[560px] lg:h-[660px]"
          />
        </div>

        <div className="order-1 pb-6 md:order-2 md:pb-20 lg:pb-28">
          <h1 id="hero-heading" className="font-anon text-3xl sm:text-4xl lg:text-5xl">
            [Who Am I?]
          </h1>
          <ul className="mt-8 flex flex-col gap-6 ps-1 lg:mt-10">
            {HERO_ITEMS.map((item) => (
              <li key={item.title}>
                <h2 className="font-poppins text-lg font-medium sm:text-xl lg:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-1 font-poppins text-sm font-light text-neutral-300 lg:text-base">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <img
            src={imagePath("Logo2.png")}
            alt=""
            width={456}
            height={143}
            className="ms-1 mt-8 h-5 w-auto lg:h-6"
          />
        </div>
      </section>
    </div>
  );
}
