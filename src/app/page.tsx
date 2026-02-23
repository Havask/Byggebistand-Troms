"use client";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
import { ArrowRightIcon } from "@heroicons/react/24/solid";

/* ─── Data ─── */
const services = [
  { title: "Byggekontroll", desc: "Kvalitetssikring av bygg og anlegg i henhold til avtaler og standarder.", icon: <BuildingOfficeIcon className="w-5 h-5" />, href: "/tjenester#byggekontroll" },
  { title: "Taksering", desc: "Presis og uavhengig verdivurdering av eiendommer.", icon: <CalculatorIcon className="w-5 h-5" />, href: "/tjenester#taksering" },
  { title: "Skjønn", desc: "Uavhengig faglig vurdering ved tvister og uenigheter.", icon: <ScaleIcon className="w-5 h-5" />, href: "/tjenester#skjonn" },
  { title: "Overlevering", desc: "Profesjonell bistand for sømløs eiendomsoverlevering.", icon: <DocumentCheckIcon className="w-5 h-5" />, href: "/tjenester#overlevering" },
  { title: "Byggelånskontroll", desc: "Kontroll som sikrer trygg utbetaling av byggelån.", icon: <ShieldCheckIcon className="w-5 h-5" />, href: "/tjenester#byggelanskontroll" },
  { title: "Prosjekt- og Byggeledelse", desc: "Helhetlig ledelse fra planlegging til ferdigstillelse.", icon: <WrenchScrewdriverIcon className="w-5 h-5" />, href: "/tjenester#prosjekt-og-byggeledelse" },
  { title: "Byggesøknader", desc: "Effektiv håndtering av søknader og godkjenninger.", icon: <DocumentCheckIcon className="w-5 h-5" />, href: "/tjenester#byggesoknader" },
  { title: "Telefonbistand", desc: "Tilgjengelig for spørsmål og faglig veiledning.", icon: <PhoneIcon className="w-5 h-5" />, href: "/tjenester#telefonbistand" },
  { title: "Rådgivning", desc: "Fremtidsrettet støtte for dine byggeprosjekter.", icon: <UserGroupIcon className="w-5 h-5" />, href: "/tjenester#radgivning" },
];

const stats = [
  { value: "20+", label: "Års erfaring" },
  { value: "1 000+", label: "Takseringer" },
  { value: "500+", label: "Kontroller" },
  { value: "100%", label: "Uavhengig" },
];

const clients = [
  { title: "Private boligeiere", icon: <UserGroupIcon className="w-3.5 h-3.5" /> },
  { title: "Borettslag & Sameier", icon: <BuildingOfficeIcon className="w-3.5 h-3.5" /> },
  { title: "Advokater", icon: <ScaleIcon className="w-3.5 h-3.5" /> },
  { title: "Entreprenører", icon: <WrenchScrewdriverIcon className="w-3.5 h-3.5" /> },
  { title: "Forsikringsselskap", icon: <ShieldCheckIcon className="w-3.5 h-3.5" /> },
];

const certifications = [
  { src: "/img/Skjermbilde 2025-03-21 143945.jpg", alt: "Sentral Godkjenning", label: "" },
  { src: "/img/SG_GULL_HVITBOKS.png", alt: "Startbank Gull", label: "" },
  { src: "/img/Mesterlogo.png", alt: "Mestermerket", label: "" },
];

