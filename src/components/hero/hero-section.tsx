"use client";

import { HeroText } from "./hero-text";

export function HeroSection() {
  return (
    <section className="snap-section noise-bg scanlines relative flex min-h-screen items-center overflow-hidden">
      <HeroText />
    </section>
  );
}
