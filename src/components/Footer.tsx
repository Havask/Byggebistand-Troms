"use client";
import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    { name: "Forside", href: "/" },
    { name: "Tjenester", href: "/tjenester" },
    { name: "Priser", href: "/priser" },
    { name: "Om oss", href: "/om-oss" },
  ];

  return (
    <footer className="relative bg-[#eef3ef] text-[#1d4d36] overflow-hidden">
      {/* Top edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#1d4d36]/[0.06]" />

      <div className="relative z-10">
        <Container>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

              {/* Brand + contact */}
              <div className="md:col-span-5">
                <h3 className="text-lg font-bold text-[#1d4d36] tracking-tight">
                  Byggebistand Troms
                </h3>
                <p className="mt-2 text-sm text-[#1d4d36]/45 leading-relaxed max-w-xs">
                  Uavhengig byggekontroll, taksering og teknisk rådgivning i Troms-regionen siden 2006.
                </p>

                <div className="mt-6 space-y-2.5">
                  <a
                    href="tel:+4790649008"
                    className="flex items-center gap-3 text-sm font-medium text-[#1d4d36]/55 hover:text-[#1d4d36] transition-colors duration-200"
                  >
                    <PhoneIcon />
                    906 49 008
                  </a>
                  <a
                    href="mailto:oddvar@byggebistand-as.no"
                    className="flex items-center gap-3 text-sm font-medium text-[#1d4d36]/55 hover:text-[#1d4d36] transition-colors duration-200"
                  >
                    <MailIcon />
                    oddvar@byggebistand-as.no
                  </a>
                  <p className="flex items-center gap-3 text-sm font-medium text-[#1d4d36]/55">
                    <PinIcon />
                    Stakkevollvegen 48, 9010 Tromsø
                  </p>
                </div>
              </div>

              {/* Nav links */}
              <div className="md:col-span-4">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/30 mb-4">
                  Sider
                </p>
                <div className="flex flex-col gap-2.5">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-sm font-medium text-[#1d4d36]/50 hover:text-[#1d4d36]/85 transition-colors duration-200 w-fit"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="md:col-span-3">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/30 mb-4">
                  Følg oss
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/byggebistandtroms"
                    target="_blank"
                    rel="noopener"
                    aria-label="Facebook"
                    className="p-2 rounded-lg bg-[#1d4d36]/[0.05] text-[#1d4d36]/40 hover:bg-[#1d4d36]/[0.1] hover:text-[#1d4d36]/70 transition-all duration-200"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oddvar-rønsmoen-skjærstein-90480710/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg bg-[#1d4d36]/[0.05] text-[#1d4d36]/40 hover:bg-[#1d4d36]/[0.1] hover:text-[#1d4d36]/70 transition-all duration-200"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1d4d36]/[0.06] px-6 lg:px-8 py-5">
            <p className="text-xs text-[#1d4d36]/20 text-center">
              Utviklet av{" "}
              <a
                href="https://github.com/Havask"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d4d36]/30 hover:text-[#1d4d36]/55 transition-colors duration-200"
              >
                Havask
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

// Contact Icons
const iconClass = "w-4 h-4 text-[#1d4d36]/35 flex-shrink-0";
const PhoneIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const MailIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const PinIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

// Social Icons
const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);