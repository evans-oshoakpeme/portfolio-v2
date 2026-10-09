import { profile } from "@/data/content";
import { Download, Arrow } from "./Icons";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section id="top" className="container-x grid items-center gap-12 py-14 md:py-24 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <p className="mb-4 font-semibold text-primary">{profile.name}, {profile.role.toLowerCase()}</p>
        <h1 className="mb-6 text-[clamp(2.5rem,6.5vw,5rem)] font-bold">{profile.headline}</h1>
        <p className="text-xl text-muted">{profile.intro}</p>
        <div className="my-8 flex flex-wrap gap-3">
          <a className="btn" href={profile.resume} download><Download /> Download resume</a>
          <a className="btn btn-ghost" href="#case-studies">View case studies <Arrow /></a>
        </div>
        <Socials />
      </div>

      <div aria-hidden="true" className="relative min-h-80 lg:min-h-115">
        <span className="absolute inset-0 bottom-[12%] right-[12%] rounded-[42%_58%_55%_45%/50%_40%_60%_50%] bg-primary" />
        <div className="absolute bottom-[4%] right-0 aspect-square w-[50%] rounded-full bg-secondary">
          <img src={profile.image} alt="Evans Oshoakpeme, product designer" width={50} height={50} className="absolute bottom-[12%] right-[12%] h-9/12 w-9/12 rounded-full object-cover object-center" />
        </div>
        <span className="absolute bottom-0 left-[6%] aspect-square w-[22%] rotate-18 rounded-[30%] bg-tertiary" />
        {/*<div className="absolute left-[8%] top-[40%] grid max-w-57.5 gap-1 rounded-2xl bg-surface p-5 leading-snug shadow-xl shadow-primary/20">
          <strong className="font-display text-3xl text-primary">1+ years</strong>
          <span className="text-sm text-muted">shipping fintech, health and marketplace products</span>
        </div>*/}
      </div>
    </section>
  );
}
