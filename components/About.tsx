export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Bild */}

        <div>

          <img
            src="/images/about.jpg"
            alt="Scooter Club Kalsdorf"
            className="rounded-3xl shadow-2xl"
          />

        </div>

        {/* Text */}

        <div>

          <span className="text-red-500 uppercase tracking-[0.35em] font-bold">
            Scooter Club Kalsdorf
          </span>

          <h2 className="section-title mt-6">
            Leidenschaft auf zwei Rädern
          </h2>

          <p className="section-subtitle">

            Seit <strong>2023</strong> verbindet der
            Scooter Club Kalsdorf Menschen mit einer
            gemeinsamen Leidenschaft:

            den italienischen Lebensstil und die
            legendäre Vespa.

            <br /><br />

            Unser Verein wurde in Kalsdorf gegründet und
            verfolgt das Ziel, den italienischen Lifestyle,
            die Vespa-Kultur sowie gemeinsame Touren,
            Treffen und Ausfahrten zu fördern.

          </p>

          {/* Zahlen */}

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="card-premium p-8">

              <h3 className="text-5xl font-black text-red-500">
                2023
              </h3>

              <p className="mt-3 text-zinc-400">
                gegründet
              </p>

            </div>

            <div className="card-premium p-8">

              <h3 className="text-5xl font-black text-red-500">
                20+
              </h3>

              <p className="mt-3 text-zinc-400">
                Mitglieder
              </p>

            </div>

            <div className="card-premium p-8">

              <h3 className="text-5xl font-black text-red-500">
                15+
              </h3>

              <p className="mt-3 text-zinc-400">
                Ausfahrten / Jahr
              </p>

            </div>

            <div className="card-premium p-8">

              <h3 className="text-5xl font-black text-red-500">
                ♡
              </h3>

              <p className="mt-3 text-zinc-400">
                Vespa Lifestyle
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
