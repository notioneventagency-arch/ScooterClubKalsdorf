"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= Hintergrund Video ================= */}

      <div className="absolute inset-0">
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
      </div>

      {/* ================= Overlay ================= */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* ================= Hero Inhalt ================= */}

      <div className="relative z-20 min-h-screen flex items-center justify-center py-32">

        <div className="w-full max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-2 text-xs md:text-sm uppercase tracking-[0.3em]"
          >
            Since 2023 • Kalsdorf
          </motion.div>

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />

            <img
              src="/logo/logo.png"
              alt="Scooter Club Kalsdorf"
              className="relative mx-auto mb-8 w-36 md:w-56 lg:w-72 drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]"
            />
          </motion.div>

          {/* Überschrift */}

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black uppercase leading-none"
          >
            Scooter Club
            <br />

            <span className="text-red-500">
              Kalsdorf
            </span>
          </motion.h1>

          {/* Teamfoto + Text */}

          <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">

            <motion.img
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              src="/images/team.jpg"
              alt="Scooter Club Team"
              className="w-full max-w-xs md:max-w-md rounded-3xl border border-white/10 shadow-2xl"
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <p className="text-lg md:text-2xl leading-8 md:leading-10 text-zinc-300">
                Italienischer Lifestyle.
                <br />
                Leidenschaft für Vespa.
                <br />
                Gemeinsam Kilometer sammeln.
              </p>
            </motion.div>

          </div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
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

      {/* Scroll Indicator */}

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
