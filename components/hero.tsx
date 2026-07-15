"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* ================= Hintergrund ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Wenn hero.mp4 vorhanden ist einfach einkommentieren */}

        {/*
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        */}

        <motion.img
          src="/images/hero.jpg"
          alt="Scooter Club Kalsdorf"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

      </div>

      {/* ================= Overlay ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,.65)_100%)]" />

      {/* ================= Inhalt ================= */}

      <div className="relative z-20 flex h-full items-center justify-center">

        <div className="text-center px-6">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="inline-flex mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-2 text-sm uppercase tracking-[0.3em]"
          >
            Since 2023 • Kalsdorf
          </motion.div>

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, scale: .7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />

            <img
              src="/logo/logo.png"
              alt="Scooter Club Kalsdorf"
              className="relative mx-auto mb-10 w-48 md:w-72 drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]"
            />

          </motion.div>

          {/* Überschrift */}

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="text-5xl md:text-8xl xl:text-9xl font-black uppercase leading-none tracking-wide"
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
            transition={{ delay: .8 }}
            className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl leading-9 text-zinc-300"
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
            className="mt-14 flex flex-wrap justify-center gap-6"
          >

            <a
              href="#events"
              className="rounded-full bg-gradient-to-r from-red-600 to-red-700 px-10 py-5 text-lg font-bold shadow-[0_20px_40px_rgba(220,38,38,.35)] transition hover:scale-105"
            >
              Unsere Events
            </a>

            <a
              href="#mitglied"
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-10 py-5 text-lg font-bold transition hover:bg-white hover:text-black"
            >
              Become a Member
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >

        <ChevronDown
          size={42}
          className="text-white/70"
        />

      </motion.div>

    </section>
  );
}
