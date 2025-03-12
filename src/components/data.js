import {
  BuildingOfficeIcon, // For construction-related services
  CalculatorIcon, // For calculations and appraisals
  DocumentCheckIcon, // For inspections and approvals
  PhoneIcon, // For phone assistance
  UserGroupIcon, // For clients like private homeowners
  ScaleIcon, // For legal-related services
  WrenchScrewdriverIcon, // For contractors and builders
  ShieldCheckIcon, // For insurance companies
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/forsidebilde.jpg";
import benefitTwoImg from "../../public/img/forside2.png";

const benefitOne = {
  title: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Byggekontroll", // Changed from "BYGGEKONTROLL"
      icon: <BuildingOfficeIcon />,
    },
    {
      title: "Taksering", // Changed from "TAKSERING"
      icon: <CalculatorIcon />,
    },
    {
      title: "Skjønn", // Changed from "SKJØNN"
      icon: <DocumentCheckIcon />,
    },
    {
      title: "Overlevering", // Changed from "OVERLEVERING"
      icon: <BuildingOfficeIcon />,
    },
    {
      title: "Byggelånskontroll", // Changed from "BYGGELÅNSKONTROLL"
      icon: <CalculatorIcon />,
    },
    {
      title: "Prosjekt- og Byggeledelse", // Changed from "PROSJEKT- OG BYGGELEDELSE"
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Byggesøknader", // Changed from "BYGGESØKNADER"
      icon: <DocumentCheckIcon />,
    },
    {
      title: "Telefonbistand", // Changed from "TELEFONBISTAND"
      icon: <PhoneIcon />,
    },
    {
      title: "Rådgivning", // Changed from "RÅDGIVNING"
      icon: <ScaleIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Våre oppdragsgivere er:",
  image: benefitTwoImg,
  desc: "For advokater og boligeiere tilbyr vi tjenester som teknisk dokumentasjon i forbindelse med eiendomsreklamasjoner mv.\nFor nybygg og brukte boliger utfører vi bl.a. rådgivning, kontroll og bistand ved overtakelse og garantibefaring.",
  bullets: [
    {
      title: "Private boligeiere",
      icon: <UserGroupIcon />,
    },
    {
      title: "Borettslag og boligsameier",
      icon: <UserGroupIcon />,
    },
    {
      title: "Advokater",
      icon: <ScaleIcon />,
    },
    {
      title: "Entreprenører/utbyggere",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Forsikringsselskap",
      icon: <ShieldCheckIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };