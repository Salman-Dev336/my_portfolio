import { useState, useEffect } from "react";
import { useTheme } from "../App";

const BulbIcon = ({ isOn }) => (
  <svg
    viewBox="0 0 24 24"
    className={`bulb-icon ${isOn ? "bulb-icon--on" : ""}`}
    aria-hidden="true"
    fill="none"
    strokeWidth="1.5"
  >
    {/* Bulb body */}
    <path
      d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.5A6 6 0 0 0 12 3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Filament lines */}
    <path d="M10 17v-3M14 17v-3" stroke="currentColor" strokeLinecap="round" opacity={isOn ? 1 : 0.4} />
    {/* Glow rays (visible when "on" / light mode) */}
    <g className="bulb-rays" strokeLinecap="round" stroke="currentColor">
      <path d="M12 0v1.5" />
      <path d="M4.22 4.22l1.06 1.06" />
      <path d="M0 12h1.5" />
      <path d="M22.5 12H24" />
      <path d="M18.72 5.28l1.06-1.06" />
    </g>
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                <a href={link.path} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="theme-toggle"
            onClick={toggleTheme}
          >
            <BulbIcon isOn={!dark} />
          </button>

          <div className="hidden sm:flex">
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
      </div>

      <div className={`mobile-nav md:hidden ${menuOpen ? "mobile-nav--open" : ""}`}>
        <ul className="px-6 pb-5 pt-2 flex flex-col gap-1 text-base">
          {navLinks.map((link, index) => (
            <li key={index} style={{ animationDelay: `${index * 50}ms` }} className="mobile-nav-item">
              <a
                href={link.path}
                className="block rounded-lg px-4 py-3 hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:text-[#FD6F00] transition duration-300 font-medium"
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
