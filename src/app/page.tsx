"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const services = [
  { title: "Byggekontroll", desc: "Kvalitet i fokus.", icon: <BuildingOfficeIcon className="w-6 h-6" /> },
  { title: "Taksering", desc: "Presis verdivurdering.", icon: <CalculatorIcon className="w-6 h-6" /> },
  { title: "Skjønn", desc: "Uavhengig innsikt.", icon: <ScaleIcon className="w-6 h-6" /> },
  { title: "Overlevering", desc: "Sømløs overgang.", icon: <DocumentCheckIcon className="w-6 h-6" /> },
  { title: "Byggelånskontroll", desc: "Økonomisk trygghet.", icon: <ShieldCheckIcon className="w-6 h-6" /> },
  { title: "Prosjekt- og Byggeledelse", desc: "Ledelse med visjon.", icon: <WrenchScrewdriverIcon className="w-6 h-6" /> },
  { title: "Byggesøknader", desc: "Effektivitet først.", icon: <DocumentCheckIcon className="w-6 h-6" /> },
  { title: "Telefonbistand", desc: "Alltid tilgjengelig.", icon: <PhoneIcon className="w-6 h-6" /> },
  { title: "Rådgivning", desc: "Fremtidsrettet støtte.", icon: <UserGroupIcon className="w-6 h-6" /> },
];

const clients = [
  { title: "Private boligeiere", icon: <UserGroupIcon /> },
  { title: "Borettslag og boligsameier", icon: <UserGroupIcon /> },
  { title: "Advokater", icon: <ScaleIcon /> },
  { title: "Entreprenører/utbyggere", icon: <WrenchScrewdriverIcon /> },
  { title: "Forsikringsselskap", icon: <ShieldCheckIcon /> },
];

