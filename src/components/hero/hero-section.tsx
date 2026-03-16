"use client";

import { HeroText } from "./hero-text";
import { WaveCanvas } from "./wave-canvas";

export function HeroSection() {
  return (
    <section className="noise-bg scanlines relative flex min-h-screen items-center overflow-hidden">
      <WaveCanvas />
      <HeroText />
    </section>
  );
}
