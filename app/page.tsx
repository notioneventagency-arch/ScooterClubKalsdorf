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
          /logo/logo.png

          <h1 className="text-6xl md:text-8xl font-black">
            Scooter Club
            <br />
            Kalsdorf
          </h1>

          <p className="mt-6 text-xl text-zinc-300">
            Vespa • Gemeinschaft • Leidenschaft
          </p>
        </div>
      </section>

      {/* ÜBER UNS */}

      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-5xl font-bold mb-8">
          Über Uns
        </h2>

        <p className="text-lg text-zinc-300 leading-8">
          Der Scooter Club Kalsdorf steht für Freundschaft,
          gemeinsame Ausfahrten und die Leidenschaft für
          klassische Vespa Roller.
        </p>
      </section>

      {/* EVENTS */}

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            Nächste Events
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

      {/* KONTAKT */}

      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Kontakt
        </h2>

        <p>📧 scooter.kalsdorf@gmail.com</p>
        <p>📞 +43 664 1259454</p>
      </section>
    </main>
  );
}
