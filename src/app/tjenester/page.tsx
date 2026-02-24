"use client";
import { Container } from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  BuildingOfficeIcon,
  CalculatorIcon,
  DocumentCheckIcon,
  PhoneIcon,
  UserGroupIcon,
  ScaleIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

/* ─── Data ─── */
const services = [
  {
    id: "byggekontroll",
    title: "Byggekontroll",
    subtitle: "Kvalitetssikring",
    description: "Ekstern kontroll av byggeprosjekter for å sikre at arbeid utføres etter avtaler og gjeldende krav. Dette er en frivillig tjeneste som gir ekstra trygghet for deg som byggherre.",
    highlights: ["Uavhengig kontroll", "Etterlevelse", "Ekstra trygghet"],
    image: "/img/pexels-sevenstormphotography-439416-2.jpg",
    icon: <BuildingOfficeIcon className="w-5 h-5" />,
  },
  {
    id: "taksering",
    title: "Taksering",
    subtitle: "Verdivurdering",
    description: "Profesjonell taksering av boliger, tomter og næringseiendommer, inkludert tilstandsrapporter og verdivurdering for finansiering eller forsikring.",
    highlights: ["Tilstandsrapporter", "Verdivurdering", "Forsikring & finans"],
    image: "/img/pexels-rdne-5921494.jpg",
    icon: <CalculatorIcon className="w-5 h-5" />,
  },
  {
    id: "skjonn",
    title: "Skjønn",
    subtitle: "Faglig vurdering",
    description: "Sagkyndig vurdering ved større bygningsskader for å sikre riktig skadeoppgjør mellom forsikringstaker og forsikringsselskap, basert på gjeldende vilkår.",
    highlights: ["Bygningsskader", "Skadeoppgjør", "Vilkårsbasert"],
    image: "/img/pexels-sora-shimazaki-5669602.jpg",
    icon: <ScaleIcon className="w-5 h-5" />,
  },
  {
    id: "overlevering",
    title: "Overlevering",
    subtitle: "Trygg overtakelse",
    description: "Bistand ved overtakelse av ny eller brukt bolig, med kontroll av teknisk standard og dokumentasjon for å sikre en trygg handel for både kjøper og selger.",
    highlights: ["Teknisk kontroll", "Dokumentasjon", "Kjøper & selger"],
    image: "/img/pexels-rdne-8293778.jpg",
    icon: <DocumentCheckIcon className="w-5 h-5" />,
  },
  {
    id: "byggelanskontroll",
    title: "Byggelånskontroll",
    subtitle: "Økonomisk sikring",
    description: "Uavhengig oppfølging av byggeprosjekter for å sikre at utbetalinger fra byggelån skjer i takt med fremdriften og etter bankens krav.",
    highlights: ["Fremdriftskontroll", "Bankens krav", "Uavhengig"],
    image: "/img/worker-8941865_1280.jpg",
    icon: <ShieldCheckIcon className="w-5 h-5" />,
  },
  {
    id: "prosjekt-og-byggeledelse",
    title: "Prosjekt- og byggeledelse",
    subtitle: "Helhetlig ledelse",
    description: "Faglig oppfølging av byggeprosjekter fra start til ferdigstillelse, for å sikre kvalitet, fremdrift og at kontrakter overholdes.",
    highlights: ["Start til slutt", "Kvalitetssikring", "Kontraktoppfølging"],
    image: "/img/construction-8734283_1280.png",
    icon: <WrenchScrewdriverIcon className="w-5 h-5" />,
  },
  {
    id: "byggesoknader",
    title: "Byggesøknader",
    subtitle: "Søknadshåndtering",
    description: "Hjelp med byggesøknader, ansvarlig søker-rolle og byggteknisk prosjektering for en smidig godkjenningsprosess.",
    highlights: ["Ansvarlig søker", "Prosjektering", "Godkjenning"],
    image: "/img/pexels-olly-3760072.jpg",
    icon: <DocumentCheckIcon className="w-5 h-5" />,
  },
  {
    id: "telefonbistand",
    title: "Telefonbistand",
    subtitle: "Rask rådgivning",
    description: "Rask og profesjonell byggteknisk rådgivning over telefon, med mulighet for videre oppfølging ved behov.",
    highlights: ["Umiddelbar hjelp", "Faglig veiledning", "Videre oppfølging"],
    image: "/img/phone-1831920_1280.png",
    icon: <PhoneIcon className="w-5 h-5" />,
  },
  {
    id: "radgivning",
    title: "Rådgivning",
    subtitle: "Strategisk støtte",
    description: "Uavhengig rådgivning innen byggeprosjekter, kontrakter og tekniske løsninger for å sikre smarte valg og god gjennomføring.",
    highlights: ["Kontrakter", "Tekniske løsninger", "Smarte valg"],
    image: "/img/pexels-vlada-karpovich-7433837.jpg",
    icon: <UserGroupIcon className="w-5 h-5" />,
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

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useReveal(0.06);
  return (
<div
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
   TJENESTER PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function Tjenester() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);
  const servicesContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) setNavbarHeight(nav.offsetHeight);
  }, []);

  // Track active service + scroll progress
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(s.id); },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const handleScroll = () => {
      const container = servicesContainerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const total = container.scrollHeight;
      const progress = Math.min(1, Math.max(0, (-rect.top) / (total - window.innerHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbar = document.querySelector("nav");
      const offset = (navbar ? navbar.offsetHeight : 80) + 24;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const activeIndex = services.findIndex((s) => s.id === activeId);

  return (
    <div className="min-h-screen bg-[#fafaf8] overflow-x-hidden">

      {/* ════════════════ Hero ════════════════ */}
      <section
        className="relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden flex items-center"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/img/pexels-pixabay-416405.jpg"
            alt="Byggeprosjekt"
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
            09
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/45 mb-6">
                <span className="w-10 h-px bg-emerald-400/40" />
                9 tjenester
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Tjenester som
                <br />
                sikrer <span className="text-emerald-300">ditt prosjekt</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-lg mb-10">
                Fra kontroll og taksering til rådgivning og byggeledelse — solid ekspertise tilpasset dine behov.
              </p>
            </Reveal>

            {/* Quick-jump pills */}
            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 5).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToService(s.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                               bg-white/[0.06] border border-white/[0.08]
                               text-[13px] text-white/60 font-medium
                               hover:bg-white/[0.12] hover:border-white/[0.15] hover:text-white/85
                               transition-all duration-300"
                  >
                    <span className="text-white/35">{s.icon}</span>
                    {s.title}
                  </button>
                ))}
                <button
                  onClick={() => scrollToService(services[5].id)}
                  className="inline-flex items-center px-4 py-2 rounded-xl
                             bg-white/[0.06] border border-white/[0.08]
                             text-[13px] text-white/60 font-medium
                             hover:bg-white/[0.12] hover:text-white/85
                             transition-all duration-300"
                >
                  +{services.length - 5} flere
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Services — Deep Dive with sidebar ════════════════ */}
      <section ref={servicesContainerRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f5f1] via-[#eaf1ec] to-[#f0f5f1]" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-[#1d4d36]/[0.025] rounded-full blur-[140px]" />
        <div className="absolute bottom-60 left-0 w-[500px] h-[500px] bg-[#1d4d36]/[0.02] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-20">

            {/* ── Sticky sidebar (desktop) ── */}
            <div className="hidden lg:block">
              <div className="sticky top-28 py-20">
                {/* Progress indicator */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative w-full h-0.5 bg-[#1d4d36]/[0.08] rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-[#1d4d36]/40 rounded-full transition-all duration-300"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#1d4d36]/30 tabular-nums whitespace-nowrap">
                    {String(activeIndex + 1).padStart(2, "0")}/{String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Nav items */}
                <ul className="space-y-0.5">
                  {services.map((s, i) => {
                    const isActive = activeId === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollToService(s.id)}
                          className={`w-full text-left flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl text-[13px]
                                      transition-all duration-300 group relative
                                      ${isActive
                                        ? "bg-[#1d4d36] text-white font-semibold shadow-lg shadow-[#1d4d36]/15"
                                        : "text-[#3a5c4a]/55 hover:text-[#1d4d36] hover:bg-[#1d4d36]/[0.04] font-medium"
                                      }`}
                        >
                          <span className={`text-[10px] font-bold tabular-nums w-5 flex-shrink-0 transition-colors duration-300
                                            ${isActive ? "text-emerald-300" : "text-[#1d4d36]/20 group-hover:text-[#1d4d36]/40"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="truncate">{s.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* ── Service entries ── */}
            <div className="py-16 lg:py-20">
              {services.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28"
                  >
                    <Reveal>
                      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                                       gap-8 md:gap-12 lg:gap-16 items-center
                                       py-14 md:py-20 lg:py-24
                                       ${index < services.length - 1 ? "border-b border-[#1d4d36]/[0.06]" : ""}`}>

                        {/* Image with overlay badge */}
                        <div className="w-full md:w-[55%] flex-shrink-0">
                          <div className="relative group">
                            {/* Decorative offset frame */}
                            <div className={`absolute ${isEven ? "-right-3 -bottom-3" : "-left-3 -bottom-3"}
                                            w-full h-full rounded-2xl border border-[#1d4d36]/[0.08] -z-10
                                            group-hover:translate-x-0 group-hover:translate-y-0
                                            transition-transform duration-500`}
                            />
                            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#1d4d36]/[0.06]
                                            ring-1 ring-[#1d4d36]/[0.06]">
                              <Image
                                src={service.image}
                                alt={service.title}
                                width={700}
                                height={460}
                                className="object-cover w-full aspect-[3/2]
                                           group-hover:scale-[1.04] transition-transform duration-[800ms] ease-out"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e]/30 via-transparent to-transparent
                                              opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="w-full md:w-[45%]">
                          <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-[#1d4d36]/[0.07] flex items-center justify-center text-[#1d4d36]/60">
                              {service.icon}
                            </div>
                            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/40">
                              {service.subtitle}
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-[1.75rem] lg:text-3xl font-bold text-[#1d4d36] tracking-tight leading-[1.15] mb-4">
                            {service.title}
                          </h2>

                          <p className="text-[15px] text-[#3a5c4a]/65 leading-[1.8] mb-6">
                            {service.description}
                          </p>

                          {/* Highlight tags */}
                          <div className="flex flex-wrap gap-2">
                            {service.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                                           bg-[#1d4d36]/[0.04] border border-[#1d4d36]/[0.06]
                                           text-[12px] font-medium text-[#1d4d36]/55"
                              >
                                <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a4a2e]" />
        <Image
          src="/img/construction-7194274_1920.png"
          alt=""
          fill
          className="object-cover opacity-[0.08] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4a2e]/95 via-[#1a4a2e]/75 to-[#1a4a2e]/95" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-emerald-400/[0.05] blur-[120px] -translate-x-1/2 -translate-y-1/2" />

        {/* Large decorative text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="text-[10rem] md:text-[16rem] font-bold text-white/[0.02] leading-none tracking-tighter">
            ?
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">
              <span className="w-8 h-px bg-white/20" />
              Kom i gang
              <span className="w-8 h-px bg-white/20" />
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Klar for å starte?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-white/55 max-w-md mx-auto leading-relaxed mb-12">
              Kontakt oss for en uforpliktende samtale om hvordan vi kan hjelpe deg med ditt neste prosjekt.
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