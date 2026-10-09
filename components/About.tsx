import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="container-x py-16 md:py-28">
      <h2 className="mb-8 text-[clamp(1.8rem,4vw,2.75rem)] font-bold">About me</h2>
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          {profile.about.map((t) => <p key={t}>{t}</p>)}
          <p className="text-muted">Based in {profile.location} - Open to remote and hybrid roles.</p>
        </div>
        <ul aria-label="Skills" className="flex flex-wrap content-start gap-2.5">
          {profile.skills.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
