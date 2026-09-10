import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className={`navbar-root w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="brand-mark">
          Salman<span>.dev</span>
        </a>

        <div>
          <ul className="nav-links hidden md:flex gap-9 text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex justify-center sm:justify-start">
          <a href="#contact" className="nav-cta">Let&apos;s talk <span>↗</span></a>
        </div>

        <button
          aria-label="Toggle navigation"
          className="mobile-menu-button md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger-icon ${menuOpen ? "hamburger-icon--open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={`mobile-nav md:hidden ${menuOpen ? "mobile-nav--open" : ""}`}>
        <ul className="px-6 pb-5 pt-2 flex flex-col gap-1 text-base">
          {navLinks.map((link, index) => (
            <li key={index} style={{ animationDelay: `${index * 50}ms` }} className="mobile-nav-item">
              <a
                href={link.path}
                className="block rounded-lg px-4 py-3 hover:bg-orange-50 hover:text-[#FD6F00] transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
