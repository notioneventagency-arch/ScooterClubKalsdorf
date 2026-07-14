export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          /logo.png"
            alt="Scooter Club Kalsdorf"
            className="mx-auto w-40 mb-8"
          />

          <h1 className="text-6xl md:text-8xl font-black">
            SCOOTER CLUB
            <br />
            KALSDORF
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-zinc-300">
            Vespa • Gemeinschaft • Leidenschaft
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            #eventsbg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold"
            >
              Events
            </a>

            <a
              href="#kontakt"
              className  </div>
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
          Der Scooter Club Kalsdorf steht für Freundschaft,
          gemeinsame Ausfahrten und die Leidenschaft für
          klassische Vespa Roller.

          <br />
          <br />

          Unsere Mitglieder organisieren regelmäßig Treffen,
          Ausfahrten und Veranstaltungen in der gesamten
          Steiermark.
        </p>
      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="bg-zinc-900 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-12">
            Nächste Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Saisonstart
              </h3>

              <p className="text-zinc-400 mt-4">
                April
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Vespa Treffen
              </h3>

              <p className="text-zinc-400 mt-4">
                Juni
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold">
                Abschlussfahrt
              </h3>

              <p className="text-zinc-400 mt-4">
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
          .jpg"
            alt="Galerie 1"
            className="rounded-3xl w-full h-64 object-cover"
          />

          /gallery/2.jpg

          gallery/3.jpg"
            alt="Galerie 3"
            className="rounded-3xl w-full h-64 object-cover"
          />

          /gallery/4.jpg alt="Galerie 4"
            className="rounded-3xl w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* INSTAGRAM */}

      <section className="bg-zinc-900 py-24 px-6 text-center">
        <h2 className="text-5xl font-black mb-6">
          Instagram
        </h2>

        <p className="text-zinc-400 mb-10">
          Folge unseren neuesten Ausfahrten und Events.
        </p>

        .instagram.com/scooter_club_kalsdorf/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold"
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

      <footer className="border-t border-zinc-800 py-10">
        <div className="text-center">
          <p className="text-zinc-500">
            © 2026 Scooter Club Kalsdorf
          </p>

          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://www.instagram.com/scooter_club_kalsdorf/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
