import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) setNavbarHeight(nav.offsetHeight);
  }, []);

  const handleLinkClick = (href: string) => {
    const [path, hash] = href.split("#");
    if (path === "/om-oss" && hash) {
      window.location.href = href;
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const buffer = 40;
          const offset = navbarHeight + buffer;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 600);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: `${navbarHeight}px` }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/background.jpg')" }}
      />

      {/* Readability scrim — darkens behind the text, photo stays visible at the edges */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% 45%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.12) 75%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center px-4 text-center lg:px-8">
        {/* Eyebrow */}
        <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 animate-fade-in [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
          <span className="h-px w-8 bg-white/25" />
          Byggebistand Troms
          <span className="h-px w-8 bg-white/25" />
        </span>

        {/* Main title */}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in animation-delay-200 [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
          Rådgivning, Kontroll
          <br className="hidden sm:block" /> og{" "}
          <span className="bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            Taksering
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl animate-fade-in animation-delay-400 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
          Daglig leder, takstingeniør Oddvar R. Skjærstein, representerer firmaet
          med bred erfaring og mange års fartstid innen sine fagområder.
        </p>

        {/* Call-to-Action */}
        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center animate-fade-in animation-delay-600">
          <a
            href="/om-oss#kontakt-oss"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("/om-oss#kontakt-oss");
            }}
            className="group inline-flex items-center gap-3 rounded-2xl bg-white px-9 py-4 text-base font-semibold text-[#1d4d36] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-emerald-50 hover:shadow-[0_8px_45px_-6px_rgba(110,231,183,0.6)] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Kontakt oss
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/tjenester"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/25 px-9 py-4 text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Se tjenester
          </a>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in animation-delay-600">
        <svg className="h-6 w-6 animate-bounce text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};