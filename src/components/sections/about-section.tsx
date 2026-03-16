"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/skills";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="noise-bg relative flex h-full items-center px-4 py-10 md:px-8 lg:px-14" style={{ borderTop: "1px solid var(--t-border)" }}>
      <div className="mx-auto w-full max-w-5xl">
        {/* Section label */}
        <motion.span
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10px] uppercase tracking-[0.4em] md:text-xs"
          style={{ color: "rgba(var(--t-amber), 0.70)" }}
        >
          001 — About
        </motion.span>

        <div className="mt-12 grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* Left — prose */}
          <div>
            <motion.h2
              custom={1}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-3xl font-medium leading-snug md:text-4xl"
              style={{ color: "rgba(var(--t-fg), 0.80)" }}
            >
              I break things to understand how they hold together.
            </motion.h2>

            <motion.div
              custom={2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 space-y-5 text-sm leading-relaxed md:text-base"
              style={{ color: "var(--t-body)" }}
            >
              <p>
                I&apos;m a security researcher at Akamai Technologies in Kraków, Poland,
                where I spend my days hunting threats in API traffic that processes
                billions of requests daily. My work sits at the intersection of
                offensive security research and defensive architecture — finding the
                fractures before they become breaches.
              </p>
              <p>
                Before Akamai, I cut my teeth in bug bounty programs, finding and
                responsibly disclosing vulnerabilities in platforms like Meta and
                BharatPe. That experience taught me something academic research
                never could: how systems actually fail in production.
              </p>
              <p>
                I hold the OSCP, eCTHPv2, and CCD certifications — not because the
                letters matter, but because the process of earning them reshaped how
                I think about attack surfaces. Outside of security, I read
                philosophy, write occasionally, and think too much about systems —
                both technical and human.
              </p>
            </motion.div>
          </div>

          {/* Right — certifications + metadata */}
          <div>
            <motion.div
              custom={3}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: "var(--t-label)" }}>
                Certifications
              </span>
              <div className="mt-4 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="pl-4" style={{ borderLeft: "1px solid rgba(var(--t-fg), 0.10)" }}>
                    <span className="text-sm font-medium" style={{ color: "rgba(var(--t-fg), 0.70)" }}>{cert.name}</span>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(var(--t-fg), 0.25)" }}>
                      {cert.full}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={4}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12"
            >
              <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: "var(--t-label)" }}>
                Currently
              </span>
              <div className="mt-4 pl-4" style={{ borderLeft: "1px solid rgba(var(--t-fg), 0.10)" }}>
                <span className="text-sm" style={{ color: "rgba(var(--t-fg), 0.70)" }}>Security Architect II</span>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(var(--t-amber), 0.50)" }}>
                  Akamai Technologies
                </p>
              </div>
            </motion.div>

            <motion.div
              custom={5}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12"
            >
              <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: "var(--t-label)" }}>
                Location
              </span>
              <div className="mt-4 pl-4" style={{ borderLeft: "1px solid rgba(var(--t-fg), 0.10)" }}>
                <span className="text-sm" style={{ color: "rgba(var(--t-fg), 0.70)" }}>Kraków, Poland</span>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(var(--t-fg), 0.25)" }}>
                  CET / UTC+1
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
