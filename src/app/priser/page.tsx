"use client";
import { Container } from "@/components/Container";
import { useEffect } from "react";

export default function Priser() {
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-gray-50 dark:from-teal-950 dark:via-green-950 dark:to-gray-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[300px] sm:min-h-[400px] pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden flex items-center justify-center">
        <div className="absolute top-[80px] left-0 right-0 z-20 text-center bg-gradient-to-b from-teal-50/70 to-transparent dark:from-teal-950/70 py-10 sm:py-14 rounded-b-3xl shadow-lg">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 tracking-tighter drop-shadow-[0_2px_6px_rgba(74,222,128,0.3)]"
            style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
          >
            Våre Priser
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed text-gray-700 dark:text-gray-100 px-4">
            Her er en oversikt over våre priser for ulike tjenester.
          </p>
        </div>
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,222,128,0.03),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-teal-50 to-transparent dark:from-teal-950" />
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-500 mix-blend-multiply filter blur-xl" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-green-400 mix-blend-multiply filter blur-xl" />
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 rounded-full bg-green-600 mix-blend-multiply filter blur-xl" />
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 perspective-1000">
            {/* Tilstandsrapport */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-4 sm:p-6 transition-all duration-600 transform-gpu">
              <h2
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Tilstandsrapport iht forskrift eks. verdi
              </h2>
              <div className="overflow-x-auto mt-4 sm:mt-6">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-auto sm:table-fixed text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-2/3 sm:w-3/4">Type</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/3 sm:w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-500/20 dark:divide-teal-900/20">
                    {[
                      ["Enebolig", "19 000,- / 23 750,-"],
                      ["Tomannsbolig", "17 000,- / 21 250,-"],
                      ["Rekkehus", "16 000,- / 20 000,-"],
                      ["Leiligheter under 60 m²", "12 000,- / 15 000,-"],
                      ["Leiligheter over 60 m²", "13 000,- / 16 250,-"],
                      ["Fritidseiendom", "14 000,- / 17 500,-"],
                      ["Verdi i tillegg til takster over", "4 000,- / 5 000,-"],
                    ].map(([type, pris], index) => (
                      <tr
                        key={index}
                        className="hover:bg-teal-50/50 dark:hover:bg-teal-900/50 transition-colors duration-300"
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pantedokumenter */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-4 sm:p-6 transition-all duration-600 transform-gpu">
              <h2
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Pantedokumenter i bank med verdi
              </h2>
              <div className="overflow-x-auto mt-4 sm:mt-6">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-auto sm:table-fixed text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-2/3 sm:w-3/4">Type</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/3 sm:w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-500/20 dark:divide-teal-900/20">
                    {[
                      ["Enebolig", "8 400,- / 10 500,-"],
                      ["Tomannsbolig", "7 920,- / 9 900,-"],
                      ["Rekkehus", "7 920,- / 9 900,-"],
                      ["Leiligheter under 60 m²", "6 560,- / 8 200,-"],
                      ["Leiligheter over 60 m²", "7 200,- / 9 000,-"],
                      ["Fritidseiendom", "6 800,- / 8 500,-"],
                    ].map(([type, pris], index) => (
                      <tr
                        key={index}
                        className="hover:bg-teal-50/50 dark:hover:bg-teal-900/50 transition-colors duration-300"
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tilleggstjenester */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-4 sm:p-6 transition-all duration-600 transform-gpu">
              <h2
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Tilleggstjenester under verditaksering
              </h2>
              <div className="overflow-x-auto mt-4 sm:mt-6">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-auto sm:table-fixed text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-2/3 sm:w-3/4">Type</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/3 sm:w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-500/20 dark:divide-teal-900/20">
                    {[
                      ["Separat utleiedel i egen bolig", "2 880,- / 3 600,-"],
                      ["Garasje/anneks eller uthus", "2 880,- / 3 600,-"],
                    ].map(([type, pris], index) => (
                      <tr
                        key={index}
                        className="hover:bg-teal-50/50 dark:hover:bg-teal-900/50 transition-colors duration-300"
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Forhåndstakster */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-4 sm:p-6 transition-all duration-600 transform-gpu">
              <h2
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Forhåndstakster
              </h2>
              <div className="overflow-x-auto mt-4 sm:mt-6">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-auto sm:table-fixed text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-2/3 sm:w-3/4">Type</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/3 sm:w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-500/20 dark:divide-teal-900/20">
                    {[
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
                    ].map(([type, pris], index) => (
                      <tr
                        key={index}
                        className="hover:bg-teal-50/50 dark:hover:bg-teal-900/50 transition-colors duration-300"
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ordinære Timepriser */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-4 sm:p-6 transition-all duration-600 transform-gpu">
              <h2
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Ordinære timepriser i prosjekter
              </h2>
              <div className="overflow-x-auto mt-4 sm:mt-6">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-auto sm:table-fixed text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-2/3 sm:w-3/4">Type</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/3 sm:w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-500/20 dark:divide-teal-900/20">
                    {[
                      ["Ansvarlig søker og byggesøknader", "1 560,- / 1 950,-"],
                      ["Prosjektledelse med utarbeiding av tilbudsdokumenter", "1 560,- / 1 950,-"],
                      ["Vedlikeholdsplaner for borettslag og boligsameier", "Tilbud / Tilbud"],
                      ["Byggekontrolloppdrag", "Tilbud / Tilbud"],
                    ].map(([type, pris], index) => (
                      <tr
                        key={index}
                        className="hover:bg-teal-50/50 dark:hover:bg-teal-900/50 transition-colors duration-300"
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reise / Kjøring */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-4 sm:p-6 transition-all duration-600 transform-gpu">
              <h2
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Reise / Kjøring
              </h2>
              <div className="overflow-x-auto mt-4 sm:mt-6">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-auto sm:table-fixed text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-2/3 sm:w-3/4">Type</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/3 sm:w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-500/20 dark:divide-teal-900/20">
                    {[
                      ["Reisekostnader/bykjøring kr 300 eks mva", "Medgått / Medgått"],
                      ["Ferger/tunell/bomstasjoner etc kr 6 pr km eks mva", "Medgåtte km / Medgåtte km"],
                    ].map(([type, pris], index) => (
                      <tr
                        key={index}
                        className="hover:bg-teal-50/50 dark:hover:bg-teal-900/50 transition-colors duration-300"
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&display=swap');
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        /* Responsive table adjustments */
        @media (max-width: 640px) {
          table.table-auto {
            table-layout: auto;
            width: 100%;
          }
          table.table-auto th,
          table.table-auto td {
            min-width: 0;
            word-wrap: break-word;
          }
        }
        @media (min-width: 640px) {
          table.table-fixed {
            table-layout: fixed;
            width: 100%;
          }
          table.table-fixed th,
          table.table-fixed td {
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
}