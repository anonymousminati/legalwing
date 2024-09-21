"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

import { CompanyLogo } from "./CompanyLogo";
import Link from "next/link";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const navbarRef = useRef(null);

  const isActive = (href) => pathname === href;


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  useEffect(() => {
    // Close the menu when the pathname changes
    setToggleMenu(false);
  }, [pathname]);

  return (
    <nav ref={navbarRef} className={`transition-all w-full z-20 top-0 left-0 md:px-6 lg:px-16 ${isSticky ? "fixed bg-white shadow-lg" : "relative bg-[#FFE115] "}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <CompanyLogo className="w-8 h-8" />
        </Link>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="text-[#616161] bg-transparent hidden md:flex gap-2 item-center border-[0.5px] rounded-lg border-[#292929] hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            <PhoneIcon height={30} className="rounded-lg p-[4px] " /> 
            <p className="underline-0 text-xl ">+91 9067801412</p>
          </button>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={toggleMenu ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {toggleMenu ? (
              <XMarkIcon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${toggleMenu ? "block" : "hidden"}  h-16 px-0 md:px-10 lg:px-24`}
          id="navbar-cta"
        >
          <ul className="bg-[#382828] md:bg-transparent flex flex-col gap-5 md:gap-16 h-max font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className={`hover:border-b-4 hover:border-blue-500 ${isActive('/') ? 'md:border-b-4 cursor-pointer h-16 rounded flex items-center md:border-[#425066] bg-blue-700 md:bg-transparent' : 'border-0 h-16 flex items-center'}`}>
              <Link
                href="/"
                className={`w-full md:w-auto block py-2 px-3 md:p-0 text-white rounded md:bg-transparent ${isActive('/') ? 'md:text-blue-700' : 'md:text-gray-900'}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className={`hover:border-b-4 hover:border-blue-500 ${isActive('/about') ? 'md:border-b-4 cursor-pointer h-16 rounded flex items-center md:border-[#425066] bg-blue-700 md:bg-transparent' : 'border-0 h-16 flex items-center'}`}>
              <Link
                href="/about"
                className={`w-full md:w-auto block py-2 px-3 md:p-0 text-white rounded md:bg-transparent ${isActive('/about') ? 'md:text-blue-700' : 'md:text-gray-900'}`}
              >
                About Us
              </Link>
            </li>
            <li className={`hover:border-b-4 hover:border-blue-500 ${isActive('/services') ? 'md:border-b-4 cursor-pointer h-16 rounded flex items-center md:border-[#425066] bg-blue-700 md:bg-transparent' : 'border-0 h-16 flex items-center'}`}>
              <Link
                href="/services"
                className={`w-full md:w-auto block py-2 px-3 md:p-0 text-white rounded md:bg-transparent ${isActive('/services') ? 'md:text-blue-700' : 'md:text-gray-900'}`}
              >
                Services
              </Link>
            </li>
            <li className={`block md:hidden h-16 rounded flex items-center`}>
              <button
                type="button"
                className="text-white bg-transparent flex gap-2 item-center border-[0.5px] rounded-lg border-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                <PhoneIcon height={24} className="border-1 rounded-lg p-[4px] border-white" /> 
                <p className="underline">+91 9067801412</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
