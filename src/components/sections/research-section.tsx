"use client";

import { motion } from "framer-motion";
import { research } from "@/data/research";

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

export function ResearchSection() {
  return (
    <section id="research" className="noise-bg relative px-4 py-8 md:flex md:h-full md:items-center md:px-8 md:py-10 lg:px-14" style={{ borderTop: "1px solid var(--t-border)" }}>
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
          003 — Research & Findings
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
          Things I&apos;ve studied.
        </motion.h2>

        <div className="mt-4 space-y-0 md:mt-10">
          {research.map((item, idx) => (
            <motion.div
              key={item.id}
              custom={idx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group py-3 transition-colors duration-200 md:py-5"
              style={{ borderTop: "1px solid var(--t-border)" }}
            >
              <div className="flex flex-col gap-2 md:gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="font-serif text-base font-medium md:text-xl" style={{ color: "rgba(var(--t-fg), 0.70)" }}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.3em] md:text-[10px]" style={{ color: "rgba(var(--t-amber), 0.50)" }}>
                    {item.subtitle}
                  </p>
                  <p className="mt-1 text-[10px] leading-relaxed md:mt-2 md:text-xs" style={{ color: "rgba(var(--t-fg), 0.35)" }}>
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-shrink-0 flex-wrap gap-1.5 md:gap-2 lg:max-w-[200px] lg:justify-end">
                  {item.tags.map((tag) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
