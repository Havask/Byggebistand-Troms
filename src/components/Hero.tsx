import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) setNavbarHeight(nav.offsetHeight);
  }, []);

  const handleLinkClick = (href: string) => {
    const [path, hash] = href.split("#");
    if (path === "/om-oss" && hash) {
      window.location.href = href;
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const buffer = 40;
          const offset = navbarHeight + buffer;
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
    <div 
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: `${navbarHeight}px` }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/asd.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#308453]/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Smaller text above */}
        <p
          className="text-xl font-medium text-white sm:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-200 text-transparent tracking-tight font-sans animate-fade-in"
        >
          Byggebistand Troms
        </p>

        {/* Main title in the middle */}
        <h1
          className="mt-4 text-3xl font-normal text-white sm:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-white to-gray-300 text-transparent tracking-tight font-arial animate-fade-in"
        >
          Profesjonell rådgivning, kontroll og taksering
        </h1>

        {/* Text and Buttons */}
        <div className="mt-24 max-w-3xl space-y-16 px-4 lg:px-8">
          {/* Additional Text */}
          <p
            className="text-lg text-gray-100 sm:text-xl lg:text-2xl opacity-90 font-sans animate-fade-in"
          >
            Daglig leder er takstingeniør Oddvar R. Skjærstein som har både bred og lang erfaring innenfor fagene firmaet representerer.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-20 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="/om-oss#kontakt-oss"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("/om-oss#kontakt-oss");
              }}
              className="inline-block w-56 transform rounded-md border border-white/20 bg-[#4e9368] px-8 py-4 text-lg font-medium text-white shadow-md transition-all duration-300 hover:bg-[#5aa77b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#308453] focus:ring-offset-2 focus:ring-offset-transparent active:scale-95 sm:w-auto sm:text-xl animate-fade-in"
            >
              Kontakt Oss
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};