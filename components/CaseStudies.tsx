"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/content";
import { Arrow, Back } from "./Icons";
import Cover from "./Cover";

export default function CaseStudies() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = caseStudies.length - 1;

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.children[Math.max(0, Math.min(last, i))] as HTMLElement;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement;
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 24)));
  };

  return (
    <section id="case-studies" className="container-x py-16 md:py-28">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-bold">Case studies</h2>
        <div className="flex gap-2">
          <button className="icon-btn" onClick={() => go(active - 1)} disabled={active <= 0} aria-label="Previous case study"><Back /></button>
          <button className="icon-btn" onClick={() => go(active + 1)} disabled={active >= last} aria-label="Next case study"><Arrow /></button>
        </div>
      </div>

      <div ref={track} onScroll={onScroll} tabIndex={0} aria-label="Case studies carousel"
        className="flex justify-center snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 pt-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {caseStudies.map((c) => (
          <article key={c.slug} className="flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-surface/85 shadow-xl shadow-primary/10 backdrop-blur sm:w-130">
            <Cover title={c.title} colors={c.colors} />
            <div className="grid justify-items-start gap-2 p-6">
              <p className="mb-0 text-sm text-muted">{c.category}, {c.year}</p>
              <h3 className="text-2xl font-semibold">{c.title}</h3>
              <p className="mb-2">{c.summary}</p>
              <Link className="btn" href={`/case-studies/${c.slug}`}>Read case study <Arrow /></Link>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2" role="tablist" aria-label="Choose case study">
        {caseStudies.map((c, i) => (
          <button key={c.slug} role="tab" aria-selected={i === active} aria-label={c.title} onClick={() => go(i)}
            className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${i === active ? "w-7 bg-primary" : "w-2.5 bg-line"}`} />
        ))}
      </div>
    </section>
  );
}
