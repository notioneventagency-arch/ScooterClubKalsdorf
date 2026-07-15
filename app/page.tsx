import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      {/* ================= EVENTS ================= */}

      <section
        id="events"
        className="bg-zinc-900 py-28"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="section-title text-center">
            Nächste Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Saisonstart
              </h3>

              <p className="mt-4 text-zinc-400">
                April 2026
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Vespa Treffen
              </h3>

              <p className="mt-4 text-zinc-400">
                Juni 2026
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Abschlussfahrt
              </h3>

              <p className="mt-4 text-zinc-400">
                Oktober 2026
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= GALERIE ================= */}

      <section
        id="gallery"
        className="max-w-7xl mx-auto py-32 px-6"
      >

        <h2 className="section-title text-center">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-16">

          {Array.from({ length: 20 }).map((_, index) => (
            <img
              key={index}
              src={`/gallery/${index + 1}.jpg`}
              alt={`Scooter Club ${index + 1}`}
              className="rounded-3xl zoom aspect-square object-cover"
            />
          ))}

        </div>

      </section>

      {/* ================= KONTAKT ================= */}

      <section
        id="kontakt"
        className="bg-zinc-900 py-28 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="section-title">
            Kontakt
          </h2>

          <p className="text-xl mt-8">
            📧 scooter.kalsdorf@gmail.com
          </p>

          <p className="text-xl mt-3">
            📞 0664 1259454
          </p>

        </div>

      </section>

    </main>
  );
}
