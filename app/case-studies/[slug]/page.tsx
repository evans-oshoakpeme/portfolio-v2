import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, profile } from "@/data/content";
import { Back, Arrow } from "@/components/Icons";
import ThemeToggle from "@/components/ThemeToggle";
import Cover from "@/components/Cover";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return { title: c ? `${c.title} | ${profile.name}` : "Case study" };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const i = caseStudies.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const c = caseStudies[i];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-bg/70 px-4 py-3 backdrop-blur-xl sm:px-10">
        <Link href="/#case-studies" className="link"><Back /> All case studies</Link>
        <ThemeToggle />
      </header>

      <main className="container-x max-w-205 py-12 pb-20">
        <p className="mb-2 text-sm text-muted">{c.category}, {c.year}</p>
        <h1 className="mb-4 text-[clamp(2.2rem,5vw,3.6rem)] font-bold">{c.title}</h1>
        <p className="text-xl text-muted">{c.overview}</p>
        <Cover title={c.title} colors={c.colors} className="my-8 aspect-16/8 rounded-3xl" />

        <dl className="mb-12 grid gap-4 rounded-2xl border border-line bg-surface/85 p-6 backdrop-blur sm:grid-cols-3">
          {[["Role", c.role], ["Duration", c.duration], ["Team", c.team]].map(([k, v]) => (
            <div key={k}><dt className="text-sm text-muted">{k}</dt><dd className="font-semibold">{v}</dd></div>
          ))}
        </dl>

        {c.sections.map((s) => (
          <section key={s.title} className="mb-10">
            <h2 className="mb-3 text-3xl font-bold">{s.title}</h2>
            <p className="whitespace-pre-line">{s.body}</p>
            <img src={s.image} alt={s.title} className="mt-6 aspect-video w-full rounded-2xl object-cover" />
          </section>
        ))}

        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-bold">Results</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {c.results.map(([n, l]) => (
              <li key={l} className="grid rounded-2xl bg-tint p-5">
                <strong className="font-display text-4xl text-primary">{n}</strong>
                <span className="text-muted">{l}</span>
              </li>
            ))}
          </ul>
        </section>

        <Link className="btn mt-6" href={`/case-studies/${next.slug}`}>Next: {next.title} <Arrow /></Link>
      </main>
    </>
  );
}
