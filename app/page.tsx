export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black">
            Scooter Club Kalsdorf
          </h1>

          <p className="mt-6 text-xl text-zinc-300">
            Vespa • Gemeinschaft • Leidenschaft
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-5xl font-bold mb-8">
          Über Uns
        </h2>

        <p className="text-zinc-300">
          Der Scooter Club Kalsdorf steht für Gemeinschaft,
          Ausfahrten und italienischen Vespa Lifestyle.
        </p>
      </section>

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
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

      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-5xl font-bold mb-12">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-52 bg-zinc-800 rounded-3xl" />
          <div className="h-52 bg-zinc-800 rounded-3xl" />
          <div className="h-52 bg-zinc-800 rounded-3xl" />
          <div className="h-52 bg-zinc-800 rounded-3xl" />
        </div>
      </section>

      <section 
