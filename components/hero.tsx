"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Hintergrundbild oder Video */}
      <div className="absolute inset-0">

        {/* Wenn du später ein Video hast,
            ersetze das Bild einfach durch das Video */}

        <img
          src="/images/hero.jpg"
          alt="Scooter Club Kalsdorf"
          className="w-full h-full object-cover"
        />

        {/* VIDEO (später verwenden)

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

      {/* Dunkler Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Inhalt */}

      <div className="relative z-20 flex h-full items-center justify-center">

        <div className="text-center px-6">

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/logo/logo.png"
            alt="Logo"
            className="mx-auto mb-10 w-56 md:w-80"
          />

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="text-5xl md:text-8xl font-black uppercase"
          >
            Scooter Club
            <br />
            Kalsdorf
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            className="mt-8 text-xl text-zinc-300 max-w-3xl mx-auto"
          >
            Gemeinsam unterwegs.
            <br />
            Vespa • Gemeinschaft • Touren • Leidenschaft
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >

            <a
              href="#events"
              className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-bold hover:bg-red-700 duration-300"
            >
              Unsere Events
            </a>

            <a
              href="#kontakt"
              className="rounded-2xl border border-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-black duration-300"
            >
              Kontakt
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
