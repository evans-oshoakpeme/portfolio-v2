import type { CSSProperties } from "react";

export default function Cover({ title, colors, className = "" }: { title: string; colors: [string, string]; className?: string }) {
  return (
    <div className={`grid aspect-16/10 place-items-center bg-[linear-gradient(135deg,var(--c1),var(--c2))] ${className}`}
      style={{ "--c1": colors[0], "--c2": colors[1] } as CSSProperties}>
      <span className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold tracking-tighter text-white/90">{title.split(" ")[0]}</span>
    </div>
  );
}
