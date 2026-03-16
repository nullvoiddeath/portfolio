"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site-config";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in over the first 150px of scroll
      const progress = Math.min(window.scrollY / 150, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrollProgress > 0.1
          ? `rgba(250, 250, 250, ${scrollProgress * 0.95})`
          : "transparent",
      }}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a
          href="#"
          className="text-[10px] uppercase tracking-[0.4em] text-black/50 transition-none hover:text-black md:text-xs"
          style={{ opacity: scrollProgress }}
        >
          {siteConfig.name}
        </a>

        {/* Desktop */}
        <div
          className="hidden items-center gap-8 md:flex"
          style={{ opacity: scrollProgress }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.3em] text-black/25 transition-none hover:text-black/60"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[10px] uppercase tracking-[0.4em] text-black/30 md:hidden"
          style={{ opacity: scrollProgress }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/5 bg-[#FAFAFA] md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-xs uppercase tracking-[0.3em] text-black/40 transition-none hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
