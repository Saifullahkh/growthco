"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-30 px-5 pt-6 md:px-10 lg:px-20">
      <nav className="flex flex-wrap items-start gap-4 md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white">
            <svg viewBox="0 0 22 22" className="h-5 w-5 fill-[#2e2e82] md:h-6 md:w-6" aria-hidden="true">
              <rect x="1" y="1" width="8" height="8" rx="1.5" />
              <rect x="13" y="1" width="8" height="8" rx="1.5" />
              <rect x="1" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-base leading-none font-extrabold tracking-[1px] text-white uppercase md:text-lg">
              GROWTH CO.
            </p>
            <p className="mt-1 text-xs tracking-[0.4px] text-white/70 md:text-sm">Elevating Excellence</p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ms-auto inline-flex rounded-lg border border-white/60 px-3 py-2 text-base text-white md:hidden"
        >
          &#9776;
        </button>

        <ul
          className={`${
            isOpen ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 opacity-0 md:pointer-events-auto md:max-h-none md:opacity-100"
          } mt-2 flex w-full flex-col gap-3 overflow-hidden rounded-xl border border-white/15 bg-[#141852f2] px-4 py-3 text-base transition-all duration-300 md:mt-0 md:w-auto md:flex-1 md:flex-row md:items-center md:justify-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:text-[15px]`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-medium tracking-[0.2px] transition ${
                  pathname === link.href
                    ? "text-[#f5c518]"
                    : "text-white hover:text-[#f5c518]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden rounded-full border-2 border-white bg-[#2e2e82] px-6 py-2.5 text-sm font-bold tracking-[0.7px] text-white transition hover:border-[#f5c518] hover:bg-[#f5c518] hover:text-[#2e2e82] md:inline-block">
          SIGN UP
        </Link>
      </nav>
    </header>
  );
}
