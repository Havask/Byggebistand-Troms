"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Om() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80; // Default to 80px if no navbar
          const buffer = 40; // Increased buffer for better spacing
          const offset = navbarHeight + buffer;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }
    };

    // Run on mount and on hash change
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
            Om Oss
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-white/90 drop-shadow-md"
          >
            Vi bistår våre kunder med alle typer byggeprosjekter
          </motion.p>
        </Container>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,222,128,0.25),transparent)] animate-cinematicPulse" />
      </section>

      {/* About Content Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 perspective-1000">
            {/* Byggebistands historie */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-8 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Byggebistands historie
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Byggebistand ble grunnlagt i 200x, først som Byggebistand Tromsø, så Troms. Gjennom årene har vi utviklet oss til å bli en pålitelig aktør i byggebransjen, med fokus på kvalitet, profesjonalitet og kundetilfredshet.
              </p>
            </motion.div>

            {/* Oddvar R. Skjærstein */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-8 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 items-start">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
                  >
                    Oddvar R. Skjærstein
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Daglig leder, Oddvar R. Skjærstein, er takstingeniør med bred og lang erfaring innen de fagområdene firmaet representerer. Med over 40 års erfaring fra byggebransjen, samt svennebrev, mesterbrev og takstingeniørutdanning, har han en solid kompetanse på området.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <img
                    src="/img/oddvard.jpg"
                    alt="Oddvar R. Skjærstein"
                    className="rounded-xl shadow-lg w-full max-w-[150px] md:max-w-[200px] hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Kontakt Oss Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="kontakt-oss"
              className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 p-8 transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu"
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Kontakt Oss
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-teal-600 dark:text-teal-300">Adresse:</strong> Stakkevollvegen 33, 9010 Tromsø
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-teal-600 dark:text-teal-300">Post:</strong> Lars Hagerups veg 26, 9012 Tromsø
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-teal-600 dark:text-teal-300">Telefon:</strong> (+47) 77 68 85 00
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-teal-600 dark:text-teal-300">E-post:</strong> oddvar@byggebistand-as.no
                </p>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Map Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative w-full py-16"
        >
          <div className="relative w-full h-[500px] overflow-hidden shadow-xl group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000!2d18.967574282548327!3d69.66529885850056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c5004c6f069d%3A0xaa65fb9238139c5c!2sByggebistand%20Troms!5e1!3m2!1sno!2sno!4v1742637130645!5m2!1sno!2sno"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>
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
      `}</style>
    </div>
  );
}