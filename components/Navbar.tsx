"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, Close, Download } from "./Icons";
import { profile } from "@/data/content";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Case studies", id: "case-studies" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
] as const;
const ids: string[] = links.map((l) => l.id);

/** Scroll-spy: returns the id of the section currently under the navbar. */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = "";
      if (atBottom) current = sectionIds[sectionIds.length - 1];
      else for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [sectionIds]);
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-bg/70 px-4 py-3 backdrop-blur-xl sm:px-10">
      <a href="#top" className="font-display text-sm font-bold">{profile.name}</a>

      {/* Desktop links (hidden on mobile) */}
      <nav aria-label="Primary" className="hidden gap-1 md:flex">
        {links.map(({ label, id }) => {
          const on = active === id;
          return (
            <a key={id} href={`#${id}`} aria-current={on ? "true" : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${on ? "bg-tint text-primary" : "text-muted hover:text-ink"}`}>
              {label}
              <span className={`absolute bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-secondary transition-all duration-300 ${on ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-2">
        <a className="btn btn-sm hidden md:inline-flex" href={profile.resume} download><Download /> Resume</a>
        <ThemeToggle />
        <button className="icon-btn md:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu /></button>
      </div>

      {/* Mobile menu: only appears after tapping the menu icon */}
      <div aria-hidden={!open}
        className={`fixed inset-0 flex h-dvh flex-col items-start justify-center gap-8 bg-bg p-8 transition-all duration-300 md:hidden ${open ? "visible translate-y-0" : "invisible -translate-y-full"}`}>
        <button className="icon-btn absolute right-4 top-4" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}><Close /></button>
        <nav aria-label="Mobile" className="flex flex-col gap-4">
          {links.map(({ label, id }) => {
            const on = active === id;
            return (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} aria-current={on ? "true" : undefined}
                className={`flex items-center gap-3 font-display text-4xl font-semibold transition-colors ${on ? "text-primary" : "text-ink"}`}>
                <span className={`h-1.5 rounded-full bg-secondary transition-all duration-300 ${on ? "w-8" : "w-0"}`} />
                {label}
              </a>
            );
          })}
        </nav>
        <a className="btn" href={profile.resume} download tabIndex={open ? 0 : -1}><Download /> Download resume</a>
      </div>
    </header>
  );
}
