import type { Metadata } from "next";
import { Karla, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Karla({ subsets: ["latin"], variable: "--font-karla", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });

export const metadata: Metadata = {
  title: "Evans Oshoakpeme | Product Designer",
  description: "Portfolio of Evans Oshoakpeme, a product designer working across fintech, health and marketplaces.",
};

// Sets the theme before first paint to avoid a flash
const themeScript = `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
