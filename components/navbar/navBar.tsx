"use client";
import Image from "next/image";
import Link from "next/link";
import { IconChevronDown, IconUser, IconMenu2 } from "@tabler/icons-react";

const navLinks = [
  { label: "Compra en planos", href: "/compra-planos" },
  { label: "Compra inmediata", href: "/compra-inmediata" },
  { label: "Alquiler", href: "/alquiler" },
];

export default function Navbar() {
  return (
    <nav className="hidden h-[100px] items-center justify-between bg-white py-6 px-5 md:flex">
      <div className="flex items-center gap-10 md:gap-12">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/propi_logo.svg" alt="Propi" width={135} height={40} />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-propi-grey hover:text-propi-title"
            >
              {link.label}
              <IconChevronDown size={16} stroke={2} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden items-center gap-2 rounded-full border border-propi-grey-light px-3 py-2 text-sm text-propi-grey md:flex">
          El Salvador
          <IconChevronDown size={16} stroke={2} />
          <Image
            src="/props/el_salvador.svg"
            alt="El Salvador"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
        </button>

        <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
          <IconUser size={20} stroke={2} />
        </button>

        <div className="h-6 w-px bg-propi-grey-light" />

        <button className="p-2 text-propi-grey">
          <IconMenu2 size={24} stroke={2} />
        </button>
      </div>
    </nav>
  );
}
