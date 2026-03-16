"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check localStorage first, then check if dark class is already on html
    const stored = localStorage.getItem("theme") as Theme | null;
    const hasDarkClass = document.documentElement.classList.contains("dark");
    const resolved = stored || (hasDarkClass ? "dark" : "light");

    setTheme(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
    localStorage.setItem("theme", resolved);

    // Notify canvas of the initial theme
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: resolved } }));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      // Dispatch event so canvas can react
      window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
