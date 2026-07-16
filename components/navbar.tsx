"use client";

import { useEffect, useState } from "react";
import {
  Instagram,
  Facebook,
  Menu,
  X,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const links = [
  { name: "Über Uns", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Galerie", href: "#gallery" },
  { name: "Kontakt", href: "#kontakt" },
   { name: "Impressum", href: "#impressum" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">

      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}

       

              <h1 className="font-black uppercase tracking-[0.25em] leading-none">
                Scooter Club Kalsdorf
              </h1>


            </div>

          </a>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-medium text-zinc-200 transition duration-300 hover:text-red-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Desktop Right */}

          <div className="hidden lg:flex items-center gap-5">

            <a
              href="https://www.instagram.com/scooter_club_kalsdorf/"
              target="_blank"
              className="hover:text-pink-500 transition hover:scale-110"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/"
              target="_blank"
              className="hover:text-blue-500 transition hover:scale-110"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://wa.me/436641259454"
              target="_blank"
              className="hover:text-green-500 transition hover:scale-110"
            >
              <MessageCircle size={22} />
            </a>

            <a
              href="#mitglied"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-7 py-3 font-bold shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
            >
              Become a Member

              <ChevronRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[700px] mt-4" : "max-h-0"
        }`}
      >
        <div className="rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/10 p-8">

          <div className="flex flex-col gap-6">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl font-semibold hover:text-red-500 transition"
              >
                {item.name}
              </a>
            ))}

            <hr className="border-white/10" />

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

            <a
              href="https://wa.me/436641259454"
              target="_blank"
            >
              WhatsApp
            </a>

            <a
              href="#mitglied"
              className="mt-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 py-4 text-center font-bold"
            >
              Become a Member
            </a>

          </div>

        </div>
      </div>

    </header>
  );
}