export default function Home() {
  const basePath = "";
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.opacity = scrollY > 150 ? "0.9" : "1";
      }

      sectionRefs.current.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          const cards = section.querySelectorAll(".card-animate");
          if (sectionTop < windowHeight * 0.75) { // Changed from 0.6 to 0.75
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("is-visible");
              }, index * 150); // Changed from 200ms to 150ms
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionLinks = [
    { name: "Byggekontroll", href: `/Byggebistand-Troms/tjenester#byggekontroll` },
    { name: "Taksering", href: `/Byggebistand-Troms/tjenester#taksering` },
    { name: "Skjønn", href: `/Byggebistand-Troms/tjenester#skjonn` },
    { name: "Overlevering", href: `/Byggebistand-Troms/tjenester#overlevering` },
    { name: "Byggelånskontroll", href: `/Byggebistand-Troms/tjenester#byggelanskontroll` },
    { name: "Prosjekt- og Byggeledelse", href: `/Byggebistand-Troms/tjenester#prosjekt-og-byggeledelse` },
    { name: "Byggesøknader", href: `/Byggebistand-Troms/tjenester#byggesoknader` },
    { name: "Telefonbistand", href: `/Byggebistand-Troms/tjenester#telefonbistand` },
    { name: "Rådgivning", href: `/Byggebistand-Troms/tjenester#radgivning` },
  ];

  const handleLinkClick = (href: string, title: string) => {
    console.log(`Clicked: ${title}, Navigating to: ${href}`);
    const [path, hash] = href.split("#");
    if ((path === `${basePath}/tjenester` || path === `${basePath}/om-oss`) && hash) {
      window.location.href = href;
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offset = navbarHeight + 20;
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
    <div className="min-h-screen bg-white font-sans overflow-x-hidden snap-y snap-mandatory">
      <Container>
        <div className="snap-start">
          <Hero />
        </div>

        <section
          ref={(el) => {
            if (el) sectionRefs.current[0] = el;
          }}
          className="py-24 lg:py-32 bg-[#dde6df] text-[#205e38] snap-start"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-arial tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#205e38] to-[#2e7d5a]">
                Trygghet i hvert prosjekt
              </h2>
              <div className="mt-6 max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Siden 2006 har Byggebistand Troms levert pålitelige tjenester med fokus på kvalitet og trygghet.
                  Vår ekspertise sikrer optimal resultat for både private og næringsdrivende.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              <div className="flex flex-col justify-between space-y-10 h-full">
                <div>
                  <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_-15px_rgba(32,94,56,0.3)] transition-all duration-500 card-animate">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <ShieldCheckIcon className="w-8 h-8 text-[#205e38]" />
                      Våre kjerneområder
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { title: "Byggekontroll", desc: "Sikrer avtaler og standarder", icon: <BuildingOfficeIcon className="w-5 h-5" /> },
                        { title: "Taksering", desc: "Nøyaktig verdivurdering", icon: <CalculatorIcon className="w-5 h-5" /> },
                        { title: "Overlevering", desc: "Trygg bistand ved transaksjoner", icon: <DocumentCheckIcon className="w-5 h-5" /> },
                        { title: "Byggelånskontroll", desc: "Økonomisk trygghet", icon: <ShieldCheckIcon className="w-5 h-5" /> },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="group p-5 bg-[#f0f7f2] rounded-xl hover:bg-[#205e38] transition-all duration-300 hover:-translate-y-1 card-animate"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-white rounded-lg text-[#205e38] group-hover:bg-[#1a4c2f] group-hover:text-white">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg group-hover:text-white">{item.title}</h4>
                              <p className="text-gray-700 text-sm group-hover:text-white/90 mt-1">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                    <div className="p-6 bg-white rounded-2xl shadow-[0_5px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_-10px_rgba(32,94,56,0.2)] transition-all duration-300 group card-animate">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[#205e38]/10 rounded-full">
                          <ShieldCheckIcon className="w-6 h-6 text-[#205e38] group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold">Kvalitet</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Vi holder høye standarder gjennom hele prosessen med nøye kontroll og faglig ekspertise.
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-[0_5px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_-10px_rgba(32,94,56,0.2)] transition-all duration-300 group card-animate">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[#205e38]/10 rounded-full">
                          <ScaleIcon className="w-6 h-6 text-[#205e38] group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold">Pålitelighet</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Ærlig rådgivning og grundig oppfølging gir deg forutsigbare og solide resultater.
                      </p>
                    </div>
                  </div>
                </div>

   
              </div>

              <div className="flex flex-col h-full">
                <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group flex-1 card-animate">
                  <Image
                    src="/Byggebistand-Troms/img/AdobeStock_136331781__msi___jpeg.png"
                    alt="Profesjonell byggekontroll i Troms"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                <div className="mt-8 p-8 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-[#205e38]/10 card-animate">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-[#205e38]/10 rounded-full">
                      <DocumentCheckIcon className="w-6 h-6 text-[#205e38]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Vårt løfte til deg</h3>
                      <blockquote className="text-gray-700 italic border-l-4 border-[#205e38] pl-4 py-1 mb-4">
                        "Trygge og profesjonelle byggetjenester i Troms"
                      </blockquote>
                      <p className="text-gray-700">
                        Vi leverer et bredt spekter av tjenester med fokus på kvalitet og trygghet gjennom hele prosessen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={(el) => {
            if (el) sectionRefs.current[1] = el;
          }}
          className="min-h-screen bg-[#205e38] text-white relative snap-start flex items-center justify-center"
        >
          <div className="absolute inset-0">
            <Image
              src="/Byggebistand-Troms/img/construction-7369368_1920.png"
              alt="Construction Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-arial text-white">
              Våre tjenester 
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Vi tilbyr en bred portefølje av profesjonelle tjenester for private boligeiere, bedrifter og utviklere, med fokus på kvalitet og trygghet.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: "1fr" }}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={sectionLinks.find((link) => link.name === service.title)?.href || `${basePath}/tjenester`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(
                      sectionLinks.find((link) => link.name === service.title)?.href || `${basePath}/tjenester`,
                      service.title
                    );
                  }}
                  className="group relative bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl card-animate"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-2 bg-[#205e38]/20 rounded-lg text-white group-hover:bg-[#205e38]/40 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#dde6df] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-white/80 text-sm">{service.desc}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="absolute right-4 bottom-4 w-5 h-5 text-white/60 group-hover:text-[#dde6df] group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={(el) => {
            if (el) sectionRefs.current[2] = el;
          }}
          className="py-24 lg:py-32 bg-[#dde6df] text-[#205e38] snap-start"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-arial">
              Våre Godkjenninger
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Sammen bygger vi en grønnere fremtid med sertifisert kvalitet
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 lg:px-16">
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center h-48 card-animate">
              <Image
                src="/Byggebistand-Troms/img/Skjermbilde 2025-03-21 143945.jpg"
                alt="Godkjenning 1"
                width={200}
                height={200}
                className="object-contain h-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center h-48 card-animate">
              <Image
                src="/Byggebistand-Troms/img/SG_GULL_HVITBOKS.png"
                alt="Godkjenning 2"
                width={200}
                height={200}
                className="object-contain h-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center h-48 card-animate">
              <Image
                src="/Byggebistand-Troms/img/Mesterlogo.png"
                alt="Godkjenning 3"
                width={200}
                height={200}
                className="object-contain h-full"
              />
            </div>
          </div>
        </section>
        <section
  ref={(el) => {
    if (el) sectionRefs.current[3] = el;
  }}
  className="py-24 lg:py-32 bg-gradient-to-br from-[#205e38] to-[#1a4c2f] text-white relative snap-start"
>
  <div className="absolute inset-0">
    <Image
      src="/Byggebistand-Troms/img/construction-7194274_1920.png"
      alt="Construction Background"
      fill
      className="object-cover opacity-10"
      priority
    />
  </div>
  <div className="relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
          <span className="relative z-10 px-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#dde6df]">
            Våre Partnere
          </span>
          <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#dde6df]/30 z-0"></span>
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mt-6">
          Vi samarbeider med ledende aktører i bransjen for å sikre beste kvalitet og løsninger
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm card-animate group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  {React.cloneElement(client.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
                  <div className="w-full bg-white/10 h-px mb-3 group-hover:bg-white/20 transition-colors"></div>
                  <p className="text-white/80 text-sm">Dedikert samarbeid for beste løsninger</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl card-animate group">
          <Image
            src="/Byggebistand-Troms/img/1-96196c3e.png"
            alt="Partners Image"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Strategiske samarbeid</h3>
              <p className="text-white/90">Gjennom langvarige partnerskap sikrer vi kontinuerlig kvalitetsutvikling</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos section */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-semibold mb-8 text-white/90">
          Noen av våre samarbeidspartnere
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center h-32 card-animate"
            >
              <div className="text-white/50 text-lg font-medium">
                Partner Logo {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

        <section
          ref={(el) => {
            if (el) sectionRefs.current[4] = el;
          }}
          className="py-24 lg:py-32 bg-[#dde6df] text-[#205e38] snap-start"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold">
              Klar for ditt neste prosjekt?
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Kontakt oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe deg.
            </p>
            <div className="mt-8 card-animate">
              <Link
                href={`${basePath}/om-oss#kontakt-oss`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(`/Byggebistand-Troms/om-oss#kontakt-oss`, "Kontakt oss");
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#205e38] text-white rounded-xl font-semibold text-lg hover:bg-[#1a4c2f] hover:shadow-lg transition-all duration-300"
              >
                Kontakt oss
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </Container>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .card-animate {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .card-animate.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}