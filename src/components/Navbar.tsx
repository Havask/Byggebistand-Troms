"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const navigation = [
    { name: "Forside", href: "/" },
    { name: "Tjenester", href: "/tjenester" },
    { name: "Priser", href: "/priser" },
    { name: "Om oss", href: "/om-oss" },
  ];

  const [isOpens, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpens);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-6 lg:p-8">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center">
            <Image
              src="/Byggebistand-Troms/img/logo.svg"
              width={500}  // Doubled from 250
              height={500} // Doubled from 250
              alt="Logo"
              className="w-96 h-auto lg:w-128 transition-transform duration-300 hover:scale-105" // Doubled from w-48 and lg:w-64
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-end space-x-10">
          {navigation.map((item, index) => (
            <div key={index}>
              <Link
                href={item.href}
                className="text-lg font-semibold text-gray-700 dark:text-gray-200 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-gradient-to-r from-[#308453] to-[#4CAF50] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isOpens ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpens && (
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="flex flex-col items-center space-y-6 py-6">
            {navigation.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  onClick={toggleMenu} // Close menu on click
                  className="text-lg font-semibold text-gray-700 dark:text-gray-200 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-gradient-to-r from-[#308453] to-[#4CAF50] group-hover:w-full transition-all duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};