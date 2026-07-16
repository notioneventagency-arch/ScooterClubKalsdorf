"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Video Hintergrund */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Content */}

      <div className="relative z-20 flex min-h-screen items-center justify-center py-40">

        <div className="w-full max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="inline-flex mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-2 text-sm uppercase tracking-[0.3em]"
          >
            Since 2023 • Kalsdorf
          </motion.div>

          {/* Logo */}

          <motion.img
            initial={{ opacity: 0, scale: .7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="mx-auto w-40 md:w-56 lg:w-72 drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]"
          />

          {/* Titel */}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-none"
          >
            Scooter Club
            <br />

            <span className="text-red-500">
              Kalsdorf
            </span>
          </motion.h1>

          {/* Text */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-10 text-lg md:text-2xl text-zinc-300 leading-8 md:leading-10"
          >
            Italienischer Lifestyle.
            <br />
            Leidenschaft für Vespa.
            <br />
            Gemeinsam Kilometer sammeln.
          </motion.p>

          {/* Teamfoto */}

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            src="/images/team.jpg"
            alt="Scooter Club Team"
            className="mx-auto mt-12 w-full max-w-3xl rounded-3xl border border-white/10 shadow-2xl"
          />

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5"
          >
            <a
              href="#events"
              className="rounded-full bg-gradient-to-r from-red-600 to-red-700 px-10 py-5 text-lg font-bold shadow-[0_20px_40px_rgba(220,38,38,.35)] transition hover:scale-105"
            >
              Unsere Events
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-10 py-5 text-lg font-bold transition hover:bg-white hover:text-black"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>

        </div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={42}
          className="text-white/70"
        />
      </motion.div>

    </section>
  );
}
