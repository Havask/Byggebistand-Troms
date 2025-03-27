"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function Om() {
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
        <div className="absolute top-[ CoffeeScript
          top-[80px] left-0 right-0 z-20 text-center bg-gradient-to-b from-teal-50/70 to-transparent dark:from-teal-950/70 py-10 sm:py-14 rounded-b-3xl shadow-lg">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 tracking-tighter drop-shadow-[0_2px_6px_rgba(74,222,128,0.3)]"
            style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
          >
            Om Oss
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed text-gray-700 dark:text-gray-100 px-4">
          Etablert 2006
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

      {/* About Content Section */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 perspective-1000">
            {/* Byggebistands historie */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-8 transition-all duration-600 transform-gpu">
              <h2
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Byggebistands historie
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Byggebistand ble grunnlagt i 200x, først som Byggebistand Tromsø, så Troms. Gjennom årene har vi utviklet oss til å bli en pålitelig aktør i byggebransjen, med fokus på kvalitet, profesjonalitet og kundetilfredshet.
              </p>
            </div>

            {/* Oddvar R. Skjærstein */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-8 transition-all duration-600 transform-gpu">
              <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 items-start">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
                  >
                    Oddvar R. Skjærstein
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    Daglig leder, Oddvar R. Skjærstein, er takstingeniør med bred og lang erfaring innen de fagområdene firmaet representerer. Med over 40 års erfaring fra byggebransjen, samt svennebrev, mesterbrev og takstingeniørutdanning, har han en solid kompetanse på området.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <img
                    src="/Byggebistand-Troms/img/oddvard.jpg"
                    alt="Oddvar R. Skjærstein"
                    className="rounded-xl shadow-lg w-full max-w-[150px] md:max-w-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Kontakt Oss Section */}
            <div
              id="kontakt-oss"
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/40 dark:border-teal-900/40 p-8 transition-all duration-600 transform-gpu"
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 transition-colors duration-300 tracking-tight"
                style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
              >
                Kontakt Oss
              </h2>
              <div className="mt-6 space-y-4">
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
            </div>
          </div>
        </Container>

        {/* Map Section */}
        <div className="relative w-full py-16">
          <div className="relative w-full h-[500px] overflow-hidden shadow-xl">
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
          </div>
        </div>
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
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }
        .animate-cinematicPulse {
          animation: cinematicPulse 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}