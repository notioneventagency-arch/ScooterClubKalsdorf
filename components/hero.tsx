"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Hintergrund */}

      <div className="absolute inset-0">

        {/* Hero Bild */}

        <img
          src="/images/hero.jpg"
          alt="Scooter Club Kalsdorf"
          className="w-full h-full object-cover scale-105 animate-pulse"
        />

        {/*
        Sobald du ein Video hast:

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        */}

      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* Inhalt */}

      <div className="relative z-20 flex h-full items-center justify-center">

        <div className="text-center px-6">

          <motion.img
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="mx-auto mb-10 w-44 md:w-72 drop-shadow-2xl"
            initial={{ opacity: 0, scale: .7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-wider"
          >
            Scooter Club
            <br />
            Kalsdorf
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="mt-8 text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto"
          >
            Gemeinsam unterwegs.
            <br />
            Vespa • Gemeinschaft • Leidenschaft • Ausfahrten
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >

            <a
              href="#events"
              className="rounded-full bg-red-600 hover:bg-red-700 transition px-10 py-5 text-lg font-bold shadow-2xl"
            >
              Unsere Events
            </a>

            <a
              href="#mitglied"
              className="rounded-full border border-white hover:bg-white hover:text-black transition px-10 py-5 text-lg font-bold"
            >
              Become a Member
            </a>

          </motion.div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <ChevronDown
          size={40}
          className="text-white/80"
        />

      </div>

    </section>
  );
}
