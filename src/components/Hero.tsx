import { Container } from "@/components/Container";

export const Hero = () => {
  const handleLinkClick = (href: string) => {
    const [path, hash] = href.split("#");
    if (path === "/om-oss" && hash) {
      window.location.href = href;
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80; // Default to 80px if no navbar
          const buffer = 40; // Consistent with Om page
          const offset = navbarHeight + buffer;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 600); // Delay to allow page navigation
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Byggebistand-Troms/img/asd.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#308453]/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Smaller text above */}
        <p
          className="text-xl font-medium text-white sm:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-200 text-transparent tracking-tight font-sans animate-fade-in"
        >
          Byggebistand Troms
        </p>

        {/* Main title in the middle - Sophisticated style */}
        <h1
          className="mt-4 text-4xl font-normal text-white sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-300 text-transparent tracking-tight font-sans animate-fade-in"
        >
          Sertifisert taksering i Troms
        </h1>

        {/* Text and Buttons */}
        <div className="mt-24 max-w-3xl space-y-16 px-4 lg:px-8">
          {/* Additional Text */}
          <p
            className="text-lg text-gray-100 sm:text-xl lg:text-2xl opacity-90 font-sans animate-fade-in"
          >
            Daglig leder er takstingeniør Oddvar R. Skjærstein som har både bred og lang erfaring innenfor fagene firmaet representerer.
          </p>

          {/* Call-to-Action Button - Updated to squared style with #205e38 color */}
          <div className="mt-20 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="/om-oss#kontakt-oss"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("/Byggebistand-Troms/om-oss#kontakt-oss");
              }}
              className="w-48 transform rounded-none bg-[#205e38] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 sm:w-auto sm:px-8 sm:py-4 sm:text-lg sm:hover:bg-[#1a4b2e] sm:hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#308453] focus:ring-offset-2 font-sans animate-fade-in"
            >
              Kontakt Oss
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};