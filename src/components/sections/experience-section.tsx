"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

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

export function ExperienceSection() {
  return (
    <section id="experience" className="noise-bg relative px-4 py-8 md:flex md:h-full md:items-center md:px-8 md:py-10 lg:px-14" style={{ borderTop: "1px solid var(--t-border)" }}>
      <div className="mx-auto w-full max-w-5xl">
        <motion.span
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10px] uppercase tracking-[0.4em] md:text-xs"
          style={{ color: "rgba(var(--t-amber), 0.70)" }}
        >
          004 — Experience
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-4 font-serif text-2xl font-medium md:mt-6 md:text-4xl"
          style={{ color: "rgba(var(--t-fg), 0.80)" }}
        >
          Where I&apos;ve been.
        </motion.h2>

        <div className="mt-4 space-y-0 md:mt-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              custom={idx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group py-3 md:py-5"
              style={{ borderTop: "1px solid var(--t-border)" }}
            >
              <div className="flex flex-col gap-2 md:gap-3 lg:flex-row lg:gap-16">
                {/* Left — metadata */}
                <div className="flex items-center gap-3 lg:w-[160px] lg:flex-col lg:items-start lg:gap-0">
                  <span className="text-[9px] uppercase tracking-[0.3em] md:text-[10px]" style={{ color: "rgba(var(--t-amber), 0.50)" }}>
                    {exp.period}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] md:text-[10px] lg:mt-0.5" style={{ color: "var(--t-label)" }}>
                    {exp.location}
                  </span>
                </div>

                {/* Right — content */}
                <div className="flex-1">
                  <h3 className="font-serif text-base font-medium md:text-xl" style={{ color: "rgba(var(--t-fg), 0.70)" }}>
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] md:text-xs" style={{ color: "rgba(var(--t-fg), 0.30)" }}>
                    {exp.company}
                  </p>

                  <ul className="mt-2 space-y-1 md:mt-3 md:space-y-1.5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-2 text-[10px] leading-relaxed md:gap-3 md:text-xs" style={{ color: "rgba(var(--t-fg), 0.35)" }}>
                        <span className="mt-1.5 h-px w-2 flex-shrink-0 md:w-3" style={{ backgroundColor: "rgba(var(--t-fg), 0.15)" }} />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex flex-wrap gap-1.5 md:mt-3 md:gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[8px] uppercase tracking-[0.2em] md:px-2 md:text-[9px]"
                        style={{ border: "1px solid var(--t-tag-border)", color: "rgba(var(--t-fg), 0.25)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
