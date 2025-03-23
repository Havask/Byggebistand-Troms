"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  UserIcon,
  HomeIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  DocumentMagnifyingGlassIcon,
  PhoneIcon,
  LightBulbIcon,
  ChevronRightIcon,
  ChartBarIcon,
  BeakerIcon,
  FireIcon,
  LockClosedIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Define props interface for SubCollapsible
interface SubCollapsibleProps {
  title: string;
  icon: React.ElementType; // For Heroicons or similar components
  content: string | React.ReactNode;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
}

// SubCollapsible Component with typed props
const SubCollapsible = ({ title, icon: Icon, content, id, isOpen, onToggle }: SubCollapsibleProps) => {
  if (!Icon) {
    return <div>Feil: Ikonet for "{title}" er undefined</div>;
  }

  return (
    <div className="border-b border-teal-500/20 dark:border-teal-900/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 text-left bg-gradient-to-br from-teal-50/70 to-green-50/70 dark:from-teal-950/70 dark:to-green-950/70 backdrop-blur-lg hover:from-teal-100/80 hover:to-green-100/80 dark:hover:from-teal-900/80 dark:hover:to-green-900/80 transition-all duration-500 rounded-xl shadow-md hover:shadow-lg transform-gpu"
      >
        <div className="flex items-center gap-4">
          <Icon className="w-6 h-6 text-teal-500 dark:text-teal-300" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">{title}</h3>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-teal-500 dark:text-teal-300 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 py-5 text-gray-600 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-b-xl">{content}</div>
      </motion.div>
    </div>
  );
};

// Define props interface for CollapsibleSection
interface CollapsibleSectionProps {
  title: string;
  icon: React.ElementType;
  content: string | React.ReactNode;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
}

// Collapsible Section Component with typed props
const CollapsibleSection = ({ title, icon: Icon, content, id, isOpen, onToggle }: CollapsibleSectionProps) => {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-gradient-to-br from-teal-50/80 to-green-50/80 dark:from-teal-950/80 dark:to-green-950/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-teal-500/30 dark:border-teal-900/30 overflow-hidden transition-all duration-600 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.02] transform-gpu perspective-1000"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-teal-500/20 to-green-500/20 dark:from-teal-900/30 dark:to-green-900/30 hover:from-teal-500/30 hover:to-green-500/30 dark:hover:from-teal-900/40 dark:hover:to-green-900/40 transition-all duration-500"
      >
        <div className="flex items-center gap-5">
          <div className="p-4 bg-gradient-to-br from-teal-500 to-green-400 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(74,222,128,0.8)] transition-all duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter bg-clip-text bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-500 hover:to-green-400 transition-colors duration-300">
            {title}
          </h2>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-teal-500 dark:text-teal-300 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 text-gray-600 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">{content}</div>
      </motion.div>
    </motion.div>
  );
};

const handleLinkClick = (href: string, title: string) => {
  console.log(`Clicked: ${title}, Navigating to: ${href}`);
  const [path, hash] = href.split("#");
  if ((path === "/tjenester" || path === "/om-oss") && hash) {
    window.location.href = href;
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const offset = navbarHeight + 20;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 600); // Delay to allow page navigation to complete
  } else {
    window.location.href = href;
  }
};

