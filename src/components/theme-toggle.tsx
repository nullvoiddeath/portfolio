"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed left-6 bottom-6 z-50 text-[9px] uppercase tracking-[0.3em] transition-none md:left-8 lg:left-14"
      style={{ color: "rgba(var(--t-fg), 0.25)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.60)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(var(--t-fg), 0.25)")}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? "[ dark ]" : "[ light ]"}
    </button>
  );
}
