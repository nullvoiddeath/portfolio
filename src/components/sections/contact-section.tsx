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
    <section id="contact" className="noise-bg relative px-4 py-8 md:flex md:h-full md:items-center md:px-8 md:py-10 lg:px-14" style={{ borderTop: "1px solid var(--t-border)" }}>
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
          005 — Contact
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-4 font-serif text-2xl font-medium md:mt-8 md:text-4xl lg:text-5xl"
          style={{ color: "rgba(var(--t-fg), 0.80)" }}
        >
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          custom={2}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-3 max-w-lg text-xs leading-relaxed md:mt-6 md:text-base"
          style={{ color: "rgba(var(--t-fg), 0.55)" }}
        >
          Whether it&apos;s about API security, threat research, or something
          entirely different — I&apos;m always open to a conversation.
        </motion.p>

        <div className="mt-8 grid grid-cols-2 gap-0 md:mt-16 lg:grid-cols-4">
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
              className="group py-4 transition-colors duration-200 md:py-8 lg:px-8"
              style={{ borderTop: "1px solid var(--t-border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--t-hover-bg)";
                const label = e.currentTarget.querySelector("[data-label]") as HTMLElement;
                const sub = e.currentTarget.querySelector("[data-sub]") as HTMLElement;
                if (label) label.style.color = "var(--t-hover-fg)";
                if (sub) sub.style.color = "var(--t-hover-fg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                const label = e.currentTarget.querySelector("[data-label]") as HTMLElement;
                const sub = e.currentTarget.querySelector("[data-sub]") as HTMLElement;
                if (label) label.style.color = "var(--t-label)";
                if (sub) sub.style.color = "rgba(var(--t-fg), 0.60)";
              }}
            >
              <span data-label className="text-[9px] uppercase tracking-[0.3em] transition-colors duration-200 md:text-[10px]" style={{ color: "var(--t-label)" }}>
                {link.label}
              </span>
              <p data-sub className="mt-1 text-[10px] transition-colors duration-200 md:mt-2 md:text-sm" style={{ color: "rgba(var(--t-fg), 0.60)" }}>
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
          className="mt-8 flex items-end justify-between pt-4 md:mt-32 md:pt-8"
          style={{ borderTop: "1px solid var(--t-border)" }}
        >
          <span className="text-[8px] uppercase tracking-[0.4em] md:text-[9px]" style={{ color: "rgba(var(--t-fg), 0.15)" }}>
            {siteConfig.name} — {new Date().getFullYear()}
          </span>
          <span className="text-[8px] uppercase tracking-[0.4em] md:text-[9px]" style={{ color: "rgba(var(--t-fg), 0.15)" }}>
            Kraków, Poland
          </span>
        </motion.div>
      </div>
    </section>
  );
}
