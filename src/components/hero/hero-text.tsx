"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { JourneyGraph } from "./journey-graph";

const reveal = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const links = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Twitter", href: siteConfig.links.twitter },
  { label: "Blog", href: siteConfig.links.blog },
  { label: "Email", href: siteConfig.links.email },
];

export function HeroText() {
  const [scrollFade, setScrollFade] = useState(1);

  useEffect(() => {
    const onSlideChange = (e: Event) => {
      const slide = (e as CustomEvent).detail.slide;
      setScrollFade(slide === 0 ? 1 : 0);
    };
    window.addEventListener("slidechange", onSlideChange);
    return () => window.removeEventListener("slidechange", onSlideChange);
  }, []);

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between px-4 py-10 md:px-8 md:py-16 lg:px-14">
      {/* Top bar — clinical metadata (fades out on scroll) */}
      <div style={{ opacity: scrollFade }}>
      <motion.div
        custom={0}
        variants={reveal}
        initial="hidden"
        animate="visible"
        className="flex items-start justify-between"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] md:text-xs" style={{ color: "rgba(var(--t-amber), 0.70)" }}>
          Security Researcher
        </span>
        <span className="text-[10px] uppercase tracking-[0.4em] md:text-xs" style={{ color: "rgba(var(--t-amber), 0.70)" }}>
          Kraków, PL
        </span>
      </motion.div>
      </div>

      {/* Center — the soul + journey */}
      <div className="relative my-auto py-8 md:py-16">
        {/* Mobile: graph as background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 lg:hidden">
          <JourneyGraph background />
        </div>

        {/* Desktop: graph positioned center-right */}
        <div className="pointer-events-auto absolute right-[2%] top-1/2 hidden -translate-y-1/2 lg:block">
          <JourneyGraph />
        </div>

        <div className="relative z-10 max-w-2xl">
          <motion.h1
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-7xl lg:text-8xl"
          >
            <span style={{ color: "var(--t-name-primary)" }}>Adhyayan</span>
            <br />
            <span style={{ color: "var(--t-name-secondary)" }}>Panwar</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-lg font-serif text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--t-body)" }}
          >
            I study the quiet fractures in systems
            that were never meant to hold.
          </motion.p>

          <motion.div
            custom={3}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center gap-4"
          >
            <span className="inline-block h-px w-16" style={{ backgroundColor: "rgba(var(--t-amber), 0.25)" }} />
            <p className="text-[10px] uppercase tracking-[0.4em] md:text-xs" style={{ color: "rgba(var(--t-amber), 0.70)" }}>
              API Security @ Akamai Technologies
              <span className="cursor-blink ml-1 inline-block h-3 w-[5px] align-middle" style={{ backgroundColor: "var(--t-cursor-bg)" }} />
            </p>
          </motion.div>
        </div>

      </div>

      {/* Bottom — social links */}
      <motion.div
        custom={4}
        variants={reveal}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-0.5 text-[9px] uppercase tracking-[0.3em] transition-colors duration-150 md:text-[10px]"
              style={{ color: "rgba(var(--t-fg), 0.50)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.90)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.50)")}
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="hidden text-[9px] uppercase tracking-[0.4em] sm:inline md:text-[10px]" style={{ color: "rgba(var(--t-fg), 0.10)" }}>
          [scroll]
        </span>
      </motion.div>
    </div>
  );
}
