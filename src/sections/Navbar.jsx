import { useState, useEffect } from "react";

//
const Navbar = () => {
  // track if the user has scrolled down the page
  const navLinks = [
    { link: "#projects", name: "Projects" },
    { link: "#skills", name: "Skills" },
    { link: "#experience", name: "Experience" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${
        scrolled ? "top-0 bg-black" : "md:top-10 top-0 bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105"
        >
          Dawid Z.
        </a>

        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map(({ link, name }) => (
              <li
                key={name}
                className="text-white-50 relative group"
              >
                <a href={link}>
                  <span className="transition-colors duration-300 hover:text-white">
                    {name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="flex group"
        >
          <div className="px-5 py-2 rounded-lg bg-white-50 text-black group-hover:bg-black-50 transition-colors duration-300">
            <span className="group-hover:text-white transition-colors duration-300">
              Contact me
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