/* ─── Scroll reveal ─── */
function useReveal(threshold = 0.12): [React.RefObject<HTMLDivElement | null>, boolean] {
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
  const [ref, visible] = useReveal(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
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
   PAGE
   Section rhythm: Hero(dark) → Stats(dark) → Services(light) → About(dark) → Certs(light) → CTA(dark)
═══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8] overflow-x-hidden">

      {/* ════════════════ Hero ════════════════ */}
      <Container>
        <Hero />
      </Container>

      {/* ════════════════ Stats Strip ════════════════ */}
      <section className="relative bg-[#1a4a2e] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className={`py-11 md:py-16 text-center relative
                  ${i > 0 ? "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-px before:bg-white/[0.08]" : ""}`}>
                  <div className="text-2xl md:text-[2rem] font-bold text-emerald-300 tracking-tight mb-1.5">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] text-white/55 font-semibold tracking-[0.18em] uppercase">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ Services (LIGHT) ════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f5f1] via-[#eaf1ec] to-[#f0f5f1]" />
        {/* Decorative blurs */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#1d4d36]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-[#1d4d36]/[0.02] rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1d4d36]/60 mb-4">
                  <span className="w-8 h-px bg-[#1d4d36]/30" />
                  Hva vi tilbyr
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1d4d36] tracking-tight leading-[1.15]">
                  Profesjonelle tjenester for
                  <br />
                  <span className="text-[#1d4d36]/60">bygg og eiendom</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[15px] text-[#3a5c4a]/75 max-w-sm leading-relaxed md:text-right">
                Fra første spadetak til nøkkeloverlevering — vi sikrer kvalitet og trygghet i hvert steg.
              </p>
            </Reveal>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Link
                  href={s.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(s.href); }}
                  className="group relative flex items-start gap-4 rounded-2xl p-5 h-full
                             bg-white/70 backdrop-blur-sm
                             border border-[#1d4d36]/[0.05] hover:border-[#1d4d36]/[0.15]
                             hover:bg-white hover:shadow-xl hover:shadow-[#1d4d36]/[0.06]
                             transition-all duration-500 ease-out"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1d4d36]/[0.06] flex items-center justify-center text-[#1d4d36]/60
                                  group-hover:bg-[#1d4d36] group-hover:text-white
                                  transition-all duration-300 ease-out">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#1a2a20] text-[0.95rem] mb-1 group-hover:text-[#1d4d36] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-[#3a5c4a]/65 leading-relaxed">{s.desc}</p>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-[#1d4d36]/0 group-hover:text-[#1d4d36]/40 flex-shrink-0 mt-1
                                             -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ About + Clients (DARK) ════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a4a2e]" />
        <Image
          src="/img/construction-7369368_1920.png"
          alt=""
          fill
          className="object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4a2e]/90 via-[#1a4a2e]/70 to-[#1a4a2e]/95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — text */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">
                  <span className="w-8 h-px bg-white/25" />
                  Om oss
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                  Erfaring som gir
                  <br />
                  <span className="text-emerald-300">trygghet</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[15px] text-white/65 leading-[1.8] mb-10 max-w-md">
                  Siden 2006 har Byggebistand Troms levert uavhengig kontroll og rådgivning
                  i Troms-regionen. Vi bistår private, næringsdrivende og offentlige aktører
                  med kvalitetssikring i alle faser av byggeprosessen.
                </p>
              </Reveal>

              {/* Clients */}
              <Reveal delay={0.15}>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                  Vi jobber med
                </p>
                <div className="flex flex-wrap gap-2">
                  {clients.map((c, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                                 bg-white/[0.06] border border-white/[0.08]
                                 text-[13px] text-white/65 font-medium
                                 hover:bg-white/[0.12] hover:border-white/[0.15] hover:text-white/85
                                 transition-all duration-300 cursor-default"
                    >
                      <span className="text-white/40">{c.icon}</span>
                      {c.title}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — image */}
            <Reveal delay={0.12}>
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-emerald-400/[0.07] rounded-full blur-[50px]" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-emerald-400/[0.05] rounded-full blur-[40px]" />

                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl shadow-black/20">
                  <Image
                    src="/img/teknisk.jpg"
                    alt="Byggebistand Troms i arbeid"
                    width={720}
                    height={540}
                    className="object-cover w-full aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e]/30 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Certifications (LIGHT) ════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef3ef] via-[#e8eeea] to-[#eef3ef]" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-[#1d4d36]/[0.02] blur-[100px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1d4d36]/55 mb-4">
                <span className="w-8 h-px bg-[#1d4d36]/25" />
                Kvalitetssikret
                <span className="w-8 h-px bg-[#1d4d36]/25" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1d4d36] tracking-tight">
                Godkjenninger
              </h2>
              <p className="mt-4 text-[15px] text-[#3a5c4a]/65 max-w-md mx-auto leading-relaxed">
                Sertifisert og anerkjent — din garanti for profesjonell kvalitet.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {certifications.map((cert, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-52
                               border border-[#1d4d36]/[0.04] hover:border-[#1d4d36]/[0.12]
                               shadow-sm hover:shadow-xl hover:shadow-[#1d4d36]/[0.05]
                               transition-all duration-500 group cursor-default">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={180}
                    height={180}
                    className="object-contain h-28 max-h-28 group-hover:scale-[1.05] transition-transform duration-500"
                  />
                  <span className="mt-4 text-[11px] font-semibold tracking-wider uppercase text-[#1d4d36]/40
                                   group-hover:text-[#1d4d36]/65 transition-colors duration-300">
                    {cert.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA (DARK) ════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a4a2e]" />
        <Image
          src="/img/construction-7194274_1920.png"
          alt=""
          fill
          className="object-cover opacity-[0.1] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4a2e]/95 via-[#1a4a2e]/80 to-[#1a4a2e]/95" />
        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-emerald-400/[0.04] blur-[100px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">
              <span className="w-8 h-px bg-white/20" />
              Kom i gang
              <span className="w-8 h-px bg-white/20" />
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15] mb-5">
              Klar for ditt neste prosjekt?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[15px] text-white/60 max-w-md mx-auto leading-relaxed mb-12">
              Kontakt oss for en uforpliktende samtale om hvordan vi kan bidra til å sikre kvaliteten i ditt prosjekt.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/om-oss#kontakt-oss"
                onClick={(e) => { e.preventDefault(); handleLinkClick("/om-oss#kontakt-oss"); }}
                className="group inline-flex items-center gap-3 px-9 py-4 bg-white text-[#1d4d36] rounded-2xl
                           font-semibold text-base shadow-lg shadow-black/10
                           hover:bg-emerald-50 hover:shadow-xl hover:shadow-black/15
                           active:scale-[0.98] transition-all duration-300"
              >
                Kontakt oss
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
              <span className="text-sm text-white/50">
                Eller ring{" "}
                <a href="tel:77692200" className="font-semibold text-white/75 hover:text-white transition-colors duration-300">
                  776 92 200
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