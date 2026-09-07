import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-zinc-100/80 bg-[#fffdfb]/85 backdrop-blur-md">
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
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="mobile-nav md:hidden px-6 pb-5 flex flex-col gap-1 text-base">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                  className="block rounded-md px-3 py-2 hover:bg-orange-50 hover:text-[#FD6F00] transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
