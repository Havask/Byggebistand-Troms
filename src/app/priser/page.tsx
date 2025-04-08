"use client";
import { Container } from "@/components/Container";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Priser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const buffer = 40;
          const offset = navbarHeight + buffer;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faf9] font-sans overflow-x-hidden">
      {/* Hero Section - Matching the "Om oss" page */}
      <section className="relative bg-gradient-to-r from-[#dde6df] to-[#e8f0ea] h-[65vh] min-h-[500px]">
        <div className="absolute inset-0 bg-[#205e37] opacity-5 z-0"></div>
        
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Text content - left half */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8">
            <Container className="max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#205e37]">
                Våre priser
              </h1>
              <p className="text-lg md:text-xl text-[#205e37]/90 leading-relaxed">
                Uansett om du er privatkunde eller representerer en bedrift, er vi her for å sikre at ditt byggeprosjekt gjennomføres på en trygg, effektiv og profesjonell måte. Med vår ekspertise innen byggekontroll, taksering, prosjektledelse og rådgivning.
              </p>
            </Container>
          </div>
          
          {/* Image - right half */}
          <div className="w-full md:w-1/2 h-full relative hidden md:block">
            <Image
              src="/Byggebistand-Troms/img/calc-ezgif.com-webp-to-png-converter.png"
              alt="Calculator illustration"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={sectionRef} className="py-16 sm:py-20">
        <Container>
          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                title: "Tilstandsrapport iht forskrift eks. verdi",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                prices: [
                  ["Enebolig", "19 000,- / 23 750,-"],
                  ["Tomannsbolig", "17 000,- / 21 250,-"],
                  ["Rekkehus", "16 000,- / 20 000,-"],
                  ["Leiligheter under 60 m²", "12 000,- / 15 000,-"],
                  ["Leiligheter over 60 m²", "13 000,- / 16 250,-"],
                  ["Fritidseiendom", "14 000,- / 17 500,-"],
                  ["Verdi i tillegg til takster over", "4 000,- / 5 000,-"],
                ],
              },
              {
                title: "Pantedokumenter i bank med verdi",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                prices: [
                  ["Enebolig", "8 400,- / 10 500,-"],
                  ["Tomannsbolig", "7 920,- / 9 900,-"],
                  ["Rekkehus", "7 920,- / 9 900,-"],
                  ["Leiligheter under 60 m²", "6 560,- / 8 200,-"],
                  ["Leiligheter over 60 m²", "7 200,- / 9 000,-"],
                  ["Fritidseiendom", "6 800,- / 8 500,-"],
                ],
              },
              {
                title: "Tilleggstjenester under verditaksering",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
                prices: [
                  ["Separat utleiedel i egen bolig", "2 880,- / 3 600,-"],
                  ["Garasje/anneks eller uthus", "2 880,- / 3 600,-"],
                ],
              },
              {
                title: "Forhåndstakster",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                prices: [
                  ["Enebolig", "7 920,- / 9 900,-"],
                  ["Tomannsbolig", "7 920,- / 9 900,-"],
                  ["Rekkehus", "8 640,- / 10 800,-"],
                  ["Leiligheter under 60 m²", "6 192,- / 7 740,-"],
                  ["Leiligheter over 60 m²", "7 200,- / 9 000,-"],
                  ["Fritidseiendom", "6 912,- / 8 640,-"],
                  ["Tomtetakster bolig", "8 640,- / 10 800,-"],
                  ["Næringstakster i hht avtale", "Tilbud / Tilbud"],
                  ["Byggelånsoppfølging", "Tilbud / Tilbud"],
                  ["Finansiell byggelånsoppfølging", "Tilbud / Tilbud"],
                ],
              },
              {
                title: "Ordinære timepriser i prosjekter",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                prices: [
                  ["Ansvarlig søker og byggesøknader", "1 560,- / 1 950,-"],
                  ["Prosjektledelse med utarbeiding av tilbudsdokumenter", "1 560,- / 1 950,-"],
                  ["Vedlikeholdsplaner for borettslag og boligsameier", "Tilbud / Tilbud"],
                  ["Byggekontrolloppdrag", "Tilbud / Tilbud"],
                ],
              },
              {
                title: "Reise / Kjøring",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                prices: [
                  ["Reisekostnader/bykjøring kr 300 eks mva", "Medgått / Medgått"],
                  ["Ferger/tunell/bomstasjoner etc kr 6 pr km eks mva", "Medgåtte km / Medgåtte km"],
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                className="bg-white rounded-xl shadow-lg border border-[#205e37]/10 hover:shadow-xl hover:border-[#205e37]/20 transition-all"
              >
                <div className="px-6 py-4 flex items-center space-x-3 bg-[#f5f9f6] border-b border-[#205e37]/10">
                  <div className="text-[#205e37]">
                    {section.icon}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-[#205e37]">
                    {section.title}
                  </h2>
                </div>
                <div className="divide-y divide-[#205e37]/10">
                  {section.prices.map(([type, price], idx) => (
                    <div key={idx} className="px-6 py-3 hover:bg-[#f5f9f6] transition-colors duration-150">
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-700">{type}</div>
                        <div className="font-semibold text-[#205e37] whitespace-nowrap">
                          {price.split('/').map((p, i) => (
                            <span key={i}>
                              {i > 0 && <span className="mx-1">/</span>}
                              {p.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

     
          </div>
        </Container>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}