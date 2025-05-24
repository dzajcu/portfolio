import { useState, useEffect } from "react";

const Navbar = () => {  const navLinks = [
    { link: "#about", name: "about" },
    { link: "#projects", name: "projects" },
    { link: "#experience", name: "experience" },
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
  // Function to handle smooth scrolling with navbar offset
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Calculate navbar height dynamically
    const navbar = document.querySelector('header');
    const navbarHeight = navbar ? navbar.offsetHeight + 20 : 100; // 20px extra padding
    
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
      behavior: 'smooth'
    });
  };

  return (
    <header
      className={`container fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${
        scrolled ? "top-0 backdrop-blur" : "md:top-10 top-0 bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, '#hero')}
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
                <a 
                  href={link}
                  onClick={(e) => handleSmoothScroll(e, link)}
                >
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
          onClick={(e) => handleSmoothScroll(e, '#contact')}
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
