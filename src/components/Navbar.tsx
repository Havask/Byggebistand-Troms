"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const navigation = [
    { name: "Forside", href: "/" },
    { name: "Tjenester", href: "/tjenester" },
    { name: "Priser", href: "/priser" },
    { name: "Om oss", href: "/om-oss" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) setNavbarHeight(nav.offsetHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [isOpen]);

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50 h-[90px]">
      <div className="container mx-auto flex items-center justify-between h-full px-6 lg:px-8">
        {/* Logo - Slightly smaller */}
        <Link href="/" className="h-full flex items-center">
          <Image
            src="/img/logo.svg"
            width={280}
            height={280}
            alt="Logo"
            className="h-[60px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation - Slightly smaller text */}
        <div className="hidden lg:flex h-full items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[20px] font-semibold text-gray-700 relative py-2 group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#308453] to-[#4CAF50] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-gray-700"
        >
          {isOpen ? (
            <XMarkIcon className="w-9 h-9" />
          ) : (
            <Bars3Icon className="w-9 h-9" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-[90px] w-full">
          <div className="flex flex-col items-center space-y-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[20px] font-semibold text-gray-700 py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};