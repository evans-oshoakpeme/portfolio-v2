import type { SVGProps } from "react";

const p: SVGProps<SVGSVGElement> = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const Menu = () => <svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Close = () => <svg {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>;
export const Sun = () => <svg {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
export const Moon = () => <svg {...p}><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>;
export const Download = () => <svg {...p}><path d="M12 3v12M7 10l5 5 5-5M4 20h16" /></svg>;
export const Arrow = () => <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const Back = () => <svg {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
export const External = () => <svg {...p}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" /></svg>;
export const Github = () => <svg {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>;
export const Linkedin = () => <svg {...p}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg>;
export const Dribbble = () => <svg {...p}><circle cx="12" cy="12" r="10" /><path d="M8.6 3.2c3.8 4.5 5.5 8.5 6.3 17.3M2.1 11c5.5.4 11-.4 14.8-3.3M5 19c3.5-5 9-6.5 16.8-4.8" /></svg>;
export const X = () => <svg {...p}><path d="M4 4l16 16M20 4L4 20" /></svg>;
