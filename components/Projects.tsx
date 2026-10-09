import { projects } from "@/data/content";
import { External } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="container-x py-16 md:py-28">
      <h2 className="mb-8 text-[clamp(1.8rem,4vw,2.75rem)] font-bold">Other projects</h2>
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.title} className="grid content-start gap-3 rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mb-0 text-muted">{p.description}</p>
            <ul className="flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="chip px-3! py-0.5! text-xs!">{t}</li>)}</ul>
            <a className="link" href={p.url} target="_blank" rel="noopener noreferrer">Visit project <External /></a>
          </li>
        ))}
      </ul>
    </section>
  );
}
