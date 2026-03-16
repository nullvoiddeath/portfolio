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
    <section id="research" className="noise-bg relative flex h-full items-center border-t border-black/5 px-4 py-10 md:px-8 lg:px-14">
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
          003 — Research & Findings
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 font-serif text-3xl font-medium text-black/80 md:text-4xl"
        >
          Things I&apos;ve studied.
        </motion.h2>

        <div className="mt-10 space-y-0">
          {research.map((item, idx) => (
            <motion.div
              key={item.id}
              custom={idx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group border-t border-black/5 py-5 transition-colors duration-200 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="font-serif text-lg font-medium text-black/70 transition-colors duration-200 group-hover:text-black/90 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(120, 80, 30, 0.50)" }}>
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-black/35 transition-colors duration-200 group-hover:text-black/50">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-shrink-0 flex-wrap gap-2 lg:max-w-[200px] lg:justify-end">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/8 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-black/25"
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
