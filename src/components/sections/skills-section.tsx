"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function SkillsSection() {
  return (
    <section className="noise-bg relative px-4 py-8 md:flex md:h-full md:items-center md:px-8 md:py-10 lg:px-14" style={{ borderTop: "1px solid var(--t-border)" }}>
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
          002 — Capabilities
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-4 font-serif text-2xl font-medium md:mt-8 md:text-4xl"
          style={{ color: "rgba(var(--t-fg), 0.80)" }}
        >
          What I work with.
        </motion.h2>

        <div className="mt-6 grid grid-cols-2 gap-6 md:mt-16 md:gap-12 lg:grid-cols-4">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              custom={catIdx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-[9px] uppercase tracking-[0.3em] md:text-[10px]" style={{ color: "rgba(var(--t-fg), 0.50)" }}>
                {category.title}
              </h3>
              <div className="mt-2 h-px w-full md:mt-4" style={{ backgroundColor: "rgba(var(--t-fg), 0.10)" }} />
              <ul className="mt-2 space-y-1 md:mt-4 md:space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-[10px] transition-colors duration-150 md:text-xs"
                    style={{ color: "rgba(var(--t-fg), 0.35)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.70)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.35)")}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
