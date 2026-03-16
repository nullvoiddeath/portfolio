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
    <section className="noise-bg relative flex h-full items-center border-t border-black/5 px-4 py-10 md:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-5xl">
        <motion.span
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10px] uppercase tracking-[0.4em] md:text-xs"
          style={{ color: "rgba(120, 80, 30, 0.70)" }}
        >
          002 — Capabilities
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 font-serif text-3xl font-medium text-black/80 md:text-4xl"
        >
          What I work with.
        </motion.h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              custom={catIdx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                {category.title}
              </h3>
              <div className="mt-4 h-px w-full bg-black/10" />
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-xs text-black/35 transition-colors duration-150 hover:text-black/70">
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
