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
  const [visible, setVisible] = useState(0);

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
          className="text-[10px] uppercase tracking-[0.4em] transition-opacity duration-700 md:text-xs"
          style={{ opacity: visible, color: "rgba(var(--t-fg), 0.50)" }}
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
              className="text-[10px] uppercase tracking-[0.3em] transition-none"
              style={{ color: "rgba(var(--t-fg), 0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.60)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.25)")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[10px] uppercase tracking-[0.4em] transition-opacity duration-700 md:hidden"
          style={{ opacity: visible, color: "rgba(var(--t-fg), 0.30)" }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t md:hidden" style={{ borderColor: "var(--t-border)", backgroundColor: "var(--t-bg)" }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-xs uppercase tracking-[0.3em] transition-none"
              style={{ color: "rgba(var(--t-fg), 0.40)" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
