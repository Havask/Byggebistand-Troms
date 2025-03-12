"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  FireIcon,
  UserIcon,
  HomeIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  DocumentMagnifyingGlassIcon,
  PhoneIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Tjenester() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-[#308453] to-[#4CAF50] text-white">
        <Container className="text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Våre Tjenester
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-90"
          >
            Utforsk vårt brede spekter av moderne tjenester – fra byggekontroll til rådgivning – alt skreddersydd for dine behov.
          </motion.p>
        </Container>
      </section>

      {/* Byggekontroll Section */}
      <section id="byggekontroll" className="py-32">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <ShieldCheckIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Byggekontroll
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
            >
              <p className="text-gray-600 dark:text-gray-300">
                Byggekontroll bør benyttes i et hvert enkelt prosjekt der det kjøpes håndverkertjenester. Vår kontroll vil lett kunne tilpasses ethvert prosjekt og utføres som eksternkontroll. Denne kontrollen vil ikke erstatte det kontrollansvaret som allerede ligger hos entreprenør eller byggherre gjennom avtaler eller pålagt ved søknadsmessig arbeid. Kontrollen vil være en frivillig tjeneste og et supplement til allerede pålagt kontroll fra entreprenør.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Hvilke bygg trenger byggekontroll
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Vi utfører byggekontroll på nye boliger og leiligheter der kjøper har kjøpt en ferdig oppført boenhet.</li>
                <li>Vi foretar kontroll ved fornying, ombygging og rehabilitering av boliger.</li>
                <li>Vi foretar kontroll ved utbygging av leiligheter.</li>
                <li>Vi foretar kontroll ved rehabilitering og utbygging i borettslag.</li>
                <li>Vi foretar kontroll ved reparasjoner og gjenoppføring etter byggeskader.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Ved vår kontroll vil vi kunne påse at inngåtte avtaler følges og at partene utfører arbeidet innenfor gitte standarder og normale utførelsesmetoder.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Taksering Section */}
      <section id="taksering" className="py-32 bg-gray-100 dark:bg-gray-700">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <DocumentTextIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Taksering
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
            >
              <p className="text-gray-600 dark:text-gray-300">
                Byggebistand Troms tilbyr takseringstjenester for flere områder:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-2">
                <li>Boliger- og fritidseiendommer</li>
                <li>Tomtetaksering</li>
                <li>Næringseiendommer</li>
                <li>Tilstandsrapporter ved verdivurdering</li>
                <li>Verdivurdering med pantedokument til belåning</li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Hva verditaksering er
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I tillegg tilbys oppfølging etter skader med utarbeidelse av reparasjonsbeskrivelse, innhenting av tilbud for reparasjon. Dette inkluderer:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-2">
                <li>Vannskader</li>
                <li>Brannskader</li>
                <li>Hærverk og innbrudd</li>
                <li>Naturskader</li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Røykvarslerdagen Section */}
      <section id="roykvarslerdagen" className="py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#308453] text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <FireIcon className="w-8 h-8 mr-3" />
              Røykvarslerdagen
            </h2>
            <p className="text-lg">
              Husk å skifte batteri i røykvarsleren 1. desember hvert år. Ikke la dette bli forglemmelsen som setter deg og andres liv i fare.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Skjønn Section */}
      <section id="skjonn" className="py-32 bg-gray-100 dark:bg-gray-700">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <UserIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Skjønn
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Skadeskjønn eller skjønn benyttes ved større og omfattende byggeskader. Denne oppgjørsformen finner dere mer om i deres vilkår fra forsikringsselskap. Skjønn er en form for taksering med oppgjør av skade etter spesielle prinsipp.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Overlevering Section */}
      <section id="overlevering" className="py-32">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <HomeIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Overlevering
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Bistand ved overtakelse av nye eller brukte boliger har etter hvert også blitt en selvfølge. Ved nybygg vil vi ved overlevering kunne kontrollere om de ferdige flatene tilfredsstiller kravene til bl.a. retthet og funksjonalitet.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Byggelånskontroll Section */}
      <section id="byggelanskontroll" className="py-32 bg-gray-100 dark:bg-gray-700">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <BanknotesIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Byggelånskontroll
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Byggelånskontrollen har til hensikt å hindre økonomisk tap for bank/lånegiver dersom entreprenøren ikke er i stand å fullføre kontraktsforholdet.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Prosjekt- og Byggeledelse Section */}
      <section id="prosjekt-og-byggeledelse" className="py-32">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <WrenchScrewdriverIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Prosjekt- og Byggeledelse
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Ved planlegging av bygging eller rehabilitering vil det alltid være behov for en fagkyndig til å styre eller kontrollere gjennomføringen av byggeprosjektet.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Byggesøknader Section */}
      <section id="byggesoknader" className="py-32 bg-gray-100 dark:bg-gray-700">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <DocumentMagnifyingGlassIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Byggesøknader
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Byggebistand Troms er godkjent for ansvarsrett med sentralgodkjenning etter den nye plan og bygningsloven.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Telefonbistand Section */}
      <section id="telefonbistand" className="py-32">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <PhoneIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Telefonbistand
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Vi tilbyr også våre kunder bistand over telefon. En betalt samtale i forkant av en ønsket befaring kan også være tilstrekkelig for svar på Deres spørsmål.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Rådgivning Section */}
      <section id="radgivning" className="py-32 bg-gray-100 dark:bg-gray-700">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16 flex items-center"
          >
            <LightBulbIcon className="w-10 h-10 mr-4 text-[#308453]" />
            Rådgivning
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Vårt firma vil som en uhildet part kunne bistå de fleste med spørsmål av byggteknisk karakter. Vår rådgivningstjeneste omfatter også telefonbistand.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[#308453] to-[#4CAF50] text-white">
        <Container className="text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold mb-6"
          >
            Klar til å komme i gang?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Kontakt oss for en uforpliktende samtale om dine behov.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 bg-white text-[#308453] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Kontakt oss <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}