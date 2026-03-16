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
  const [visible, setVisible] = useState(0); // 0 on hero, 1 elsewhere

  useEffect(() => {
    const onSlideChange = (e: Event) => {
      const slide = (e as CustomEvent).detail.slide;
      setVisible(slide > 0 ? 1 : 0);
    };
    window.addEventListener("slidechange", onSlideChange);
    return () => window.removeEventListener("slidechange", onSlideChange);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{ backgroundColor: "transparent" }}
    >
      <nav className="flex items-center justify-between px-4 py-5 md:px-8 lg:px-14">
        <a
          href="#"
          className="text-[10px] uppercase tracking-[0.4em] text-black/50 transition-opacity duration-700 hover:text-black md:text-xs"
          style={{ opacity: visible }}
        >
          {siteConfig.name}
        </a>

        {/* Desktop */}
        <div
          className="hidden items-center gap-8 transition-opacity duration-700 md:flex"
          style={{ opacity: visible }}
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
          className="text-[10px] uppercase tracking-[0.4em] text-black/30 transition-opacity duration-700 md:hidden"
          style={{ opacity: visible }}
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
