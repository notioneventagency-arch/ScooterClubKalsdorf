import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-red-500 font-semibold uppercase tracking-[0.3em]">
              Scooter Club Kalsdorf
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-8">
              Gemeinsam unterwegs.
            </h2>

            <p className="text-zinc-300 leading-9 text-lg">
              Der Scooter Club Kalsdorf verbindet Menschen,
              die ihre Leidenschaft für Vespa, italienische
              Roller und gemeinsame Touren teilen.

              <br />
              <br />

              Ob gemütliche Ausfahrten, Vespa Treffen oder
              gemeinsame Stammtische – bei uns steht die
              Gemeinschaft an erster Stelle.
            </p>

          </div>

          <div>

            <img
              src="/images/about.jpg"
              alt="Scooter Club"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      </section>

      {/* ================= EVENTS ================= */}

      <section
        id="events"
        className="bg-zinc-900 py-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Nächste Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card-premium p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Saisonstart
              </h3>

              <p className="text-zinc-400">
                April 2026
              </p>
            </div>

            <div className="card-premium p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Vespa Treffen
              </h3>

              <p className="text-zinc-400">
                Juni 2026
              </p>
            </div>

            <div className="card-premium p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Abschlussfahrt
              </h3>

              <p className="text-zinc-400">
                Oktober 2026
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= GALERIE ================= */}

      <section
        id="gallery"
        className="max-w-7xl mx-auto py-28 px-6"
      >

        <h2 className="text-5xl font-black text-center mb-16">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <img
            src="/gallery/1.jpg"
            className="rounded-3xl hover:scale-105 duration-300"
          />

          <img
            src="/gallery/2.jpg"
            className="rounded-3xl hover:scale-105 duration-300"
          />

          <img
            src="/gallery/3.jpg"
            className="rounded-3xl hover:scale-105 duration-300"
          />

          <img
            src="/gallery/4.jpg"
            className="rounded-3xl hover:scale-105 duration-300"
          />

        </div>

      </section>

      {/* ================= KONTAKT ================= */}

      <section
        id="kontakt"
        className="bg-zinc-900 py-28 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-8">
            Kontakt
          </h2>

          <p className="text-xl">
            📧 scooter.kalsdorf@gmail.com
          </p>

          <p className="text-xl mt-4">
            📞 +43 664 1259454
          </p>

        </div>

      </section>

    </main>
  );
}
