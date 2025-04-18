"use client";
import { Container } from "@/components/Container";
import { useEffect } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-[#f8faf9] font-sans overflow-x-hidden">
      {/* Hero Section - Medium-sized Banner */}
      <section className="relative bg-gradient-to-r from-[#dde6df] to-[#e8f0ea] h-[65vh] min-h-[500px]">
        <div className="absolute inset-0 bg-[#205e37] opacity-5 z-0"></div>
        
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Text content - left half */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8">
            <Container className="max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#205e37]">
                Om oss
              </h1>
              <p className="text-lg md:text-xl text-[#205e37]/90 leading-relaxed">
                Vårt mål er å sikre kvalitet, trygghet og god gjennomføring i hvert eneste byggeprosjekt – for både private og næringskunder. Med solid kompetanse og personlig oppfølging hjelper vi deg hele veien, fra planlegging til ferdigstillelse.
              </p>
            </Container>
          </div>
          
          {/* Image - right half */}
          <div className="w-full md:w-1/2 h-full relative hidden md:block">
            <Image
              src="/img/pexels-sora-shimazaki-5673488.jpg"
              alt="Hand illustration"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Company History */}
            <div className="bg-white rounded-xl shadow-lg border border-[#205e37]/10 p-10 transition-all hover:shadow-xl hover:border-[#205e37]/20">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-[#205e37]/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205e37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#205e37] tracking-tight">
                  Byggebistand Troms  
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Byggebistand Troms ble etablert i 2006 og har siden den gang vært en ledende aktør innen byggekontroll, taksering og teknisk rådgivning i Troms-regionen.
                </p>
                <p>
                  Daglig leder og takstingeniør, Oddvar R. Skjærstein, har bred og lang erfaring innen bransjen. Vårt mål er å sikre kvalitet, trygghet og ryddige prosesser i alle typer byggeprosjekter – fra nybygg til rehabilitering og skadevurdering.
                </p>
                <h3 className="text-xl font-semibold text-[#205e37] mt-8 mb-4">Vi jobber tett med:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#205e37] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Boligeiere</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#205e37] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Borettslag og sameier</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#205e37] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Entreprenører og utbyggere</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#205e37] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advokater</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#205e37] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Forsikringsselskaper</span>
                  </div>
                </div>
                <p className="mt-8">
                  Med oss på laget får du en profesjonell og uavhengig aktør som ser til at ditt prosjekt blir gjennomført i henhold til lover, avtaler og bransjestandarder.
                </p>
                <p className="font-medium text-[#205e37] mt-6">
                  Har du spørsmål? Vi hjelper deg gjerne!
                </p>
              </div>
            </div>

            {/* Founder Info */}
            <div className="bg-white rounded-xl shadow-lg border border-[#205e37]/10 p-10 transition-all hover:shadow-xl hover:border-[#205e37]/20">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#205e37]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205e37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#205e37] tracking-tight">
                      Oddvar R. Skjærstein
                    </h2>
                  </div>
                  <div className="prose prose-lg text-gray-600 max-w-none">
                    <p>
                      Daglig leder, Oddvar R. Skjærstein, er takstingeniør med bred og lang erfaring innen de fagområdene firmaet representerer. Med over 40 års erfaring fra byggebransjen, samt svennebrev, mesterbrev og takstingeniørutdanning, har han en solid kompetanse på området.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-[#205e37] mb-3">Kvalifikasjoner</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#205e37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Svennebrev</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#205e37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Mesterbrev</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#205e37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Takstingeniørutdanning</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#205e37] mb-3">Erfaring</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#205e37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>40+ års erfaring</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#205e37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Prosjektleder</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#205e37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Byggmester</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/img/oddvar.jpg"
                      alt="Oddvar R. Skjærstein"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div
              id="kontakt-oss"
              className="bg-white rounded-xl shadow-lg border border-[#205e37]/10 p-10 transition-all hover:shadow-xl hover:border-[#205e37]/20"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-[#205e37]/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205e37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#205e37] tracking-tight">
                  Kontakt Oss
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#205e37] mb-4">Kontaktinformasjon</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-[#205e37] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Besøksadresse:</p>
                        <p className="text-gray-600">Stakkevollvegen 33, 9010 Tromsø</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-[#205e37] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Postadresse:</p>
                        <p className="text-gray-600">Lars Hagerups veg 26, 9012 Tromsø</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-[#205e37] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Telefon:</p>
                        <p className="text-gray-600">(+47) 77 68 85 00</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-[#205e37] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">E-post:</p>
                        <p className="text-gray-600">oddvar@byggebistand-as.no</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#205e37] mb-4">Åpningstider</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mandag - Fredag</span>
                      <span className="font-medium text-gray-900">08:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lørdag</span>
                      <span className="font-medium text-gray-900">Stengt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Søndag</span>
                      <span className="font-medium text-gray-900">Stengt</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="mailto:oddvar@byggebistand-as.no?subject=Henvendelse%20fra%20Byggebistand%20Troms"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#205e37] hover:bg-[#16482a] transition-colors"
                    >
                      Send oss en E-post
                      <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Full-Width Map Section */}
        <div className="w-full py-16 bg-[#f0f5f1]">
          <div className="mb-12 text-center">
            <Container>
              <h2 className="text-3xl md:text-4xl font-bold text-[#205e37] tracking-tight">
                Besøk oss 
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Vi holder til i Stakkevollvegen 33
              </p>
            </Container>
          </div>
          <div className="w-full h-[500px]">
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
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .prose {
          color: #4b5563;
        }
        .prose p {
          margin-top: 1.25em;
          margin-bottom: 1.25em;
        }
      `}</style>
    </div>
  );
}