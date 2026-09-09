"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
        scrolled 
          ? "bg-black/92 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(255,255,255,0.06)]" 
          : "bg-transparent py-6"
      }`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center gap-4 md:gap-12">
        <Link 
          href="#" 
          className="font-serif text-[22px] font-semibold tracking-[0.2em] text-white shrink-0" 
          id="nav-logo-link"
        >
          THE F LAB
        </Link>
        <ul 
          className={`flex-col md:flex-row items-center justify-center gap-10 md:gap-9 fixed md:static inset-0 bg-black/96 md:bg-transparent z-[999] md:z-auto ${
            menuOpen ? "flex" : "hidden md:flex"
          } ml-auto list-none`} 
          id="nav-links"
        >
          {[["#about","Ve Chung Toi"],["#services","Dich Vu"],["#gallery","Album Anh"],["#testimonials","Khach Hang"],["#contact","Lien He"]].map(([href, label]) => (
            <li key={href}>
              <a 
                href={href} 
                onClick={closeMenu}
                className="font-ui text-[20px] md:text-[14px] font-normal text-white md:text-white/80 transition-colors duration-400 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-400 group-hover:w-full hidden md:block"></span>
              </a>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="btnPrimary hidden md:inline-flex" 
          id="nav-cta"
        >
          Dat Lich Tu Van
        </a>
        <button 
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ml-auto z-[1000]" 
          id="nav-hamburger" 
          aria-label="Menu" 
          onClick={toggleMenu} 
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-400"></span>
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-400"></span>
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-400"></span>
        </button>
      </div>
    </nav>
  );
}
