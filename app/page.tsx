export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            /logo/logo.png
            <span className="font-bold tracking-wider">
              SCOOTER CLUB KALSDORF
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            #about
              Über Uns
            </a>
            #events:text-yellow-500">
              Events
            </a>
            #gallery
              Galerie
            </a>
            #kontakt
          </div>

        </div>
      </nav>

      {/* HERO */}

      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 px-6 text-center max-w-6xl">

          /logo/logo.png

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-6">
            Vespa Lifestyle • Gemeinschaft • Freiheit
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            SCOOTER CLUB
            <br />
            KALSDORF
          </h1>

          <p className="mt-8 text-xl md:text-3xl text-zinc-300 max-w-4xl mx-auto">
            Leidenschaft für klassische Vespas,
            unvergessliche Touren und echte Freundschaften.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            #events

            #gallery
              Galerie ansehen
            </a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">

            <div>
              <h3 className="text-4xl font-black text-yellow-500">50+</h3>
              <p className="text-zinc-400">Mitglieder</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-yellow-500">100+</h3>
              <p className="text-zinc-400">Touren</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-yellow-500">10+</h3>
              <p className="text-zinc-400">Jahre Leidenschaft</p>
            </div>

          </div>

        </div>
      </section>

      {/* ÜBER UNS */}

      <section
        id="about"
        className="max-w-7xl mx-auto py-28 px-6"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-yellow-500 uppercase tracking-widest mb-4">
              Über Uns
            </p>

            <h2 className="text-5xl font-black mb-6">
              Mehr als nur ein Rollerclub
            </h2>

            <p className="text-zinc-300 text-lg leading-9">
              Der Scooter Club Kalsdorf steht für italienischen Lifestyle,
              kameradschaftliche Gemeinschaft und die Leidenschaft für
              klassische Vespas.

              Unsere Mitglieder organisieren regelmäßig Ausfahrten,
              Treffen und gemeinsame Veranstaltungen in der gesamten
              Steiermark.

              Was uns verbindet, ist die Freude am Fahren und die Liebe
              zu zeitlosen Fahrzeugen mit Charakter.
            </p>

          </div>

          /images/about.jpg

        </div>
      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="bg-zinc-900 py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black mb-14">
            Kommende Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700">
              <h3 className="text-2xl font-bold mb-3">
                Saisonstart
              </h3>
              <p className="text-zinc-400">
                Gemeinsamer Start in die neue Saison.
              </p>
              <p className="mt-6 text-yellow-500 font-semibold">
                April
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700">
              <h3 className="text-2xl font-bold mb-3">
                Vespa Treffen
              </h3>
              <p className="text-zinc-400">
                Regionales Treffen mit befreundeten Clubs.
              </p>
              <p className="mt-6 text-yellow-500 font-semibold">
                Juni
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700">
              <h3 className="text-2xl font-bold mb-3">
                Abschlussfahrt
              </h3>
              <p className="text-zinc-400">
                Gemeinsamer Saisonabschluss.
              </p>
              <p className="mt-6 text-yellow-500 font-semibold">
                Oktober
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GALERIE */}

      <section
        id="gallery"
        className="max-w-7xl mx-auto py-28 px-6"
      >
        <h2 className="text-5xl font-black mb-14">
          Unsere Ausfahrten
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="overflow-hidden rounded-3xl">
            /gallery/1.jpg
          </div>

          <div className="overflow-hidden rounded-3xl">
            /gallery/2.jpg
          </div>

          <div className="overflow-hidden rounded-3xl">
            /gallery/3.jpg
          </div>

          <div className="overflow-hidden rounded-3xl">
            /gallery/4.jpg
          </div>

        </div>
      </section>

      {/* INSTAGRAM */}

      <section className="bg-zinc-900 py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-6">
            Folge uns auf Instagram
          </h2>

          <p className="text-zinc-400 mb-10">
            Die neuesten Bilder und Eindrücke unserer Touren.
          </p>

          www.instagram.com/scooter_club_kalsdorf/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400"
          >
            Instagram besuchen
          </a>

        </div>

      </section>

      {/* KONTAKT */}

      <section
        id="kontakt"
        className="py-28 px-6"
      >
        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-black mb-10">
            Kontakt
          </h2>

          <p className="mb-3 text-lg">
            📧 scooter.kalsdorf@gmail.com
          </p>

          <p className="mb-12 text-lg">
            📞 +43 664 1259454
          </p>

          <form className="space-y-5">

            <input
              placeholder="Name"
              className="w-full bg-zinc-900 rounded-2xl p-4"
            />

            <input
              placeholder="E-Mail"
              className="w-full bg-zinc-900 rounded-2xl p-4"
            />

            <textarea
              rows={6}
              placeholder="Nachricht"
              className="w-full bg-zinc-900 rounded-2xl p-4"
            />

            <button
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400"
            >
              Nachricht senden
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 py-12">

        <div className="text-center">

          <p className="text-zinc-500">
            © 2026 Scooter Club Kalsdorf
          </p>

          <div className="flex justify-center gap-8 mt-6">

            https://www.instagram.com/scooter_club_kalsdorf/
              Instagram
            </a>

            https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/
              Facebook
            </a>

          </div>

        </div>

      </footer>

    </main>
  )
}
