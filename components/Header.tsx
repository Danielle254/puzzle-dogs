"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between max-w-[1000px] h-20 mx-auto items-center px-2">
      <div className="flex items-end">
        <Link href="/">
          <img
            src="/images/logo/logo_horizontal.png"
            className="max-h-16 transition duration-300 ease-in-out hover:scale-105"
            alt="Puzzle Dogs Logo - lime green dog with purple cape leaps up and to the right"
          />
        </Link>
      </div>
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="open menu"
      >
        <Menu aria-hidden="true" size={32} className="mr-4" strokeWidth={1} />
      </button>
      <MobileNav
        isOpen={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />
      <Nav classes="hidden md:flex md:gap-4 md:items-center" />
    </nav>
  );
}
