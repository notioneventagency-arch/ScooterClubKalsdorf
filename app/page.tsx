export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black">
          SCOOTER CLUB
          <br />
          KALSDORF
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Vespa • Gemeinschaft • Leidenschaft
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">
          Über Uns
        </h2>

        <p className="text-zinc-300">
          Der Scooter Club Kalsdorf steht für Gemeinschaft,
          Ausfahrten und die Leidenschaft für Vespa Roller.
        </p>
      </section>

      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-premium p-6 rounded-2xl">
              Saisonstart
            </div>

            <div className="card-premium p-6 rounded-2xl">
              Vespa Treffen
            </div>

            <div className="card-premium p-6 rounded-2xl">
              Abschlussfahrt
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Kontakt
        </h2>

        <p>📧 scooter.kalsdorf@gmail.com</p>
        <p>📞 +43 664 1259454</p>
      </section>
    </main>
  );
}
