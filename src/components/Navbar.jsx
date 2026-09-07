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
        <h1 className="text-2xl font-bold tracking-wide text-[#777A7E] uppercase">
          Salman.dev
        </h1>

        <div>
          <ul className="hidden md:flex gap-12 text-md font-light">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="hover:text-[#FD6F00] transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex justify-center sm:justify-start">
          <button className="w-full sm:w-40 h-10 px-4 rounded font-light bg-[#FD6F00] text-white text-sm sm:text-base">
            Download CV
          </button>
        </div>

        <button
          className="md:hidden text-2xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-4 text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="block hover:text-[#FD6F00] transition duration-300"
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
