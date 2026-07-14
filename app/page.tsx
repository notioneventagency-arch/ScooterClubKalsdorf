export default function Home() {
  return (
    <main className="bg-black text-white">
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

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <a
                   <a
              href="#kontakt"
              className="border border-white/20 px-8 py-4 rounded-       id="about"
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
