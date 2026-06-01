import { useState } from "react";
import logoSercotec from "../assets/Logo_Sercotec.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" },
    { label: "Admin", href: "#admin" },
  ];

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-white
      shadow-lg
      border-b border-slate-200
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#">
          <img
            src={logoSercotec}
            alt="Sercotec"
            className="
            h-14 md:h-20
            w-auto
            transition-transform
            duration-300
            hover:scale-105
            "
          />
        </a>

        <ul className="hidden md:flex items-center gap-10 text-black font-medium">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                relative
                transition-all
                duration-300
                hover:text-blue-700

                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-blue-700
                after:transition-all
                after:duration-300

                hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                  block
                  px-6
                  py-4
                  text-slate-700
                  hover:bg-slate-100
                  hover:text-blue-700
                  transition
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
