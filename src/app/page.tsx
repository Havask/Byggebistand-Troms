"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import React from "react";
import { benefitOne, benefitTwo } from "@/components/data";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const allBenefits = [
    { ...benefitOne, id: "benefitOne" },
    { ...benefitTwo, id: "benefitTwo" },
  ];

  // Navigation links matching Tjenster page sections
  const sectionLinks = [
    { name: "Byggekontroll", href: "/tjenester#byggekontroll" },
    { name: "Taksering", href: "/tjenester#taksering" },
    { name: "Røykvarslerdagen", href: "/tjenester#roykvarslerdagen" },
    { name: "Skjønn", href: "/tjenester#skjonn" },
    { name: "Overlevering", href: "/tjenester#overlevering" },
    { name: "Byggelånskontroll", href: "/tjenester#byggelanskontroll" },
    { name: "Prosjekt- og Byggeledelse", href: "/tjenester#prosjekt-og-byggeledelse" },
    { name: "Byggesøknader", href: "/tjenester#byggesoknader" },
    { name: "Telefonbistand", href: "/tjenester#telefonbistand" },
    { name: "Rådgivning", href: "/tjenester#radgivning" },
  ];

  // Handle click to ensure scrolling after navigation
  const handleLinkClick = (href: string, title: string) => {
    console.log(`Clicked: ${title}, Navigating to: ${href}`); // Debug clicked title and URL
    const [path, hash] = href.split("#");
    if (path === "/tjenester" && hash) {
      window.location.href = href; // Navigate manually
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          console.log(`Scrolling to: ${hash}`); // Confirm scroll target
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log(`Element not found: ${hash}`); // Debug if element missing
        }
      }, 500); // Increased delay to ensure page loads
    } else {
      console.log(`No hash found or invalid path: ${href}`); // Debug fallback case
      window.location.href = href; // Fallback navigation
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Container>
        <Hero />
        <SectionTitle title="Vi kan tilby:" />
        {allBenefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-24 pt-24 lg:pt-36"
          >
            <h3
              className="text-3xl font-semibold text-gray-900 lg:text-4xl dark:text-white bg-clip-text bg-gradient-to-r from-[#308453] to-[#4CAF50] text-transparent tracking-tight mb-16 text-center"
              style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
            >
              {benefit.title}
            </h3>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-20">
              {benefit.bullets.map((item, index) => {
                const link =
                  item.title === "SKJØNN"
                    ? "/tjenester#skjonn" // Hardcode for Skjønn to test
                    : sectionLinks.find((link) => link.name === item.title)?.href || "/tjenester";
                console.log(`Item title: ${item.title}, Assigned href: ${link}`); // Debug each title and href
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link}
                      className="block"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default navigation
                        handleLinkClick(link, item.title); // Handle navigation and scroll
                      }}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-[#308453]/50 cursor-pointer flex flex-col items-start space-y-6 w-full group">
                        <div className="flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#308453] to-[#4CAF50] rounded-full w-14 h-14">
                          {React.cloneElement(item.icon, { className: "w-7 h-7 text-white" })}
                        </div>
                        <h4
                          className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight"
                          style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-base leading-relaxed text-gray-600 dark:text-gray-400"
                          style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
                        >
                          {item.desc}
                        </p>
                        <p
                          className="mt-4 text-sm font-medium text-[#308453] opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative"
                          style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
                        >
                          Les Mer
                          <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-gradient-to-r from-[#308453] to-[#4CAF50] group-hover:w-full transition-all duration-300" />
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}