export default function Tjenester() {
  const [openSections, setOpenSections] = useState(new Set<string>());
  const [openSubSections, setOpenSubSections] = useState(new Set<string>());

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
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
          setTimeout(() => {
            newSet.add(id);
            setOpenSections(new Set(newSet));
          }, 500);
        }
      }
      return newSet;
    });
  };

  const toggleSubSection = (id: string) => {
    setOpenSubSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

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
          setTimeout(() => {
            setOpenSections((prev) => new Set(prev).add(id));
          }, 500);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const sectionLinks = [
    {
      name: "Byggekontroll",
      href: "#byggekontroll",
      id: "byggekontroll",
      icon: ShieldCheckIcon,
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p>
              Byggekontroll bør benyttes i et hvert enkelt prosjekt der det kjøpes håndverkertjenester.
              Vår kontroll vil lett kunne tilpasses ethvert prosjekt og utføres som eksternkontroll. Denne kontrollen vil ikke erstatte det kontrollansvaret som allerede ligger hos entreprenør eller byggherre gjennom avtaler eller pålagt ved søknadsmessig arbeid. Kontrollen vil være en frivillig tjeneste og et supplement til allerede pålagt kontroll fra entreprenør.
            </p>
            <p className="mt-4">
              Ved vår kontroll vil vi kunne påse at inngåtte avtaler følges og at partene utfører arbeidet innenfor gitte standarder og normale utførelsesmetoder.
            </p>
            <p className="mt-4">
              Vårt oppdrag vil kunne avtales for hvert enkelt prosjekt og bør startes allerede ved kontraktsinngåelsen.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Hvilke bygg trenger byggekontroll?
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Vi utfører byggekontroll på nye boliger og leiligheter der kjøper har kjøpt en ferdig oppført boenhet. Dette gjelder både der kjøper er tiltakshaver og hvor kjøper handler via et utbyggerfirma.</li>
              <li>Vi foretar kontroll ved fornying, ombygging og rehabilitering av boliger.</li>
              <li>Vi foretar kontroll ved utbygging av leiligheter</li>
              <li>Vi foretar kontroll ved rehabilitering og utbygging i borettslag.</li>
              <li>Vi foretar kontroll ved reparasjoner og gjenoppføring etter byggeskader.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      name: "Taksering",
      href: "#taksering",
      id: "taksering",
      icon: DocumentTextIcon,
      content: (
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p>
                Byggebistand Troms tilbyr takseringstjenester for flere områder:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Boliger og fritidseiendommer</li>
                <li>Tomtetaksering</li>
                <li>Næringseiendommer</li>
                <li>Tilstandsrapporter ved verdivurdering</li>
                <li>Verdivurdering med pantedokument til belåning</li>
              </ul>
            </div>
            <div>
              <p>
                Vi tilbyr også oppfølging etter skader med utarbeidelse av reparasjonsbeskrivelse, innhenting av tilbud for reparasjon, og kontroll av gjennomføring med etterkontroll. Utforsk våre spesialiserte takseringstjenester nedenfor:
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <SubCollapsible
              title="Hva verditaksering er"
              icon={ChartBarIcon}
              id="verditaksering"
              content={
                <div>
                  <p>
                    Dokument med innhold av estimert markedsverdi samt beregnet teknisk verdi. I tillegg er dette en teknisk beskrivelse av eiendommen, men må ikke forveksles med en teknisk rapport.
                  </p>
                  <p className="mt-4">
                    En verditakst på bolig inneholder i hovedsak disse verdier:
                  </p>
                  <ul className="list-decimal list-inside space-y-2 mt-2">
                    <li>Teknisk verdiberegning på bakgrunn av oppføringspris.</li>
                    <li>Verdi for forventet salgspris i markedet på takseringstidspunktet.</li>
                  </ul>
                  <p className="mt-4">
                    Verditakst er den vanligste formen for taksering av fast eiendom. Verdivurderingen benyttes bl.a. som dokumentasjon ved avhending av fast eiendom, søknad om finansiering, tegning av forsikring og lignende.
                  </p>
                  <p className="mt-4">
                    For alle typer av taksering utføres dette på grunnlag av (en visuell) befaring med arealmåling, eierens opplysninger, framlagte dokumenter som leieavtaler mv. Takstdokumentene inneholder en beskrivelse av eiendommen, omkringliggende områder og eventuelt offentlige planer som vil påvirke verdien.
                  </p>
                  <p className="mt-4">
                    Takstene utferdiges i henhold til Norsk Takst sin instruks for takseringsområder og presenteres på Norsk Takst sine skjema for det utførte takseringsoppdraget. Arealer ved taksering måles etter ”Takstbransjens retningslinjer ved arealmåling av bolig – 2014”.
                  </p>
                </div>
              }
              isOpen={openSubSections.has("verditaksering")}
              onToggle={() => toggleSubSection("verditaksering")}
            />
            <SubCollapsible
              title="Vannskader"
              icon={BeakerIcon}
              id="vannskader"
              content={
                <div>
                  <p>
                    Når uhellet er ute og boligen er blitt skadet som følge av brudd på trykkvannsrør eller avløp kalles dette for en forsikringsskade. Skader på boliger og eiendom som vil variere, men skader som skyldes vann er kostbare og til dels tidkrevende å reparere.
                  </p>
                  <p className="mt-4">
                    Vann trenger fort inn i konstruksjon og medfører at denne må åpnes for kontroll og uttørking som kan ta lang tid.
                  </p>
                  <p className="mt-4">
                    Om de nødvendige sikringstiltak straks igangsettes vil følgeskader begrenses. Har derimot lekkasjen vært tilstede over lengre tid før denne oppdages vil det med stor sannsynlighet allerede ha dannet seg mugg, sopp og kanskje råteangrep i konstruksjonen.
                  </p>
                  <p className="mt-4">
                    Skader som nevnt må alltid tas alvorlig og kontrolleres av erfarne fagfolk!
                  </p>
                  <h4 className="mt-4 font-semibold">Huskeliste ved vannskader:</h4>
                  <p className="mt-2">Dette kan utføres før takstmann kommer på inspeksjon:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Ta bilder av vannskaden og ta vare på de skadde gjenstander</li>
                    <li>Ved større vannskader: Ta ut sikringer for det elektriske anlegg for den etasjen som har vært oversvømmet</li>
                    <li>Fjern løse gjenstander, møbler og annet fra vannet, alternativt stable møblene. Hvis det er mulig vendes møblene opp ned (vannet trekker oppover). Tøm bygningen for vann, fjern slam og tørk opp</li>
                    <li>Øk luftsirkulasjonen og senk temperaturen i det oppfuktede området hvis dette er mulig</li>
                    <li>Løsne gulvlister fra vegg dersom det kan gjøres uten å ødelegge vegger</li>
                    <li>Løst lagt parkett og laminat kan rives om man med sikkerhet kan si at vann har trukket under mer enn ¼ av gulvets areal. Ta bilder og merk av hvor fukt har vært på undergulvet</li>
                    <li>Husk at når takstmannen kommer så er det den skadelidte som har påvisningsplikt for å sikre riktig oppgjør der skaden er dekningsmessig</li>
                  </ul>
                </div>
              }
              isOpen={openSubSections.has("vannskader")}
              onToggle={() => toggleSubSection("vannskader")}
            />
            <SubCollapsible
              title="Brannskader"
              icon={FireIcon}
              id="brannskader"
              content={
                <div>
                  <p>
                    Med brann menes "ild som er kommet løs" og skal alltid meldes til politiet. Brann er en stor tragedie for de som blir rammet.
                  </p>
                  <p className="mt-4">
                    Med brann følger ofte store vannskader i slukkingsarbeidet. Følgeskader er store og arter seg som sopp, mugg, røyklukt etc.
                  </p>
                  <p className="mt-4">
                    Generelt ved brannskader må spesialkompetanse inn så snart som mulig hvis det skal være mulig å redde verdier og begrense følgeskader. Ved omfattende skader der reparasjonskostnader blir vesentlige er det normalt at skadene fastsettes ved skadeskjønn.
                  </p>
                  <p className="mt-4">
                    Råd og veiledning om dette får du gjennom ditt forsikringsselskap eller takstmann. Skadeskjønnet vil også gjelde maskiner, utstyr, innbo og løsøre.
                  </p>
                </div>
              }
              isOpen={openSubSections.has("brannskader")}
              onToggle={() => toggleSubSection("brannskader")}
            />
            <SubCollapsible
              title="Hærverk og innbrudd"
              icon={LockClosedIcon}
              id="harverk"
              content={
                <div>
                  <p>
                    Innbrudd, tyveri, hærverk og andre lovbrudd skal alltid meldes til politiet, selv om det aktuelle lovbrudd kanskje forårsaket beskjedne skader.
                  </p>
                  <p className="mt-4">
                    Skadelidte varsler deretter forsikringsselskapet som videre rekvirerer takstmann til undersøkelser, kontroll og prisberegning av skader mv.
                  </p>
                </div>
              }
              isOpen={openSubSections.has("harverk")}
              onToggle={() => toggleSubSection("harverk")}
            />
            <SubCollapsible
              title="Naturskader"
              icon={CloudIcon}
              id="naturskader"
              content={
                <div>
                  <p>
                    Byggebistand Troms har over 20 års erfaring innenfor naturskadetaksering. Ved naturskade forstås skader som direkte skyldes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Skred</li>
                    <li>Storm</li>
                    <li>Flom</li>
                    <li>Stormflo</li>
                    <li>Jordskjelv</li>
                    <li>Vulkanutbrudd eller lignende</li>
                  </ul>
                  <p className="mt-4">
                    Bygningsskader som er forårsaket av nevnte varsles på vanlig måte til forsikringsskadekontoret. Forsikringsoppgjør inndekkes av en egen forsikringsordning hos Norges forsikringsskadepool.
                  </p>
                  <p className="mt-4">
                    Naturskadeforsikringen knytter seg alltid til en brannforsikring. Ytterligere informasjon kan leses hos{" "}
                    <a href="https://naturskade.no" className="text-teal-500 underline hover:text-teal-400 transition-colors duration-300">
                      naturskade.no
                    </a>.
                  </p>
                </div>
              }
              isOpen={openSubSections.has("naturskader")}
              onToggle={() => toggleSubSection("naturskader")}
            />
          </div>
        </div>
      ),
    },
    {
      name: "Skjønn",
      href: "#skjonn",
      id: "skjonn",
      icon: UserIcon,
      content: (
        <div>
          <p>
            Skadeskjønn eller skjønn benyttes ved større og omfattende byggeskader. Denne oppgjørsformen finner dere mer om i deres vilkår fra forsikringsselskap.
          </p>
          <p className="mt-4">
            Skjønn er en form for taksering med oppgjør av skade etter spesielle prinsipp. Utføres gjerne i forbindelse med større og uoversiktlige skader som brann.
          </p>
          <p className="mt-4">
            Forsikringsselskapet og forsikrede oppnevner hver sin skjønnsmann som igjen blir enige om skadebeløp. Det endelige resultatet kan kun omgjøres ved domstol.
          </p>
          <p className="mt-4">
            Hovedregelen er at hver part dekker kostnadene til den skjønnsmann de oppnevner.
          </p>
          <p className="mt-4">
            Byggebistand Troms kan utføre skadeskjønn. Vi har nødvendig opplæring i vilkår, faglig bakgrunn og har 15 års erfaring på området skadeskjønn.
          </p>
        </div>
      ),
    },
    {
      name: "Overlevering",
      href: "#overlevering",
      id: "overlevering",
      icon: HomeIcon,
      content: (
        <div>
          <p>
            Bistand ved overtakelse av nye eller brukte boliger har etter hvert også blitt en selvfølge. Heldigvis for kjøper, men også like heldig for selger.
          </p>
          <p className="mt-4">
            Overtakelsestidspunktet er et krysningspunkt for deg, men også for din bank og forsikringsselskap som overtar risikoen fra denne dag.
          </p>
          <p className="mt-4">
            Ved nybygg vil det være teknisk forskrift som setter standarden, men for overtakelse av brukte boliger vil det være andre regler som gjelder. Det avgjørende her er om boligen er lik opplysninger i prospekt eller om det finnes deler i boligen som er fornyet og som må betraktes som nytt med hertil samme forventede sluttførsel som nytt.
          </p>
          <p className="mt-4">
            Ved nybygg vil vi ved overlevering kunne kontrollere om de ferdige flatene tilfredsstiller kravene til bl.a. retthet og funksjonalitet. Vi har godkjente måle-instrumenter og erfaring med retthetsmålinger som avdekker skjevheter og avvik i konstruksjon.
          </p>
          <p className="mt-4">
            Ved overtakelse av brukt bolig med eksempelvis utleieenheter er det viktig at godkjenningen for denne fremlegges for kjøper ved overtakelsen. Selger man med ulovlig utleiedel får man problemer når dette blir oppdaget.
          </p>
          <p className="mt-4">
            Er boligen delvis fornyet vil kjøper lett kunne forvente at disse deler tilfredsstiller nye forskrifter om ikke annet er nevnt i salgsprospekt.
          </p>
        </div>
      ),
    },
    {
      name: "Byggelånskontroll",
      href: "#byggelanskontroll",
      id: "byggelanskontroll",
      icon: BanknotesIcon,
      content: (
        <div>
          <p>
            Byggelånskontrollen har til hensikt å hindre økonomisk tap for bank/lånegiver dersom entreprenøren ikke er i stand å fullføre kontraktsforholdet.
          </p>
          <p className="mt-4">
            Bank/lånegiver kan forlange en slik tjeneste betalt av lånetaker ved opptak av kredit i en byggeprosess. Lånet er kortsiktig og varer normalt kun i byggetiden.
          </p>
          <p className="mt-4">
            Utbetalinger av lånebeløp skjer i takt med fremdriften på byggeplassen. For å ha tilsyn med dette må du eller bank/lånegiver engasjere kontrollør.
          </p>
          <p className="mt-4">
            Vi kan bistå byggherre direkte eller gjennom bank/lånegiver med denne tjenesten.
          </p>
          <p className="mt-4">
            Ved normale forhold på eneboliger vil det være tilstrekkelig med 3-4 byggeplassbesøk i løpet av byggeperioden. Disse besøk legges opp etter betalingsintervallene til utførende entreprenør.
          </p>
          <p className="mt-4">
            DOKUMENTER
          </p>
          <p className="mt-4">
            I forbindelse med Deres byggelånskontroll trenger vi samtlige kontraktsdokumenter med vedlegg av tegninger og et utarbeidet budsjett for tiltaket.
          </p>
          <p className="mt-4">
            Vi gjør oppmerksom på at byggelånskontroll ikke er en teknisk kontroll av boligen. Det må byggherre selv stå ansvarlig for, eller kjøpe som tilleggstjeneste.
          </p>
          <p className="mt-4">
            Vi kan om ønskelig utføre den teknisk byggekontroll samtidig ved våre besøk på bygget der dette avtales.
          </p>
        </div>
      ),
    },
    {
      name: "Prosjekt- og Byggeledelse",
      href: "#prosjekt-og-byggeledelse",
      id: "prosjekt-og-byggeledelse",
      icon: WrenchScrewdriverIcon,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p>
              Ved planlegging av bygging eller rehabilitering av bolig- eller næringseiendom vil det alltid være behov for en fagkyndig til å styre eller kontrollere gjennomføringen av byggeprosjektet.
            </p>
            <p className="mt-4">
              Vi kan bistå prosessen i hele eller deler av gjennomføringen med unntak i utførelsen. Denne kan om ønskelig byggherren eller annen innleid fagperson/firma utføre.
            </p>
            <p className="mt-4">
              Ved å benytte innleid fagkyndig byggekontrollør fra starten kan kostbare overraskelser unngås. Byggekontrolløren skal påse at entreprenører og håndverkere utfører tilfredsstillende arbeid til avtalt tid og bidra til at sluttproduktet blir som kontraktsfestet.
            </p>
            <p className="mt-4">
              Ved byggeledelse representerer byggelederen byggherren. Dette vil si at den innleide byggelederen har ansvar for oppfølging av prosjektet. Han kontrollerer inngåtte avtaler og sikrer kvalitet på det ferdige prosjekt.
            </p>
            <p className="mt-4">
              Tjenesten kan tilpasses for hvert enkelt prosjekt.
            </p>
            <p className="mt-4">
              Vårt oppdrag kan om ønskelig gjelde fra utarbeidelse av prosjektbeskrivelsen med innhenting av tilbud/anbud, kontraktsinngåelse, kontroll under gjennomføringen og med overlevering av det ferdige bygg til byggherre.
            </p>
            <p className="mt-4">
              De er hjertelig velkommen til en samtale om dine planer.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/img/forsidebilde.jpg"
              alt="Prosjekt- og Byggeledelse illustrasjon"
              className="rounded-xl shadow-lg w-full max-w-[180px] md:max-w-[220px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      name: "Byggesøknader",
      href: "#byggesoknader",
      id: "byggesoknader",
      icon: DocumentMagnifyingGlassIcon,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p>
              Byggebistand Troms er godkjent for ansvarsrett med sentralgodkjenning etter den nye plan og bygningsloven.
            </p>
            <p className="mt-4">
              Vi kan tilby tjeneste som ansvarlig søker inntil klasse 2. I tillegg kan vi utføre byggteknisk prosjektering i klasse 1. og kontroll av dette.
            </p>
            <p className="mt-4">
              Ved egne (byggherre) prosjekt som enkle søknadsmessige arbeider kan vi også foreta kontroll av prosjektering (KPR), samt kontroll av utførelsen som tilleggstjeneste på byggeplass (KUT).
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/img/byggsok.png"
              alt="Byggesøknader illustrasjon"
              className="rounded-xl shadow-lg w-full max-w-[180px] md:max-w-[220px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      name: "Telefonbistand",
      href: "#telefonbistand",
      id: "telefonbistand",
      icon: PhoneIcon,
      content: (
        <div>
          <p>
            Vi tilbyr også våre kunder bistand over telefon.
          </p>
          <p className="mt-4">
            En betalt samtale i forkant av en ønsket befaring kan også være tilstrekkelig for svar på Deres spørsmål.
          </p>
          <p className="mt-4">
            Vi kan svare på spørsmål og gi råd av byggteknisk karakter.
          </p>
          <p className="mt-4">
            Vår rådgivningstjeneste blir fakturert etter medgått minuttpris, for tiden kroner 30 inkl mva per minutt.
          </p>
          <p className="mt-4">
            Et telefonmøte med varighet inntil 15 minutter (kr 450) blir kreditert om videre oppdrag avtales.
          </p>
        </div>
      ),
    },
    {
      name: "Rådgivning",
      href: "#radgivning",
      id: "radgivning",
      icon: LightBulbIcon,
      content: (
        <div>
          <p>
            Vårt firma vil som en uhildet part kunne bistå de fleste med spørsmål av byggteknisk karakter. Som eksempel kan nevnes avtaler knyttet til kjøp av håndverkertjenester m.v.
          </p>
          <p className="mt-4">
            Vi kan hjelpe deg å kontrollere og eventuelt anbefale endringer i avtaletekst før underskrivelse.
          </p>
          <p className="mt-4">
            Vårt firma kan også bistå med løsningsforslag og materialvalg av planlagte tiltak til boligeiendom og med utførelsesmetoder av disse.
          </p>
          <p className="mt-4">
            Vår rådgivningstjeneste omfatter også telefonbistand.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-gray-50 dark:from-teal-950 dark:via-green-950 dark:to-gray-900 font-sans overflow-x-hidden">
      <section className="relative min-h-[400px] pt-32 pb-24 bg-gradient-to-br from-teal-600 to-green-500 text-white overflow-hidden flex items-center justify-center">
        <Container className="relative z-10 text-center pt-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            style={{ fontFamily: "'Inter Variable', 'Poppins', sans-serif" }}
          >
            Våre Tjenester
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-white/90 drop-shadow-md"
          >
            Gode løsninger for ditt prosjekt
          </motion.p>
        </Container>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,222,128,0.25),transparent)] animate-cinematicPulse" />
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6 perspective-1000">
            {sectionLinks.map((section) => (
              <CollapsibleSection
                key={section.id}
                title={section.name}
                icon={section.icon}
                id={section.id}
                isOpen={openSections.has(section.id)}
                onToggle={() => toggleSection(section.id)}
                content={section.content}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,222,128,0.2),transparent)] animate-cinematicPulse" />
        <Container className="text-center relative z-10">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Ta kontakt for en uforpliktende samtale om hvordan vi kan bistå deg.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-8"
          >
            <Link
              href="/om-oss#kontakt-oss"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("/om-oss#kontakt-oss", "Kontakt oss");
              }}
              className="inline-flex items-center px-16 py-6 bg-gradient-to-r from-teal-500 to-green-400 text-white rounded-full font-semibold text-2xl hover:from-teal-600 hover:to-green-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.9)] hover:scale-110 transition-all duration-500 shadow-2xl relative z-10"
            >
              Kontakt oss <ChevronRightIcon className="w-9 h-9 ml-4" />
            </Link>
          </motion.div>
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
      `}</style>
    </div>
  );
}