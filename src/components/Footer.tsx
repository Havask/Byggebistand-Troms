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
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              {/* Left: Nav links */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm font-medium text-[#1d4d36]/45 hover:text-[#1d4d36]/80 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right: Social */}
              <div className="flex items-center gap-5">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1d4d36]/25">
                  Følg oss
                </span>
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