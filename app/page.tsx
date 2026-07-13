export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">

          <img
            src="/logo/logo.png"
            alt="Scooter Club Kalsdorf"
            className="mx-auto w-52 md:w-72 mb-8"
          />

          <h1 className="text-5xl md:text-8xl font-black uppercase">
            Scooter Club Kalsdorf
          </h1>

          <p className="text-xl md:text-2xl mt-6 text-zinc-300">
            Vespa • Gemeinschaft • Leidenschaft • Ausfahrten
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <a
              href="#events"
              className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold"
            >
              Unsere Events
            </a>

            <a
              href="#kontakt"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-bold"
            >
              Kontakt
            </a>

          </div>

        </div>
      </section>

      {/* ÜBER UNS */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-10">
          Über unseren Club
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-zinc-300 leading-8 text-lg">

              Willkommen beim Scooter Club Kalsdorf.

              Gemeinsam organisieren wir Ausfahrten,
              Vespa-Treffen und gemütliche Stammtische.

              Unsere Leidenschaft verbindet Menschen,
              die italienische Roller lieben.

            </p>

          </div>

          <img
            src="/images/about.jpg"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="bg-zinc-900 py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-14">
            Nächste Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Saisonstart
              </h3>

              <p className="mt-4">
                April
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Vespa Treffen
              </h3>

              <p className="mt-4">
                Juni
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Abschlussfahrt
              </h3>

              <p className="mt-4">
                Oktober
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALERIE */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-12">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <img src="/gallery/1.jpg" className="rounded-2xl hover:scale-105 duration-300" />
          <img src="/gallery/2.jpg" className="rounded-2xl hover:scale-105 duration-300" />
          <img src="/gallery/3.jpg" className="rounded-2xl hover:scale-105 duration-300" />
          <img src="/gallery/4.jpg" className="rounded-2xl hover:scale-105 duration-300" />

        </div>

      </section>

      {/* KONTAKT */}

      <section
        id="kontakt"
        className="bg-zinc-900 py-24 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10">
            Kontakt
          </h2>

          <p className="mb-3">
            📧 scooter.kalsdorf@gmail.com
          </p>

          <p className="mb-10">
            📞 +43 664 1259454
          </p>

          <form className="space-y-5">

            <input
              placeholder="Name"
              className="w-full rounded-xl p-4 text-black"
            />

            <input
              placeholder="E-Mail"
              className="w-full rounded-xl p-4 text-black"
            />

            <textarea
              rows={6}
              placeholder="Nachricht"
              className="w-full rounded-xl p-4 text-black"
            />

            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold">
              Nachricht senden
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-black py-10 text-center text-zinc-500">

        <p>© 2026 Scooter Club Kalsdorf</p>

        <div className="mt-6 flex justify-center gap-6">

          <a href="https://www.instagram.com/scooter_club_kalsdorf/">
            Instagram
          </a>

          <a href="https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/">
            Facebook
          </a>

        </div>

      </footer>

    </main>
  )
}
