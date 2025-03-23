"use client";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
      <section className="relative min-h-[400px] pt-32 pb-24 bg-gradient-to-br from-teal-600 to-green-500 text-white overflow-hidden flex items-center justify-center">
        <Container className="relative z-10 text-center pt-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
          >
            Våre Priser
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-white/90 drop-shadow-md"
          >
            Her er en oversikt over våre priser for ulike tjenester.
          </motion.p>
        </Container>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,222,128,0.25),transparent)] animate-cinematicPulse" />
      </section>

      {/* Pricing Tables Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 perspective-1000">
            {/* Tilstandsrapport */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-6 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Tilstandsrapport iht forskrift eks. verdi
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-fixed">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-3/4">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
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
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Pantedokumenter */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-6 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Pantedokumenter i bank med verdi
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-fixed">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-3/4">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
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
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Tilleggstjenester */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-6 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Tilleggstjenester under verditaksering
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-fixed">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-3/4">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
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
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Forhåndstakster */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-6 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Forhåndstakster
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-fixed">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-3/4">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
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
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Ordinære Timepriser */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-6 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Ordinære timepriser i prosjekter
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-fixed">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-3/4">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
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
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Reise / Kjøring */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-6 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Reise / Kjøring
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl table-fixed">
                  <thead className="bg-gradient-to-r from-teal-500 to-green-400 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-xl w-3/4">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider rounded-tr-xl w-1/4 whitespace-nowrap">Pris (Eks. MVA / Inkl. MVA)</th>
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
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 text-right whitespace-nowrap">{pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
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
        @keyframes cinematicPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }
        .animate-cinematicPulse {
          animation: cinematicPulse 8s infinite ease-in-out;
        }
        /* Sørger for at tabellen har faste kolonnebredder */
        table.table-fixed {
          table-layout: fixed;
          width: 100%;
        }
        table.table-fixed th,
        table.table-fixed td {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}