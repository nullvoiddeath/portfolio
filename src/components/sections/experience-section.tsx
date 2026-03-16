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
    <section id="experience" className="snap-section noise-bg relative border-t border-black/5 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <motion.span
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10px] uppercase tracking-[0.4em] md:text-xs"
          style={{ color: "rgba(120, 80, 30, 0.70)" }}
        >
          004 — Experience
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 font-serif text-3xl font-medium text-black/80 md:text-4xl"
        >
          Where I&apos;ve been.
        </motion.h2>

        <div className="mt-16 space-y-0">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              custom={idx + 2}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group border-t border-black/5 py-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
                {/* Left — metadata */}
                <div className="flex-shrink-0 lg:w-[200px]">
                  <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(120, 80, 30, 0.50)" }}>
                    {exp.period}
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-black/20">
                    {exp.location}
                  </p>
                </div>

                {/* Right — content */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-black/70 md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-black/30">
                    {exp.company}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-black/35">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-black/15" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/8 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-black/25"
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
