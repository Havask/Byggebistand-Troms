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
          if (sectionTop < windowHeight * 0.75) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("is-visible");
              }, index * 150);
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionLinks = [
    { name: "Byggekontroll", href: `/tjenester#byggekontroll` },
    { name: "Taksering", href: `/tjenester#taksering` },
    { name: "Skjønn", href: `/tjenester#skjonn` },
    { name: "Overlevering", href: `/tjenester#overlevering` },
    { name: "Byggelånskontroll", href: `/tjenester#byggelanskontroll` },
    { name: "Prosjekt- og Byggeledelse", href: `/tjenester#prosjekt-og-byggeledelse` },
    { name: "Byggesøknader", href: `/tjenester#byggesoknader` },
    { name: "Telefonbistand", href: `/tjenester#telefonbistand` },
    { name: "Rådgivning", href: `/tjenester#radgivning` },
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
  className="bg-[#e8f1ec] py-28 lg:py-36 text-[#1d4d36] snap-start"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl lg:text-5xl font-arial">
        Trygghet i hvert prosjekt
      </h2>
      <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
        Siden 2006 har Byggebistand Troms levert pålitelige tjenester med fokus på kvalitet og trygghet.
        Vår ekspertise sikrer optimal resultat for både private og næringsdrivende.
      </p>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div className="flex flex-col gap-12">

        {/* Services - All together */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheckIcon className="w-8 h-8 text-[#1d4d36]" />
            Våre kjerneområder
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Byggekontroll", desc: "Sikrer avtaler og standarder", icon: <BuildingOfficeIcon className="w-6 h-6" /> },
              { title: "Taksering", desc: "Nøyaktig verdivurdering", icon: <CalculatorIcon className="w-6 h-6" /> },
              { title: "Overlevering", desc: "Trygg bistand ved transaksjoner", icon: <DocumentCheckIcon className="w-6 h-6" /> },
              { title: "Byggelånskontroll", desc: "Økonomisk trygghet", icon: <ShieldCheckIcon className="w-6 h-6" /> },
              { title: "Telefonbistand", desc: "Alltid tilgjengelig for råd og veiledning.", icon: <PhoneIcon className="w-6 h-6" /> },
              { title: "Rådgivning", desc: "Fremtidsrettet støtte for dine prosjekter.", icon: <UserGroupIcon className="w-6 h-6" /> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-2 bg-[#e8f1ec] rounded-lg text-[#1d4d36]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/img/AdobeStock_136331781__msi___jpeg.png"
            alt="Byggebistand Troms"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

    </div>
  </div>
</section>



        <section
          ref={(el) => {
            if (el) sectionRefs.current[1] = el;
          }}
          className="py-24 lg:py-32 bg-[#205e38] text-white relative snap-start"
        >
          <div className="absolute inset-0">
            <Image
              src="/img/construction-7369368_1920.png"
              alt="Construction Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-arial">
                Tjenester
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Vi tilbyr profesjonelle tjenester med fokus på kvalitet og trygghet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  className="p-5 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 card-animate group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md">
                      {React.cloneElement(service.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{service.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{service.desc}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="ml-auto mt-2 w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
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
              Godkjenninger
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Sammen bygger godkjent og sertifisert.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 lg:px-16 max-w-[1400px] mx-auto">
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center h-48 card-animate">
              <Image
                src="/img/Skjermbilde 2025-03-21 143945.jpg"
                alt="Godkjenning 1"
                width={200}
                height={200}
                className="object-contain h-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center h-48 card-animate">
              <Image
                src="/img/SG_GULL_HVITBOKS.png"
                alt="Godkjenning 2"
                width={200}
                height={200}
                className="object-contain h-full"
              />
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center h-48 card-animate">
              <Image
                src="/img/Mesterlogo.png"
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
          className="py-24 lg:py-32 bg-[#205e38] text-white relative snap-start"
        >
          <div className="absolute inset-0">
            <Image
              src="/img/construction-7194274_1920.png"
              alt="Construction Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-arial">
                Partnere
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Samarbeider med ledende aktører i Troms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Private boligeiere", icon: <UserGroupIcon /> },
                { title: "Borettslag", icon: <UserGroupIcon /> },
                { title: "Boligsameier", icon: <UserGroupIcon /> },
                { title: "Advokater", icon: <ScaleIcon /> },
                { title: "Entreprenører/utbyggere", icon: <WrenchScrewdriverIcon /> },
                { title: "Forsikringsselskap", icon: <ShieldCheckIcon /> },
              ].map((client, index) => (
                <div
                  key={index}
                  className="p-5 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 card-animate"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-md">
                      {React.cloneElement(client.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <h3 className="text-lg font-medium">{client.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={(el) => {
            if (el) sectionRefs.current[4] = el;
          }}
          className="py-24 lg:py-32 bg-[#dde6df] text-[#205e38] snap-start"
        >
          <div className="text-center max-w-[1400px] mx-auto">
            <h2 className="text-4xl lg:text-5xl font-arial">
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
                  handleLinkClick(`/om-oss#kontakt-oss`, "Kontakt oss");
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