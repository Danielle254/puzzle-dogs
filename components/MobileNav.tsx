"use client";

import React from "react";
import { X } from "lucide-react";
import Nav from "./Nav";
import { FocusTrap } from "focus-trap-react";

type DrawerProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function MobileNav({ isOpen, closeMenu }: DrawerProps) {
  return (
    <FocusTrap active={isOpen}>
      <div
        className={`fixed top-0 right-0 py-6 z-10 h-full w-full transition-transform duration-300 transform bg-background flex flex-col justify-center items-center ${
          isOpen ? "translate-x-0" : "translate-x-full invisible"
        }`}
      >
        <button
          onClick={closeMenu}
          className="fixed top-8 right-6 border border-transparent hover:border-foreground cursor-pointer"
          aria-label="close menu"
          tabIndex={isOpen ? 0 : -1}
        >
          <X aria-hidden="true" />
        </button>
        <Nav
          classes="flex flex-col gap-4 items-start md:hidden pt-12"
          closeMenu={closeMenu}
        />
      </div>
    </FocusTrap>
  );
}
