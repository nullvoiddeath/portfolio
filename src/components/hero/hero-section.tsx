"use client";

import { HeroText } from "./hero-text";

export function HeroSection() {
  return (
    <section className="noise-bg scanlines relative flex h-full items-center overflow-hidden">
      <HeroText />
    </section>
  );
}
