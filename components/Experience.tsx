import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="container-x py-16 md:py-28">
      <h2 className="mb-8 text-[clamp(1.8rem,4vw,2.75rem)] font-bold">Work experience</h2>
      <ol className="grid gap-10 border-l-2 border-line pl-6">
        {experience.map((e) => (
          <li key={e.company} className="relative grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
            <span className="absolute -left-7.75 top-2 size-3 rounded-full bg-primary ring-4 ring-bg" />
            <span className="font-semibold text-secondary">{e.period}</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">{e.role}, {e.company}</h3>
              <ul>
                {e.points.map((p) => (
                  <li key={p} className="relative mb-1 max-w-[62ch] pl-4 text-muted before:absolute before:left-0 before:top-[.7em] before:size-1.5 before:rounded-full before:bg-tertiary">{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
