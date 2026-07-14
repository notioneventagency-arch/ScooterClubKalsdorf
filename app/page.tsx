export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}

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

      {/* ÜBER UNS */}

      <section
        id="about"
        className="max-w-6xl mx-auto py-24 px-6"
      >
        <h2 className="text-5xl font-black mb-8">
          Über Uns
        </h2>

        <p className="text-lg text-zinc-300 leading-8">
          Der Scooter Club Kalsdorf steht für
          Freundschaft, gemeinsame Ausfahrten
          und die Leidenschaft für klassische
          Vespa Roller.
        </p>
      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="bg-zinc-900 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-12">
            Kommende Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Saisonstart
              </h3>

              <p className="mt-4 text-zinc-400">
                April
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Vespa Treffen
              </h3>

              <p className="mt-4 text-zinc-400">
                Juni
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Abschlussfahrt
              </h3>

              <p className="mt-4 text-zinc-400">
                Oktober
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}

      <section
        id="gallery"
        className="max-w-6xl mx-auto py-24 px-6"
      >
        <h2 className="text-5xl font-black mb-12">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card-premium h-64" />
          <div className="card-premium h-64" />
          <div className="card-premium h-64" />
          <div className="card-premium h-64" />
        </div>
      </section>

      {/* INSTAGRAM */}

      <section className="bg-zinc-900 py-24 px-6 text-center">
        <h2 className="text-5xl font-black mb-6">
          Instagram
        </h2>

        <p className="text-zinc-400 mb-8">
          Folge unseren neuesten Ausfahrten.
        </p>

        <a
          href="https://www.instagram.com/scooter_club_kalsdorf/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium px-8 py-4 inline-block"
        >
          Instagram besuchen
        </a>
      </section>

      {/* KONTAKT */}

      <section
        id="kontakt"
        className="py-24 px-6 text-center"
      >
        <h2 className="text-5xl font-black mb-8">
          Kontakt
        </h2>

        <p className="mb-3 text-lg">
          📧 scooter.kalsdorf@gmail.com
        </p>

        <p className="text-lg">
          📞 +43 664 1259454
        </p>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10">
        <div className="text-center">
          <p className="text-zinc-500">
            © 2026 Scooter Club Kalsdorf
          </p>
        </div>
      </footer>
    </main>
  );
}
