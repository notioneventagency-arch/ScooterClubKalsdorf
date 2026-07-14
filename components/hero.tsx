"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Hintergrund */}
      <div className="absolute inset-0">

        {/* Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-[pulse_18s_ease-in-out_infinite]"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Bild-Fallback */}
        <img
          src="/images/hero.jpg"
          alt="Scooter Club Kalsdorf"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />
      </div>

      {/* Inhalt */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="mx-auto mb-10 w-52 md:w-72 drop-shadow-2xl"
          />

          {/* Titel */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-wider text-white"
          >
            Scooter Club
            <br />
            Kalsdorf
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-8 max-w-3xl text-lg md:text-2xl text-zinc-200"
          >
            Leidenschaft • Gemeinschaft • Vespa • Ausfahrten
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <a
              href="#events"
              className="rounded-2xl bg-red-600 px-9 py-4 text-lg font-bold text-white transition hover:scale-105 hover:bg-red-700"
            >
              Unsere Events
            </a>

            <a
              href="#about"
              className="rounded-2xl border border-white/40 bg-white/10 px-9 py-4 text-lg font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown className="h-10 w-10 animate-bounce" />
      </motion.a>

    </section>
  );
}
