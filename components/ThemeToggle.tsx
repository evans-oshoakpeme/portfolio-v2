"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "./Icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => setTheme(document.documentElement.dataset.theme ?? "light"), []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };

  return (
    <button className="icon-btn" onClick={toggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
