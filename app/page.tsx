export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold">
          Scooter Club Kalsdorf
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Vespa • Gemeinschaft • Ausfahrten
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">
          Kontakt
        </h2>

        <p>📧 scooter.kalsdorf@gmail.com</p>
        <p>📞 +43 664 1259454</p>
      </section>
    </main>
  );
}
