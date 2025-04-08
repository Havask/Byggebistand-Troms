"use client";
import { Container } from "@/components/Container";
import Image from "next/image";

export default function Tjenester() {
  const services = [
    {
      title: "Byggekontroll",
      description: "Ekstern kontroll av byggeprosjekter for å sikre at arbeid utføres etter avtaler og gjeldende krav. Dette er en frivillig tjeneste som gir ekstra trygghet for deg som byggherre.",
      image: "/Byggebistand-Troms/img/building-8734284_1920.png"
    },
    {
      title: "Taksering",
      description: "Profesjonell taksering av boliger, tomter og næringseiendommer, inkludert tilstandsrapporter og verdivurdering for finansiering eller forsikring.",
      image: "/Byggebistand-Troms/img/real-estate-8723670_1280.png"
    },
    {
      title: "Skjønn",
      description: "Sagkyndig vurdering ved større bygningsskader for å sikre riktig skadeoppgjør mellom forsikringstaker og forsikringsselskap, basert på gjeldende vilkår.",
      image: "/Byggebistand-Troms/img/realtor-6835635_1280.png"
    },
    {
      title: "Overlevering",
      description: "Bistand ved overtakelse av ny eller brukt bolig, med kontroll av teknisk standard og dokumentasjon for å sikre en trygg handel for både kjøper og selger.",
      image: "/Byggebistand-Troms/img/door-159330_1280.png"
    },
    {
      title: "Byggelånskontroll",
      description: "Uavhengig oppfølging av byggeprosjekter for å sikre at utbetalinger fra byggelån skjer i takt med fremdriften og etter bankens krav.",
      image: "/Byggebistand-Troms/img/worker-8941865_1280.jpg"
    },
    {
      title: "Prosjekt- og byggeledelse",
      description: "Faglig oppfølging av byggeprosjekter fra start til ferdigstillelse, for å sikre kvalitet, fremdrift og at kontrakter overholdes.",
      image: "/Byggebistand-Troms/img/construction-8734283_1280.png"
    },
    {
      title: "Byggesøknader",
      description: "Hjelp med byggesøknader, ansvarlig søker-rolle og byggteknisk prosjektering for en smidig godkjenningsprosess.",
      image: "/Byggebistand-Troms/img/job-6956074_1280.png"
    },
    {
      title: "Telefonbistand",
      description: "Rask og profesjonell byggteknisk rådgivning over telefon, med mulighet for videre oppfølging ved behov.",
      image: "/Byggebistand-Troms/img/phone-1831920_1280.png"
    },
    {
      title: "Rådgivning",
      description: "Uavhengig rådgivning innen byggeprosjekter, kontrakter og tekniske løsninger for å sikre smarte valg og god gjennomføring.",
      image: "/Byggebistand-Troms/img/justice-7625456_1280.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] font-sans overflow-x-hidden">
      {/* Hero Section - Matching design */}
      <section className="relative bg-gradient-to-r from-[#dde6df] to-[#e8f0ea] h-[65vh] min-h-[500px]">
        <div className="absolute inset-0 bg-[#205e37] opacity-5 z-0"></div>
        
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Text content - left half */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8">
            <Container className="max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#205e37]">
                Våre tjenester
              </h1>
              <p className="text-lg md:text-xl text-[#205e37]/90 leading-relaxed">
                Vi tilbyr faglig bistand gjennom hele byggeprosessen - fra planlegging til ferdigstillelse.
              </p>
            </Container>
          </div>
          
          {/* Image - right half */}
          <div className="w-full md:w-1/2 h-full relative hidden md:block">
            <Image
              src="/Byggebistand-Troms/img/AdobeStock_216236391__msi___jpeg-ezgif.com-webp-to-png-converter.png"
              alt="Construction illustration"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#205e37] mb-4 relative inline-block">
                <span className="relative z-10 px-4">
                  Vi kan hjelpe deg med:
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#e8f0ea] z-0"></span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                Våre faglige tjenester dekker alle faser av byggeprosessen
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-[#205e37]/10 p-6 transition-all hover:shadow-xl hover:border-[#205e37]/20 group flex flex-col"
                >
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#205e37] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#dde6df] to-[#e8f0ea]">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#205e37]">
            Ønsker du mer informasjon?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#205e37]/90">
            Kontakt oss for en uforpliktende samtale om dine behov.
          </p>
          <a 
            href="/om-oss#kontakt-oss" 
            className="inline-block px-8 py-4 bg-[#205e37] text-white rounded-lg font-semibold hover:bg-[#16482a] transition-colors duration-200 shadow-lg"
          >
            Kontakt oss
          </a>
        </Container>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </div>
  );
}