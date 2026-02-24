"use client";
import { Container } from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

/* ─── Data ─── */
const priceSections = [
  {
    id: "tilstandsrapport",
    title: "Tilstandsrapport iht forskrift eks. verdi",
    badge: "Mest etterspurt",
    prices: [
      ["Enebolig", "19 000,-", "23 750,-"],
      ["Tomannsbolig", "17 000,-", "21 250,-"],
      ["Rekkehus", "16 000,-", "20 000,-"],
      ["Leiligheter under 60 m²", "12 000,-", "15 000,-"],
      ["Leiligheter over 60 m²", "13 000,-", "16 250,-"],
      ["Fritidseiendom", "14 000,-", "17 500,-"],
      ["Verdi i tillegg til takster over", "4 000,-", "5 000,-"],
    ],
  },
  {
    id: "pantedokumenter",
    title: "Pantedokumenter i bank med verdi",
    badge: null,
    prices: [
      ["Enebolig", "11 200,-", "14 000,-"],
      ["Tomannsbolig", "9 600,-", "12 000,-"],
      ["Rekkehus", "8 800,-", "11 000,-"],
      ["Leiligheter under 60 m²", "6 560,-", "8 200,-"],
      ["Leiligheter over 60 m²", "7 200,-", "9 000,-"],
      ["Fritidseiendom", "6 800,-", "8 500,-"],
    ],
  },
  {
    id: "tilleggstjenester",
    title: "Tilleggstjenester under verditaksering",
    badge: null,
    prices: [
      ["Separat utleiedel i egen bolig", "2 880,-", "3 600,-"],
      ["Garasje/anneks eller uthus", "2 880,-", "3 600,-"],
    ],
  },
  {
    id: "forhandstakster",
    title: "Forhåndstakster",
    badge: null,
    prices: [
      ["Enebolig", "7 920,-", "9 900,-"],
      ["Tomannsbolig", "7 920,-", "9 900,-"],
      ["Rekkehus", "8 640,-", "10 800,-"],
      ["Leiligheter under 60 m²", "6 192,-", "7 740,-"],
      ["Leiligheter over 60 m²", "7 200,-", "9 000,-"],
      ["Fritidseiendom", "6 912,-", "8 640,-"],
      ["Tomtetakster bolig", "8 640,-", "10 800,-"],
      ["Næringstakster i hht avtale", "Tilbud", "Tilbud"],
      ["Byggelånsoppfølging", "Tilbud", "Tilbud"],
      ["Finansiell byggelånsoppfølging", "Tilbud", "Tilbud"],
    ],
  },
  {
    id: "timepriser",
    title: "Ordinære timepriser i prosjekter",
    badge: null,
    prices: [
      ["Ansvarlig søker og byggesøknader", "1 640,-", "2050,-"],
      ["Prosjektledelse med utarbeiding av tilbudsdokumenter", "1 640,-", "2 050,-"],
      ["Vedlikeholdsplaner for borettslag og boligsameier", "Tilbud", "Tilbud"],
      ["Byggekontrolloppdrag", "Tilbud", "Tilbud"],
    ],
  },
  {
    id: "reise",
    title: "Reise / Kjøring",
    badge: null,
    prices: [
      ["Reisekostnader / bykjøring kr 360 eks mva", "Medgått", "Medgått"],
      ["Ferger / tunell / bomstasjoner etc kr 6 pr km eks mva", "Medgåtte km", "Medgåtte km"],
    ],
  },
];

/* ─── Scroll reveal ─── */
function useReveal(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useReveal(0.06);

  return (
    <div
      // ✅ cast ref to satisfy TypeScript
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Navigation helper ─── */
function handleLinkClick(href: string) {
  const [, hash] = href.split("#");
  if (hash) {
    window.location.href = href;
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const offset = navbarHeight + 20;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }, 600);
  } else {
    window.location.href = href;
  }
}

