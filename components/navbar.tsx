"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Über uns", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Galerie", href: "#gallery" },
  { name: "Sponsoren", href: "#sponsors" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Navbar({ dark, setDark }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-5"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-xl shadow-2xl">

        {/* Logo */}

        <a href="#" className="flex items-center gap-4">

          <img
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="h-14 w-auto"
          />

          <div>

            <h1 className="text-xl font-black tracking-widest uppercase">
              Scooter Club
            </h1>

            <p className="text-sm text-zinc-400">
              Kalsdorf
            </p>

          </div>

        </a>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-white hover:text-red-500 transition"
            >
              {link.name}
            </a>

          ))}

        </div>

        {/* Rechts */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://www.instagram.com/scooter_club_kalsdorf/"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={22} />
          </a>

          <a
            href="mailto:scooter.kalsdorf@gmail.com"
            className="hover:text-red-500 transition"
          >
            <Mail size={22} />
          </a>

          <a
            href="tel:+436641259454"
            className="hover:text-green-400 transition"
          >
            <Phone size={22} />
          </a>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>

        </div>

        {/* Mobile */}

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>

      </nav>

      {mobileMenuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 max-w-7xl rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl p-8 lg:hidden"
        >

          <div className="flex flex-col gap-6">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-semibold hover:text-red-500 transition"
              >
                {link.name}
              </a>

            ))}

            <hr className="border-zinc-700" />

            <a
              href="https://www.instagram.com/scooter_club_kalsdorf/"
              target="_blank"
            >
              Instagram
            </a>

            <a href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/">
              Facebook
            </a>

            <a href="mailto:scooter.kalsdorf@gmail.com">
              scooter.kalsdorf@gmail.com
            </a>

            <a href="tel:+436641259454">
              +43 664 1259454
            </a>

          </div>

        </motion.div>

      )}

    </motion.header>
  );
}
