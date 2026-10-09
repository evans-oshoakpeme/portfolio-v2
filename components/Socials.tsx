import { Github, Linkedin, Dribbble, X } from "./Icons";
import { profile } from "@/data/content";

export default function Socials({ className = "" }: { className?: string }) {
  const s = profile.socials;
  const items = [
    { label: "GitHub", href: s.github, icon: <Github /> },
    { label: "LinkedIn", href: s.linkedin, icon: <Linkedin /> },
    /*{ label: "Dribbble", href: s.dribbble, icon: <Dribbble /> },*/
    { label: "X", href: s.x, icon: <X /> },
  ];
  return (
    <ul className={`flex gap-2.5 ${className}`}>
      {items.map(({ label, href, icon }) => (
        <li key={label}><a className="icon-btn" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a></li>
      ))}
    </ul>
  );
}
