import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="section-divider px-6 py-6 md:px-12 lg:px-20">
      <div className="flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.3em] text-black/15 md:text-[10px]">
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span className="text-[9px] uppercase tracking-[0.3em] text-black/10 md:text-[10px]">
          Built from the void
        </span>
      </div>
    </footer>
  );
}
