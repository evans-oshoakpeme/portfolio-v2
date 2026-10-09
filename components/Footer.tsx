import { profile } from "@/data/content";
import Socials from "./Socials";
import { Download } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[linear-gradient(135deg,var(--footer-a),var(--footer-b))] pt-20 text-white">
      <div className="container-x grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.75rem)] font-bold">Let&apos;s work together</h2>
          <p className="text-xl text-white/80">Have a product that needs design? I&apos;d love to hear about it.</p>
          <a className="btn border-white bg-white text-[#1D4F82]!" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="grid content-end gap-5 md:justify-items-end">
          <Socials className="[&_.icon-btn]:border-white/25 [&_.icon-btn]:bg-white/10 [&_.icon-btn]:text-white" />
          <a className="link text-white!" href={profile.resume} download><Download /> Download resume</a>
        </div>
      </div>
      <p className="container-x mb-0 mt-16 max-w-none border-t border-white/20 py-6 text-sm text-white/70">
        © {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  );
}
