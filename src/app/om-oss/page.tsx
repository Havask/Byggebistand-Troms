"use client";
import { Container } from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

/* ─── Data ─── */
const partners = [
  "Boligeiere",
  "Borettslag og sameier",
  "Entreprenører og utbyggere",
  "Advokater",
  "Forsikringsselskaper",
];

const qualifications = ["Svennebrev", "Mesterbrev", "Takstingeniørutdanning"];
const experience = ["40+ års erfaring", "Prosjektleder", "Byggmester"];

const contactInfo = [
  { label: "Besøksadresse", value: "Stakkevollvegen 33, 9010 Tromsø" },
  { label: "Postadresse", value: "Lars Hagerups veg 26, 9012 Tromsø" },
  { label: "Telefon", value: "(+47) 906 49 008", href: "tel:+4777688500" },
  { label: "E-post", value: "oddvar@byggebistand-as.no", href: "mailto:oddvar@byggebistand-as.no" },
];

const hours = [
  { day: "Mandag – Fredag", time: "08:00 – 16:00" },
  { day: "Lørdag", time: "Stengt" },
  { day: "Søndag", time: "Stengt" },
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

/* ─── Check icon ─── */
const Check = () => (
  <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════
   OM OSS PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function Om() {
  const [navbarHeight, setNavbarHeight] = useState(0);

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
          const navHeight = navbar ? navbar.offsetHeight : 80;
          const offset = navHeight + 40;
          const pos = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: pos - offset, behavior: "smooth" });
        }
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] overflow-x-hidden">

      {/* ════════════════ Hero ════════════════ */}
      <section
        className="relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden flex items-center"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div className="absolute inset-0">
          <Image
            src="/img/pexels-sora-shimazaki-5673488.jpg"
            alt="Om Byggebistand Troms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0e2618]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e] via-[#1a4a2e]/30 to-transparent" />
        </div>

        {/* Ghost text */}
        <div className="absolute right-6 md:right-16 bottom-[10%] select-none pointer-events-none">
          <span className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold text-white/[0.025] leading-none tracking-tighter">
            &
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/45 mb-6">
                <span className="w-10 h-px bg-emerald-400/40" />
                Siden 2006
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Kvalitet og
                <br />
                <span className="text-emerald-300">trygghet</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-lg">
                Med solid kompetanse og personlig oppfølging hjelper vi deg hele veien — fra planlegging til ferdigstillelse.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Company Story (LIGHT) ════════════════ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f5f1] via-[#eaf1ec] to-[#f0f5f1]" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#1d4d36]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1d4d36]/55 mb-5">
                  <span className="w-8 h-px bg-[#1d4d36]/25" />
                  Vår historie
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1d4d36] tracking-tight leading-[1.15] mb-6">
                  Byggebistand Troms
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-4 text-[15px] text-[#3a5c4a]/70 leading-[1.8] mb-10">
                  <p>
                    Byggebistand Troms ble etablert i 2006 og har siden den gang vært en ledende aktør innen byggekontroll, taksering og teknisk rådgivning i Troms-regionen.
                  </p>
                  <p>
                    Daglig leder og takstingeniør, Oddvar R. Skjærstein, har bred og lang erfaring innen bransjen. Vårt mål er å sikre kvalitet, trygghet og ryddige prosesser i alle typer byggeprosjekter — fra nybygg til rehabilitering og skadevurdering.
                  </p>
                  <p>
                    Med oss på laget får du en profesjonell og uavhengig aktør som ser til at ditt prosjekt blir gjennomført i henhold til lover, avtaler og bransjestandarder.
                  </p>
                </div>
              </Reveal>

              {/* Partners */}
              <Reveal delay={0.12}>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/40 mb-4">
                  Vi jobber tett med
                </p>
                <div className="flex flex-wrap gap-2">
                  {partners.map((p, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
                                 bg-white/70 border border-[#1d4d36]/[0.06]
                                 text-[13px] text-[#1d4d36]/65 font-medium"
                    >
                      <Check />
                      {p}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Image */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#1d4d36]/[0.04] rounded-full blur-[50px]" />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#1d4d36]/[0.06] shadow-xl shadow-[#1d4d36]/[0.06]">
                  <Image
                    src="/img/AdobeStock_136331781__msi___jpeg.png"
                    alt="Byggebistand Troms"
                    width={720}
                    height={540}
                    className="object-cover w-full aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e]/20 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Founder (DARK) ════════════════ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a4a2e]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4a2e]/95 via-[#1a4a2e]/80 to-[#1a4a2e]/95" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-400/[0.04] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-start">
            {/* Text */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
                  <span className="w-8 h-px bg-white/20" />
                  Daglig leder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                  Oddvar R. <span className="text-emerald-300">Skjærstein</span>
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="text-[15px] text-white/60 leading-[1.8] mb-10 max-w-lg">
                  Takstingeniør med bred og lang erfaring innen de fagområdene firmaet representerer. Med over 40 års erfaring fra byggebransjen, samt svennebrev, mesterbrev og takstingeniørutdanning, har han en solid kompetanse på området.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {/* Qualifications */}
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/35 mb-4">Kvalifikasjoner</p>
                    <div className="space-y-2">
                      {qualifications.map((q, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                          <div className="w-5 h-5 rounded-full bg-emerald-400/15 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[14px] text-white/65 font-medium">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Experience */}
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/35 mb-4">Erfaring</p>
                    <div className="space-y-2">
                      {experience.map((e, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                          <div className="w-5 h-5 rounded-full bg-emerald-400/15 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[14px] text-white/65 font-medium">{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Photo */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-400/[0.06] rounded-full blur-[40px]" />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl shadow-black/20">
                  <Image
                    src="/img/image001.png"
                    alt="Oddvar R. Skjærstein"
                    width={400}
                    height={500}
                    className="object-cover w-full aspect-[3/4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a2e]/40 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Contact (LIGHT) ════════════════ */}
      <section id="kontakt-oss" className="relative py-24 md:py-36 overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f5f1] via-[#eaf1ec] to-[#f0f5f1]" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[#1d4d36]/[0.02] rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1d4d36]/55 mb-4">
                <span className="w-8 h-px bg-[#1d4d36]/25" />
                Ta kontakt
                <span className="w-8 h-px bg-[#1d4d36]/25" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d4d36] tracking-tight">
                Kontakt oss
              </h2>
              <p className="mt-4 text-[15px] text-[#3a5c4a]/60 max-w-md mx-auto leading-relaxed">
                Vi er her for å hjelpe deg. Ta kontakt for spørsmål eller et uforpliktende tilbud.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact details */}
            <Reveal delay={0.05}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#1d4d36]/[0.05] p-8 h-full">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/40 mb-6">Kontaktinformasjon</p>
                <div className="space-y-4">
                  {contactInfo.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1d4d36]/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[11px] font-bold text-[#1d4d36]/40">
                          {idx === 0 ? "📍" : idx === 1 ? "📮" : idx === 2 ? "📞" : "✉️"}
                        </span>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold tracking-wider uppercase text-[#1d4d36]/35 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[15px] font-medium text-[#1d4d36] hover:text-[#1d4d36]/70 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[15px] font-medium text-[#2a3a30]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Hours + CTA */}
            <Reveal delay={0.1}>
              <div className="space-y-6 h-full flex flex-col">
                {/* Hours */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#1d4d36]/[0.05] p-8 flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/40 mb-6">Åpningstider</p>
                  <div className="space-y-4">
                    {hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-[15px] text-[#3a5c4a]/65">{h.day}</span>
                        <span className={`text-[15px] font-semibold ${h.time === "Stengt" ? "text-[#3a5c4a]/35" : "text-[#1d4d36]"}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#1d4d36] rounded-2xl p-8 text-center">
                  <p className="text-white/60 text-[15px] mb-5 leading-relaxed">
                    Klar for en uforpliktende samtale?
                  </p>
                  <a
                    href="mailto:oddvar@byggebistand-as.no?subject=Henvendelse%20fra%20Byggebistand%20Troms"
                    className="group inline-flex items-center justify-center w-full px-8 py-4 bg-white text-[#1d4d36] rounded-xl
                               font-semibold text-base shadow-lg shadow-black/10
                               hover:bg-emerald-50 hover:shadow-xl
                               active:scale-[0.98] transition-all duration-300"
                  >
                    Send oss en e-post
                    <ArrowRightIcon className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </a>
                  <p className="mt-4 text-[12px] text-white/35">Vi svarer normalt innen 1 virkedag.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ Map (DARK) ════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1a4a2e]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4a2e] to-[#1a4a2e]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-0">
          <div className="text-center mb-12">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
                <span className="w-8 h-px bg-white/15" />
                Finn oss
                <span className="w-8 h-px bg-white/15" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Besøk oss
              </h2>
              <p className="mt-3 text-[15px] text-white/45 max-w-md mx-auto leading-relaxed">
                Vi holder til i Stakkevollvegen 33, Tromsø.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative z-10 w-full h-[450px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.4657009970945!2d18.968991900000002!3d69.66546129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c5b38825d625%3A0x23369cff9a5e22f6!2sByggeBistand%20Troms%20AS!5e0!3m2!1sen!2sno!4v1744061223040!5m2!1sen!2sno"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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