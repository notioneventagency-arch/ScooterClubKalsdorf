"use client";

import { useEffect, useState } from "react";
import {
  Instagram,
  Facebook,
  Menu,
  X,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}

        <a href="#" className="flex items-center gap-4">

          <img
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="h-14"
          />

          <div>

            <h1 className="font-black uppercase tracking-widest text-lg">
              Scooter Club
            </h1>

            <p className="text-sm text-zinc-400">
              Kalsdorf
            </p>

          </div>

        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">

          <a href="#about" className="hover:text-red-500 transition">
            Über Uns
          </a>

          <a href="#events" className="hover:text-red-500 transition">
            Events
          </a>

          <a href="#gallery" className="hover:text-red-500 transition">
            Galerie
          </a>

          <a href="#kontakt" className="hover:text-red-500 transition">
            Kontakt
          </a>

        </nav>

        {/* Rechte Seite */}

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="https://www.instagram.com/scooter_club_kalsdorf/"
            target="_blank"
          >
            <Instagram className="hover:text-pink-500 transition" />
          </a>

          <a
            href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/"
            target="_blank"
          >
            <Facebook className="hover:text-blue-500 transition" />
          </a>

          <a href="tel:+436641259454">
            <Phone className="hover:text-green-500 transition" />
          </a>

          <a
            href="#mitglied"
            className="rounded-full bg-red-600 hover:bg-red-700 transition px-6 py-3 font-bold"
          >
            Become a Member
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menü */}

      {open && (

        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col p-8 gap-6">

            <a href="#about" onClick={() => setOpen(false)}>
              Über Uns
            </a>

            <a href="#events" onClick={() => setOpen(false)}>
              Events
            </a>

            <a href="#gallery" onClick={() => setOpen(false)}>
              Galerie
            </a>

            <a href="#kontakt" onClick={() => setOpen(false)}>
              Kontakt
            </a>

            <hr className="border-zinc-700" />

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

            <a href="tel:+436641259454">
              +43 664 1259454
            </a>

            <a
              href="#mitglied"
              className="bg-red-600 rounded-xl text-center py-3 font-bold"
            >
              Become a Member
            </a>

          </div>

        </div>

      )}

    </header>
  );
}
