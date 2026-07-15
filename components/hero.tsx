"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
return (
<section className="relative h-screen overflow-hidden">

  {/* ================= Hintergrund Video ================= */}

  <div className="absolute inset-0 overflow-hidden">

    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/public/video/hero.mp4" type="video/mp4" />
    </video>

  </div>

  {/* ================= Overlay ================= */}

  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,.65)_100%)]" />

  {/* ================= Inhalt ================= */}

  <div className="relative z-20 flex h-full items-center justify-center">

    <div className="text-center px-4 sm:px-6">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex mb-6 md:mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 md:px-6 py-2 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]"
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
        <div className="absolute left-1/2 top-1/2 h-40 w-40 md:h-56 md:w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />

        <img
          src="/public/logo/logo.png"
          alt="Scooter Club Kalsdorf"
          className="relative mx-auto mb-6 md:mb-10 w-32 sm:w-40 md:w-72 drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]"
        />
      </motion.div>

      {/* Überschrift */}

      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-8xl xl:text-9xl font-black uppercase leading-none tracking-wide"
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
        transition={{ delay: 0.8 }}
        className="mt-6 md:mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-2xl leading-7 md:leading-9 text-zinc-300"
      >
        Italienischer Lifestyle.
        <br />
        Leidenschaft für Vespa.
        <br />
        Gemeinsam Kilometer sammeln.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
      >
        <a
          href="#events"
          className="rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold shadow-[0_20px_40px_rgba(220,38,38,.35)] transition hover:scale-105"
        >
          Unsere Events
        </a>

        <a
          href="#mitglied"
          className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold transition hover:bg-white hover:text-black"
        >
          Become a Member
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
    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
  >
    <ChevronDown
      size={42}
      className="text-white/70"
    />
  </motion.div>

</section>

);
}
