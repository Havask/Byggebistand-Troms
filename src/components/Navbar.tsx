"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const navigation = [
    { name: "Forside", href: "/" },
    { name: "Tjenester", href: "/tjenester" },
    { name: "Priser", href: "/priser" },
    { name: "Om oss", href: "/om-oss" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`
          w-full fixed top-0 z-50 h-[80px]
          transition-all duration-300 ease-out
          ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-[#1d4d36]/5"
            : "bg-white shadow-sm"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="h-full flex items-center relative z-10">
            <Image
              src="/img/logo.svg"
              width={280}
              height={280}
              alt="Byggebistand Troms"
              className="h-[52px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex h-full items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-[0.95rem] font-semibold text-[#2a2a2a] rounded-xl
                           hover:text-[#1d4d36] hover:bg-[#1d4d36]/5
                           transition-all duration-200 group"
              >
                {item.name}
                <span
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full
                             bg-[#1d4d36] group-hover:w-6 transition-all duration-300"
                />
              </Link>
            ))}


          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 -mr-2 rounded-xl text-[#2a2a2a]
                       hover:bg-[#1d4d36]/5 transition-colors duration-200"
            aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
          >
            <div className="relative w-6 h-6">
              <Bars3Icon
                className={`w-6 h-6 absolute inset-0 transition-all duration-300
                  ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
              />
              <XMarkIcon
                className={`w-6 h-6 absolute inset-0 transition-all duration-300
                  ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300
          ${isOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#1d4d36]/20 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`
            absolute top-[80px] left-0 right-0 bg-white
            border-t border-[#1d4d36]/8
            shadow-xl shadow-[#1d4d36]/10
            transition-all duration-300 ease-out
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
          `}
        >
          <div className="flex flex-col px-6 py-4">
            {navigation.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-[1.05rem] font-semibold text-[#2a2a2a] hover:text-[#1d4d36]
                           border-b border-[#1d4d36]/6 last:border-b-0
                           transition-colors duration-200 flex items-center justify-between group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.name}
                <svg
                  className="w-4 h-4 text-[#1d4d36]/30 group-hover:text-[#1d4d36] group-hover:translate-x-1 transition-all duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}


          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[80px]" />
    </>
  );
};