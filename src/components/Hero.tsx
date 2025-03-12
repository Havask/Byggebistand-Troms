import { Container } from "@/components/Container";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/asd.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#308453]/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Smaller text above */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl font-medium text-white sm:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-white to-gray-200 text-transparent tracking-tight font-sans"
          style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
        >
          Byggebistand Troms
        </motion.p>

        {/* Main title in the middle - Sophisticated style */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-4 text-4xl font-normal text-white sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-300 text-transparent tracking-tight font-sans"
          style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
        >
          Sertifisert taksering i Troms
        </motion.h1>

        {/* Text and Buttons */}
        <div className="mt-24 max-w-3xl space-y-16 px-4 lg:px-8">
          {/* Additional Text */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-gray-100 sm:text-xl lg:text-2xl opacity-90 font-sans"
            style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
          >
            Daglig leder er takstingeniør Oddvar R. Skjærstein som har både bred og lang erfaring innenfor fagene firmaet representerer.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-20 flex flex-col gap-6 sm:flex-row sm:justify-center"
          >
            <a
              href="#"
              className="w-full transform rounded-full bg-gradient-to-r from-[#308453] to-[#4CAF50] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#308453] focus:ring-offset-2 sm:w-auto font-sans"
              style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
            >
              Kontakt Oss
            </a>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};