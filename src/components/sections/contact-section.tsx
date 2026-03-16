"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

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

const contactLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, sub: "adhyayanpanwar" },
  { label: "Twitter / X", href: siteConfig.links.twitter, sub: "@nullvoiddeath" },
  { label: "Blog", href: siteConfig.links.blog, sub: "rants.fromthevo.id" },
  { label: "Email", href: siteConfig.links.email, sub: "adhyayanpanwar@gmail.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="snap-section noise-bg relative border-t border-black/5 px-6 py-32 md:px-12 lg:px-20">
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
          005 — Contact
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 font-serif text-3xl font-medium text-black/80 md:text-4xl lg:text-5xl"
        >
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          custom={2}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 max-w-lg text-sm leading-relaxed text-black/35 md:text-base"
        >
          Whether it&apos;s about API security, threat research, or something
          entirely different — I&apos;m always open to a conversation.
        </motion.p>

        <div className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={idx + 3}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group border-t border-black/5 py-8 transition-colors duration-200 hover:bg-black hover:text-white lg:border-l lg:border-t-0 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-black/20 transition-colors duration-200 group-hover:text-white/40">
                {link.label}
              </span>
              <p className="mt-2 text-sm text-black/60 transition-colors duration-200 group-hover:text-white/90">
                {link.sub}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          custom={7}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 flex items-end justify-between border-t border-black/5 pt-8"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-black/15">
            {siteConfig.name} — {new Date().getFullYear()}
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-black/15">
            Kraków, Poland
          </span>
        </motion.div>
      </div>
    </section>
  );
}
