"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const Navbar = () => {
  const basePath = "/Byggebistand-Troms"; // Add basePath for production

  const navigation = [
    { name: "Forside", href: `${basePath}/` }, // Include basePath in href
    { name: "Tjenester", href: `${basePath}/tjenester` }, // Include basePath in href
    { name: "Priser", href: `${basePath}/priser` }, // Include basePath in href
    { name: "Om oss", href: `${basePath}/om-oss` }, // Include basePath in href
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-6 lg:p-8">
        {/* Logo */}
        <Link href={`${basePath}/`}> {/* Include basePath in href */}
          <span className="flex items-center">
            <Image
              src={`${basePath}/img/logo1.png`} // Include basePath in src
              width={250} // Adjusted for better balance
              height={250}
              alt="Logo"
              className="w-48 h-auto lg:w-64 transition-transform duration-300 hover:scale-105"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-end space-x-10">
          {navigation.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className="text-lg font-semibold text-gray-700 dark:text-gray-200 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-gradient-to-r from-[#308453] to-[#4CAF50] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white dark:bg-gray-800 shadow-md"
        >
          <div className="flex flex-col items-center space-y-6 py-6">
            {navigation.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={toggleMenu} // Close menu on click
                  className="text-lg font-semibold text-gray-700 dark:text-gray-200 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-gradient-to-r from-[#308453] to-[#4CAF50] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};