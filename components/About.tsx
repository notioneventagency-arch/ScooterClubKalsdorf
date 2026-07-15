"use client";

import { motion } from "framer-motion";
import { Users, CalendarDays, Bike, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Bild */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <img
              src="/images/about.jpg"
              alt="Scooter Club Kalsdorf"
              className="rounded-[32px] shadow-2xl border border-white/10"
            />
          </motion.div>

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[0.35em] text-red-500 font-bold">
              Scooter Club Kalsdorf
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
              Leidenschaft auf
              <br />
              zwei Rädern.
            </h2>

            <p className="mt-8 text-zinc-300 leading-9 text-lg">

              Seit <strong>2023</strong> verbindet der
              Scooter Club Kalsdorf Menschen mit der
              gemeinsamen Leidenschaft für die legendäre
              Vespa und den italienischen Lebensstil.

              <br /><br />

              Unser Verein wurde in Kalsdorf gegründet
              und verfolgt das Ziel, den italienischen
              Lifestyle, die Vespa-Kultur sowie
              gemeinsame Touren, Treffen und
              Ausfahrten zu fördern.

            </p>

            <div className="mt-6 flex items-center gap-3 text-zinc-400">

              <MapPin className="text-red-500" size={20} />

              Kalsdorf bei Graz · Österreich

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#mitglied"
                className="rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 font-bold shadow-xl hover:scale-105 transition"
              >
                Become a Member
              </a>

              <a
                href="https://wa.me/436641259454"
                target="_blank"
                className="rounded-full border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition"
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

        </div>

        {/* Statistiken */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="card-premium p-8 text-center">
            <CalendarDays
              className="mx-auto mb-5 text-red-500"
              size={40}
            />

            <h3 className="text-5xl font-black text-red-500">
              2023
            </h3>

            <p className="mt-3 text-zinc-400">
              gegründet
            </p>
          </div>

          <div className="card-premium p-8 text-center">
            <Users
              className="mx-auto mb-5 text-red-500"
              size={40}
            />

            <h3 className="text-5xl font-black text-red-500">
              20+
            </h3>

            <p className="mt-3 text-zinc-400">
              Mitglieder
            </p>
          </div>

          <div className="card-premium p-8 text-center">
            <Bike
              className="mx-auto mb-5 text-red-500"
              size={40}
            />

            <h3 className="text-5xl font-black text-red-500">
              15+
            </h3>

            <p className="mt-3 text-zinc-400">
              Ausfahrten / Jahr
            </p>
          </div>

          <div className="card-premium p-8 text-center">

            <div className="text-5xl mb-5">
              ❤️
            </div>

            <h3 className="text-3xl font-black text-red-500">
              Vespa
            </h3>

            <p className="mt-3 text-zinc-400">
              Lifestyle
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
