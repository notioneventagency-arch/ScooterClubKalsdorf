"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Sun,
  Moon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-5"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-3xl border transition-all duration-500 px-8 py-4 ${
          scrolled
            ? "bg-black/80 border-white/10 backdrop-blur-2xl shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}

        <a
          href="#"
          className="flex items-center gap-4 group"
        >
          <img
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="h-16 w-auto transition-transform duration-500 group-hover:scale-105"
          />

          <div>
            <h1 className="font-black tracking-[0.25em] uppercase text-lg">
              Scooter Club
            </h1>

            <p className="text-zinc-400 text-sm">
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
              className="relative font-semibold text-white transition hover:text-red-500 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </div>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-3">

          <a
            href="https://www.instagram.com/scooter_club_kalsdorf/"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <Facebook size={20} />
          </a>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>

          <a
            href="#kontakt"
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Mitglied werden
          </a>

        </div>

        {/* Mobile */}

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mx-auto mt-4 max-w-7xl rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl p-8 lg:hidden"
          >

            <div className="flex flex-col gap-6">

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="text-xl font-semibold hover:text-red-500"
                >
                  {link.name}
                </a>

              ))}

              <div className="h-px bg-zinc-800" />

              <a
                href="https://www.instagram.com/scooter_club_kalsdorf/"
                target="_blank"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/"
                target="_blank"
              >
                Facebook
              </a>

              <a href="#kontakt">
                Mitglied werden
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </motion.header>
  );
}
