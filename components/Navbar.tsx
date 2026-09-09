
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "";
    };
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-400 ease-in-out ${
        scrolled
          ? "py-4 shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "py-6 shadow-sm"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center gap-4 md:gap-12">

        {/* Logo */}
        <Link
          href="#"
          onClick={closeMenu}
          className="font-serif text-[22px] font-semibold tracking-[0.2em] shrink-0 text-black transition-colors duration-400"
          id="nav-logo-link"
        >
          GIF WEDDING
        </Link>

        {/* Navigation */}
        <ul
          className={`flex-col md:flex-row items-center justify-center gap-10 md:gap-9 fixed md:static inset-0 z-[999] md:z-auto ${
            menuOpen ? "flex" : "hidden md:flex"
          } ml-auto list-none bg-white md:bg-transparent`}
          id="nav-links"
        >
          {[
            ["#about", "Về GIF Wedding"],
            ["#services", "Dịch Vụ"],
            ["#gallery", "Phóng Sự Cưới"],
            ["#testimonials", "Khách Hàng"],
            ["#contact", "Liên Hệ"],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="font-ui text-[20px] md:text-[14px] font-normal text-black md:text-black/70 transition-colors duration-400 relative group"
              >
                {label}

                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-400 group-hover:w-full hidden md:block" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={closeMenu}
          className="btnPrimary hidden md:inline-flex"
          id="nav-cta"
        >
          Đặt Lịch
        </a>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ml-auto z-[1000]"
          id="nav-hamburger"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-[1.5px] transition-all duration-400 ${
              menuOpen
                ? "bg-black rotate-45 translate-y-[6.5px]"
                : "bg-black"
            }`}
          />

          <span
            className={`block w-6 h-[1.5px] transition-all duration-400 ${
              menuOpen
                ? "bg-black opacity-0"
                : "bg-black"
            }`}
          />

          <span
            className={`block w-6 h-[1.5px] transition-all duration-400 ${
              menuOpen
                ? "bg-black -rotate-45 -translate-y-[6.5px]"
                : "bg-black"
            }`}
          />
        </button>

      </div>
    </nav>
  );
}