/* ═══════════════════════════════════════════════════════════════════════
   PRISER PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function Priser() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeId, setActiveId] = useState<string>(priceSections[0].id);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) setNavbarHeight(nav.offsetHeight);
  }, []);

  // Hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offset = navbarHeight + 40;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    priceSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(s.id); },
        { rootMargin: "-30% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbar = document.querySelector("nav");
      const offset = (navbar ? navbar.offsetHeight : 80) + 24;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] overflow-x-hidden">

      {/* ════════════════ Hero ════════════════ */}
      <section
        className="relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden flex items-center"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div className="absolute inset-0">
          <Image
            src="/img/pexels-mikhail-nilov-8296990.jpg"
            alt="Priser"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0e2618]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e] via-[#1a4a2e]/30 to-transparent" />
        </div>

        {/* Ghost decorative text */}
        <div className="absolute right-6 md:right-16 bottom-[10%] select-none pointer-events-none">
          <span className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold text-white/[0.025] leading-none tracking-tighter">
            kr
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/45 mb-6">
                <span className="w-10 h-px bg-emerald-400/40" />
                Prisliste 2025
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Transparente
                <br />
                <span className="text-emerald-300">priser</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-lg mb-10">
                Konkurransedyktige priser uten skjulte kostnader. Alle priser er oppgitt med og uten merverdiavgift.
              </p>
            </Reveal>

            {/* Quick jump to categories */}
            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-2">
                {priceSections.slice(0, 4).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="inline-flex items-center px-4 py-2 rounded-xl
                               bg-white/[0.06] border border-white/[0.08]
                               text-[13px] text-white/60 font-medium
                               hover:bg-white/[0.12] hover:border-white/[0.15] hover:text-white/85
                               transition-all duration-300"
                  >
                    {s.title.length > 25 ? s.title.slice(0, 25) + "…" : s.title}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection(priceSections[4].id)}
                  className="inline-flex items-center px-4 py-2 rounded-xl
                             bg-white/[0.06] border border-white/[0.08]
                             text-[13px] text-white/60 font-medium
                             hover:bg-white/[0.12] hover:text-white/85
                             transition-all duration-300"
                >
                  +{priceSections.length - 4} flere
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Price Tables with Sidebar ════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f5f1] via-[#eaf1ec] to-[#f0f5f1]" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-[#1d4d36]/[0.025] rounded-full blur-[140px]" />
        <div className="absolute bottom-60 left-0 w-[500px] h-[500px] bg-[#1d4d36]/[0.02] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">

            {/* Sticky sidebar (desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-28 py-20">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1d4d36]/35 mb-5">
                  Kategorier
                </p>
                <ul className="space-y-0.5">
                  {priceSections.map((s) => {
                    const isActive = activeId === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollToSection(s.id)}
                          className={`w-full text-left flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl text-[13px]
                                      transition-all duration-300
                                      ${isActive
                                        ? "bg-[#1d4d36] text-white font-semibold shadow-lg shadow-[#1d4d36]/15"
                                        : "text-[#3a5c4a]/55 hover:text-[#1d4d36] hover:bg-[#1d4d36]/[0.04] font-medium"
                                      }`}
                        >
                          <span className="truncate">
                            {s.title.length > 30 ? s.title.slice(0, 30) + "…" : s.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Sidebar note */}
                <div className="mt-8 p-4 rounded-xl bg-[#1d4d36]/[0.04] border border-[#1d4d36]/[0.06]">
                  <p className="text-[12px] text-[#3a5c4a]/50 leading-relaxed">
                    Prisene er veiledende. Ta kontakt for et uforpliktende tilbud tilpasset ditt prosjekt.
                  </p>
                </div>
              </div>
            </div>

            {/* Price table cards */}
            <div className="py-16 lg:py-20 space-y-6">
              {priceSections.map((section, sectionIndex) => (
                <Reveal key={section.id} delay={sectionIndex * 0.03}>
                  <div
                    id={section.id}
                    className="scroll-mt-28 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden
                               border border-[#1d4d36]/[0.05] hover:border-[#1d4d36]/[0.1]
                               shadow-sm hover:shadow-xl hover:shadow-[#1d4d36]/[0.04]
                               transition-all duration-500"
                  >
                    {/* Table header */}
                    <div className="px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3
                                    border-b border-[#1d4d36]/[0.06]">
                      <div className="flex items-center gap-3">
                        <h2 className="text-base lg:text-[1.05rem] font-bold text-[#1d4d36]">
                          {section.title}
                        </h2>
                        {section.badge && (
                          <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full
                                           bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                            {section.badge}
                          </span>
                        )}
                      </div>
                      <div className="hidden sm:flex items-center gap-0 text-[11px] font-semibold tracking-wide uppercase text-[#1d4d36]/35">
                        <span className="w-24 text-right">Eks mva</span>
                        <span className="w-6 text-center text-[#1d4d36]/15">/</span>
                        <span className="w-24 text-right">Inkl mva</span>
                      </div>
                    </div>

                    {/* Rows */}
                    <div>
                      {section.prices.map(([type, eksPrice, inklPrice], idx) => (
                        <div
                          key={idx}
                          className={`group px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5
                                      transition-colors duration-200 hover:bg-[#1d4d36]/[0.02]
                                      ${idx < section.prices.length - 1 ? "border-b border-[#1d4d36]/[0.03]" : ""}`}
                        >
                          <span className="text-[14px] text-[#2a3a30] font-medium group-hover:text-[#1d4d36] transition-colors">
                            {type}
                          </span>
                          <div className="flex items-center gap-0 text-[14px] font-semibold tabular-nums">
                            <span className="w-24 text-right text-[#1d4d36]/70">{eksPrice}</span>
                            <span className="w-6 text-center text-[#1d4d36]/15">/</span>
                            <span className="w-24 text-right text-[#1d4d36]">{inklPrice}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Mobile note (hidden on desktop where it's in sidebar) */}
              <div className="lg:hidden text-center pt-4">
                <p className="text-[13px] text-[#3a5c4a]/45 leading-relaxed max-w-md mx-auto">
                  Prisene er veiledende og kan variere basert på oppdragets omfang.
                  Ta kontakt for et uforpliktende tilbud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a4a2e]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4a2e]/95 via-[#1a4a2e]/75 to-[#1a4a2e]/95" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-emerald-400/[0.05] blur-[120px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">
              <span className="w-8 h-px bg-white/20" />
              Spørsmål?
              <span className="w-8 h-px bg-white/20" />
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Ønsker du et tilbud?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-white/55 max-w-md mx-auto leading-relaxed mb-12">
              Kontakt oss for en uforpliktende samtale om priser og tjenester tilpasset ditt prosjekt.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="/om-oss#kontakt-oss"
                onClick={(e) => { e.preventDefault(); handleLinkClick("/om-oss#kontakt-oss"); }}
                className="group inline-flex items-center gap-3 px-10 py-4.5 bg-white text-[#1d4d36] rounded-2xl
                           font-semibold text-base shadow-lg shadow-black/10
                           hover:bg-emerald-50 hover:shadow-xl hover:shadow-black/15
                           active:scale-[0.98] transition-all duration-300"
              >
                Kontakt oss
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <span className="text-sm text-white/45">
                Eller ring{" "}
                <a href="tel:77692200" className="font-semibold text-white/70 hover:text-white transition-colors duration-300">
                  906 49 008
                </a>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        body {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}