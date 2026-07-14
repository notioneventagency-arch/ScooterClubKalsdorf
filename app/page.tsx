import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-black gold-text">
            SCOOTER CLUB
            <br />
            KALSDORF
          </h1>

          <p className="mt-6 text-xl text-zinc-400">
            Vespa • Gemeinschaft • Leidenschaft
          </p>
        </div>
      </section>

      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-6">
          Über Uns
        </h2>

        <p>
          Der Scooter Club Kalsdorf steht für
          Gemeinschaft, Vespa-Kultur und
          gemeinsame Ausfahrten.
        </p>
      </section>

      <section
        id="events"
        className="bg-zinc-900 py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-premium p-6">
              Saisonstart
            </div>

            <div className="card-premium p-6">
              Vespa Treffen
            </div>

            <div className="card-premium p-6">
              Abschlussfahrt
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl font-bold mb-8">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card-premium h-48"></div>
          <div className="card-premium h-48"></div>
          <div className="card-premium h-48"></div>
          <div className="card-premium h-48"></div>
        </div>
      </section>

      <section
        id="kontakt"
        className="py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Kontakt
        </h2>

        <p>📧 scooter.kalsdorf@gmail.com</p>
        <p>📞 +43 664 1259454</p>
      </section>
    </main>
  );
}
