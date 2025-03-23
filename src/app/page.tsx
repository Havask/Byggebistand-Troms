"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
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

// Service and Client Data
const services = [
  { title: "Byggekontroll", icon: <BuildingOfficeIcon />, desc: "Kvalitet i fokus." },
  { title: "Taksering", icon: <CalculatorIcon />, desc: "Presis verdivurdering." },
  { title: "Skjønn", icon: <DocumentCheckIcon />, desc: "Uavhengig innsikt." },
  { title: "Overlevering", icon: <BuildingOfficeIcon />, desc: "Sømløs overgang." },
  { title: "Byggelånskontroll", icon: <CalculatorIcon />, desc: "Økonomisk trygghet." },
  { title: "Prosjekt- og Byggeledelse", icon: <WrenchScrewdriverIcon />, desc: "Ledelse med visjon." },
  { title: "Byggesøknader", icon: <DocumentCheckIcon />, desc: "Effektivitet først." },
  { title: "Telefonbistand", icon: <PhoneIcon />, desc: "Alltid tilgjengelig." },
  { title: "Rådgivning", icon: <ScaleIcon />, desc: "Fremtidsrettet støtte." },
];

const clients = [
  { title: "Private boligeiere", icon: <UserGroupIcon /> },
  { title: "Borettslag og boligsameier", icon: <UserGroupIcon /> },
  { title: "Advokater", icon: <ScaleIcon /> },
  { title: "Entreprenører/utbyggere", icon: <WrenchScrewdriverIcon /> },
  { title: "Forsikringsselskap", icon: <ShieldCheckIcon /> },
];

export default function Home() {
  const basePath = "/Byggebistand-Troms"; // Add basePath for production

  // Type the ref as HTMLDivElement
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.opacity = scrollY > 150 ? "0.9" : "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionLinks = [
    { name: "Byggekontroll", href: `${basePath}/tjenester#byggekontroll` }, // Include basePath in href
    { name: "Taksering", href: `${basePath}/tjenester#taksering` }, // Include basePath in href
    { name: "Røykvarslerdagen", href: `${basePath}/tjenester#roykvarslerdagen` }, // Include basePath in href
    { name: "Skjønn", href: `${basePath}/tjenester#skjonn` }, // Include basePath in href
    { name: "Overlevering", href: `${basePath}/tjenester#overlevering` }, // Include basePath in href
    { name: "Byggelånskontroll", href: `${basePath}/tjenester#byggelanskontroll` }, // Include basePath in href
    { name: "Prosjekt- og Byggeledelse", href: `${basePath}/tjenester#prosjekt-og-byggeledelse` }, // Include basePath in href
    { name: "Byggesøknader", href: `${basePath}/tjenester#byggesoknader` }, // Include basePath in href
    { name: "Telefonbistand", href: `${basePath}/tjenester#telefonbistand` }, // Include basePath in href
    { name: "Rådgivning", href: `${basePath}/tjenester#radgivning` }, // Include basePath in href
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
      }, 600); // Delay to allow page navigation to complete
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-gray-50 dark:from-teal-950 dark:via-green-950 dark:to-gray-900 font-sans overflow-x-hidden">
      <Container>
        <Hero />

        {/* Services Section */}
        <section className="py-28 lg:py-40 relative z-20 -mt-28">
          <div
            ref={headerRef}
            className="sticky top-16 z-30 text-center mb-20 bg-gradient-to-b from-teal-50/70 to-transparent dark:from-teal-950/70 py-8 rounded-b-3xl shadow-lg transition-opacity duration-300"
          >
            <h2
              className="text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 tracking-tighter drop-shadow-2xl"
              style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
            >
              Våre Tjenester
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-gray-700 dark:text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
              Skreddersydde løsninger i harmoni med fremtiden.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-0 perspective-1000">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-gradient-to-br from-teal-500/40 to-green-400/40 hover:border-teal-500/80 hover:scale-[1.08] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] transition-all duration-600 transform-gpu relative z-10"
              >
                <Link
                  href={sectionLinks.find((link) => link.name === service.title)?.href || `${basePath}/tjenester`} // Include basePath in href
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(
                      sectionLinks.find((link) => link.name === service.title)?.href || `${basePath}/tjenester`,
                      service.title
                    );
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-teal-500 to-green-400 rounded-full p-4 shadow-xl">
                      {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 font-light">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 lg:py-28 relative z-10">
          <div className="bg-gradient-to-r from-teal-500/15 to-green-400/15 rounded-3xl p-12 lg:p-16 shadow-2xl">
            <h2
              className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 tracking-tight text-center"
              style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
            >
              Våre Partnere
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-gray-700 dark:text-gray-100 text-center max-w-2xl mx-auto font-light">
              Sammen bygger vi en grønnere fremtid.
            </p>
            <div className="mt-12 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 lg:px-0 scrollbar-hidden">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl rounded-full px-8 py-4 flex items-center space-x-4 border border-green-400/30 hover:border-green-400/70 hover:scale-[1.2] hover:shadow-[0_0_20px_rgba(74,222,128,0.6)] transition-all duration-500 min-w-[260px] relative z-10"
                >
                  <span className="text-green-500 dark:text-green-300">
                    {React.cloneElement(client.icon, { className: "w-7 h-7" })}
                  </span>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">
                    {client.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex items-center justify-center py-40 bg-gradient-to-br from-teal-600 to-green-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent)] opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,222,128,0.2),transparent)] animate-cinematicPulse" />
          <Container className="text-center relative z-10">
            <h2
              className="text-6xl lg:text-9xl font-extrabold tracking-tighter drop-shadow-2xl"
              style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
            >
              Kontakt oss
            </h2>
            <p className="mt-8 text-xl lg:text-3xl max-w-4xl mx-auto font-light leading-relaxed">
              Gjennomfør ditt prosjekt med kvalitet
            </p>
            <div className="mt-16">
              <Link
                href={`${basePath}/om-oss#kontakt-oss`} // Include basePath in href
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(`${basePath}/om-oss#kontakt-oss`, "Kontakt oss");
                }}
                className="inline-flex items-center px-16 py-6 bg-gradient-to-r from-teal-500 to-green-400 text-white rounded-full font-semibold text-2xl hover:from-teal-600 hover:to-green-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.9)] hover:scale-110 transition-all duration-500 shadow-2xl relative z-10"
              >
                Kom i Gang <ChevronRightIcon className="w-9 h-9 ml-4" />
              </Link>
            </div>
          </Container>
        </section>
      </Container>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&display=swap');
        body {
          cursor: auto; /* Restore default cursor */
          overflow-x: hidden;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes cinematicPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }
        .animate-cinematicPulse {
          animation: cinematicPulse 8s infinite ease-in-out;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}