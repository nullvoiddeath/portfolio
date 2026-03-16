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
    <section id="experience" className="noise-bg relative flex h-full items-center px-4 py-10 md:px-8 lg:px-14" style={{ borderTop: "1px solid var(--t-border)" }}>
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
          className="mt-6 font-serif text-3xl font-medium md:text-4xl"
          style={{ color: "rgba(var(--t-fg), 0.80)" }}
        >
          Where I&apos;ve been.
        </motion.h2>

        <div className="mt-10 space-y-0">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              custom={idx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group py-5"
              style={{ borderTop: "1px solid var(--t-border)" }}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-16">
                {/* Left — metadata */}
                <div className="flex-shrink-0 lg:w-[160px]">
                  <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(var(--t-amber), 0.50)" }}>
                    {exp.period}
                  </span>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--t-label)" }}>
                    {exp.location}
                  </p>
                </div>

                {/* Right — content */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium md:text-xl" style={{ color: "rgba(var(--t-fg), 0.70)" }}>
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(var(--t-fg), 0.30)" }}>
                    {exp.company}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-xs leading-relaxed" style={{ color: "rgba(var(--t-fg), 0.35)" }}>
                        <span className="mt-1.5 h-px w-3 flex-shrink-0" style={{ backgroundColor: "rgba(var(--t-fg), 0.15)" }} />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9px] uppercase tracking-[0.2em]"
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
